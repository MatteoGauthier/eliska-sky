import Image from 'next/image'
import React from "react"

function Biography() {
	return (
		<div className="biography__container">
			<div className="biography__header">
				<div className="biography__header-image">
					<Image src="/../public/images/BiographyImage.jpg" alt="Picture of the artist" width={283} height={283}/>
				</div>
				<div className="biography__header-text">
					<h2>Czech artist ~ art director ~ photographer</h2>
					<h1>Eliška Sky</h1>
				</div>
			</div>
			<div className="biography__text">
				<p>{"Le travail de l\'artiste Eliška Sky, à la fois photographe et directrice artistique, est coloré, ludique et visuellement saisissant. Audacieuses et souvent surréalistes, les images et les vidéos de l'ambassadrice Canon mettent en scène ses modèles dans des modèles excentriques et des poses dramatiques. Dans le monde qu'elle crée, il n'est pas rare de voir un homme en costume cintré avec un sac à main sur la tête, ou une femme nue couverte de peinture corporelle multicolore. Mais derrière son"}</p>
				<p>{"côté ludique se cache une artiste ambitieuse et techniquement accomplie, qui utilise souvent son travail pour aborder des sujets tels que la diversité et le changement climatique. Née et élevée dans la ville de Brno, en République tchèque, Eliška a découvert sa passion pour la photographie en participant à un concours au lycée. Une passion tellement forte que ses œuvres ont été exposées lors de salons internationaux à Prague, New York, Paris, Londres, Hong Kong et Helsinki. Elle crée régulièrement des"}</p>
				<p>{"concepts, des éditoriaux et des courts métrages pour des publications et des magazines de mode. Un travail qui séduit tellement qu’elle a été la grande gagnante de Diversity Now ! par le magazine i-D en 2015, ainsi que lauréate de Portrait of Britain en 2018 et a fait partie de la sélection officielle du festival du film Aesthetica 2019. L’audacieuse et talentueuse artiste a même été sélectionné parmi les 4 femmes photographes tchèques qui dominent l'industrie de la mode pour l'année 2019."}</p>
			</div>
			<div className="biography__works">
				<Image src="/../public/images/ArrowDown.svg" alt="ArrowDown" width={16} height={21}/>
				<span></span>
				<p>Discover Eliška works</p>
				<span></span>
				<Image src="/../public/images/ArrowDown.svg" alt="ArrowDown" width={16} height={21}/>
			</div>
		</div>
	)
}

export default Biography