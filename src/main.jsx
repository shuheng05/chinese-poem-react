import React from 'react'
import ReactDOM from 'react-dom/client'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import App from './App';
import {BrowserRouter} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)
ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<BrowserRouter>
				<App/>
		</BrowserRouter>
	// </React.StrictMode>

)
