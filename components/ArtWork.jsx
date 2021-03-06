import clsx from "clsx"
import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import ColorCircle from "./ColorCircle"

function ArtWork({ reverse, description, image_src, title, colors }) {
	const [ref, inView] = useInView({
		triggerOnce: false,
		rootMargin: "-100px 0px",
	})

	return (
		<article ref={ref} className={clsx("artwork-container section-scroll", reverse && "flex-row-reverse")}>
			<div className="artwork-image-wrapper relative ">
				<Image
					placeholder="blur"
					src={require(`../public/images/${image_src}`)}
					alt={title}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="artwork-description-wrapper">
				<div className="artwork-description">
					<h2 className={clsx(inView ? "is-visible" : "")}>{title}</h2>
					<p>{description}</p>
				</div>
				<div className="artwork-separator">
					<div className="colors-wrapper">
						{colors.map((color, index) => (
							<ColorCircle key={color + "-" + index} color={color} />
						))}
					</div>
					<hr />
				</div>
			</div>
		</article>
	)
}

export default ArtWork
