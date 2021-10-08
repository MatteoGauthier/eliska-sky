import React from "react"
import Image from "next/image"

import womenOrange from "../public/images/women_orange.png"
import womenOrangeTransparent from "../public/images/women_orange_transparent.png"
import womenBlue from "../public/images/women_blue.png"
import womenBlueTransparent from "../public/images/women_blue_transparent.png"

import orangeBgSrc from "../public/images/orange_bg.png"
import blueBgSrc from "../public/images/blue_bg.png"
function Hero() {
	return (
		<div className="hero section-scroll">
			<div className="hero-title">
				<h1>Eliška Sky</h1>
			</div>
			<div className="hero-section-container">
				<div className="relative section">
					<div className="section-block z-30">
						<Image
							draggable={false}
							src={womenBlueTransparent}
							quality={100}
							layout="fill"
							objectFit="contain"
							objectPosition="center"
							alt="women in blue"
						/>
					</div>
					<div className="section-block z-0">
						<Image
							draggable={false}
							src={blueBgSrc}
							quality={60}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							alt="women in blue with background"
						/>
					</div>
				</div>
				<div className="relative section">
					<div className="section-block z-30">
						<Image
							draggable={false}
							src={womenOrangeTransparent}
							quality={100}
							layout="fill"
							objectFit="contain"
							objectPosition="center"
							alt="women in orange with background"
						/>
					</div>
					<div className="section-block z-0">
						<Image
							draggable={false}
							src={orangeBgSrc}
							quality={60}
							layout="fill"
							objectFit="cover"
							objectPosition="center"
							alt="women in orange"
						/>
					</div>
				</div>
			</div>
			<div className="hero-bottom-info">
				<span>CZECH ARTIST. DIRECTOR ARTISTIC. PHOTOGRAPHE.</span>
				<div className="year-info">
					<span>2021 WORKS </span>
					<div className="square-info"></div>
				</div>
			</div>
		</div>
	)
}

export default Hero
