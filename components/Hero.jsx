import React from "react"
import Image from "next/image"

import womenOrange from "../public/images/women_orange.png"
import womenOrangeTransparent from "../public/images/women_orange_transparent.png"
import womenBlue from "../public/images/women_blue.png"
import womenBlueTransparent from "../public/images/women_blue_transparent.png"

function Hero() {
	return (
		<div className="hero section-scroll">
			<div className="hero-title">
				<h1>Eliška Sky</h1>
			</div>
			<div className="hero-section-container">
				<div className="relative section">
					<div className="section-block z-30">
						<Image src={womenBlueTransparent} quality={100} layout="fill" alt="women in blue" />
					</div>
					<div className="section-block z-0">
						<Image src={womenBlue} quality={100} layout="fill" alt="women in blue with background" />
					</div>
				</div>
				<div className="relative section">
					<div className="section-block z-30">
						<Image src={womenOrangeTransparent} quality={100} layout="fill" alt="women in orange with background" />
					</div>
					<div className="section-block z-0">
						<Image src={womenOrange} quality={100} layout="fill" alt="women in orange" />
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
