import React from "react"

function Hero() {
	return (
		<div className="hero section-scroll">
			<div className="hero-title">
				<h1>Eliška Sky</h1>
			</div>
			<div className="hero-section-container">
				<div className="relative  section">
					<div className="fake-body"></div>
					<div className="blue-block"></div>
				</div>
				<div className="relative section ">
					<div className="fake-body"></div>
					<div className="orange-block"></div>
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
