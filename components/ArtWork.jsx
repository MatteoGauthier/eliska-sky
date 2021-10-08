import clsx from "clsx"
import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"
function ArtWork({ reverse, description, image_src, title }) {
	const [ref, inView] = useInView({
		triggerOnce: false,
		rootMargin: "-100px 0px",
	})

	return (
		<article ref={ref} className={clsx("artwork-container section-scroll", reverse && "flex-row-reverse")}>
			<div className="artwork-image-wrapper"></div>
			<div className="artwork-description-wrapper">
				<div className="artwork-description">
					<h2 className={clsx(inView ? "is-visible" : "")}>{title}</h2>
					<p>{description}</p>
				</div>
				<div className="artwork-separator">
					<hr />
				</div>
			</div>
		</article>
	)
}

export default ArtWork
