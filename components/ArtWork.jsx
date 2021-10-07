import clsx from "clsx"
import React from "react"

function ArtWork({reverse}) {
	return (
		<article className={clsx("artwork-container section-scroll", reverse && "flex-row-reverse")}>
			<div className="artwork-image-wrapper"></div>
			<div className="artwork-description-wrapper">
				<h2>2 metres distance 2020, for 1883 magazine</h2>
				<p>
					Cette femme aux cheveux mouvementé a été photographié pour le 1883 magazine. Un magazine de lifestyle et mode.
					La photographe Eliska a créé un univers particulier et orginale enveloppé de bleu au tons clair, une couleur
					douce et appaisante, faisant rappel au ciel, présent sur la photo. La photographie donne un effet de
					mouvement, de par sa position et par les éléments présent comme le morceau de plastique près de son oeil droit
					,ainsi que ses cheveux probablement volant dans le vent.{" "}
				</p>
			</div>
		</article>
	)
}

export default ArtWork
