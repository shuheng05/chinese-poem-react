import {useLayoutEffect, useState} from 'react'
import {chooseAnimation, initSmoothScrolling, supportsCssVars, useImagePreloader} from '../../utils/index.js'
import gridAnimationConfig from './const.jsx'
import './index.less'

function GridAnimation() {
	const [loading, setLoading] = useState(true)
	const images = useImagePreloader()
	useLayoutEffect(() => {
		supportsCssVars() || alert('请在支持CSS变量的现代浏览器中查看此演示')
		initSmoothScrolling()
		const grids = document.querySelectorAll('.grid')
		Array.from(grids).map((grid, i) => chooseAnimation(`grid--${i + 1}`, grid))
		setLoading(false)
	}, [images])
	if (loading || !images.length) return <div className="loading"></div>
	return (
		<div className='root1 body1'>
			<main>
				<div className="intro">
					<h1 className="intro__title">
						<span className="intro__title-pre">{/*On-Scroll*/}《唐多令》</span>
						<span className="intro__title-sub">{/*Perspective Grid Animations*/}辛派三刘—刘过</span>
					</h1>
					<span className="intro__info">{/*Scroll moderately to fully experience the animations*/}词人刘过以垂暮之身，逢此乱局，虽风景不殊，却触目有忧国伤时之恸</span>
				</div>

				{gridAnimationConfig.map(({ sectionClassName, h3ClassName, children }, index) => (
					<section key={index} className={'content ' + sectionClassName}>
						<div className={'grid'}>
							<div className="grid-wrap">
								{images.map((item, index) => (
									<div className="grid__item" key={index}>
										<img className="grid__item-inner" src={item.src} />
									</div>
								))}
							</div>
						</div>
						<h3 className={'content__title ' + h3ClassName}>{children}</h3>
					</section>
				))}
			</main>
		</div>
	)
}
export default GridAnimation
