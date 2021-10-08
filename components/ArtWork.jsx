import clsx from "clsx"
import React from "react"

function ArtWork({ reverse, description, image_src, title }) {
	return (
		<article className={clsx("artwork-container section-scroll", reverse && "flex-row-reverse")}>
			<div className="artwork-image-wrapper"></div>
			<div className="artwork-description-wrapper">
				<div className="artwork-description">
					<h2>{title}</h2>
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
