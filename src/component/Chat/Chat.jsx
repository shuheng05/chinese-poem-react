import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // 支持GitHub Flavored Markdown

function Chat() {
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [streaming, setStreaming] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            // 调用API发送用户输入给后端或模拟AI回答
            chat();
            setInputValue('');
        }
    };

    async function chat() {
        if (!streaming) {
            setStreaming(true); // 防止重复请求
            try {
                const resp = await fetch('/api/chat', {
                    method: 'POST',
                    body: JSON.stringify({
                        "message": inputValue
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!resp.ok) {
                    throw new Error(`HTTP error! status: ${resp.status}`);
                }

                const reader = resp.body.getReader();
                const textDecoder = new TextDecoder();

                while (true) {
                    const { done, value} = await reader.read();
                    if (done) {
                        break;
                    }
                    let text = textDecoder.decode(value);
                    text = text.replace(/\n+$/g, '');
                    setMessages(prevMessages => {
                        const lastMessage = prevMessages[prevMessages.length - 1];
                        if (lastMessage && lastMessage.sender === 'bot') {
                            return [
                                ...prevMessages.slice(0, -1),
                                { ...lastMessage, text: lastMessage.text + text }
                            ];
                        } else {
                            return [
                                ...prevMessages,
                                { text, sender: 'bot' }
                            ];
                        }
                    });
                }

            } catch (error) {
                console.error('Failed to fetch:', error);
            } finally {
                setStreaming(false);
            }
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}>
                        {message.sender === 'bot' ? (
                            <ReactMarkdown
                                children={message.text}
                                components={{
                                    root: 'p',
                                }}
                                remarkPlugins={[remarkGfm]} // 使用remarkGfm插件
                            />
                        ) : (
                            message.text
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleInputChange} placeholder="Type your message here" />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat;
