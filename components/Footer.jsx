import React from "react"
import Link from 'next/link'

function Footer() {
	return (
		<div className="footer__container">
            <p>MMI production</p>
			<div className="footer__txt">
                <div className="footer__greatings">
                    <h4>Thank you</h4>
                </div>
                <div className="footer__link">
                    <Link href="/"><a data-scroll-position="top">Accueil</a></Link>
                    <a href="#biography" data-scroll-target="#biography">Qui est Eliška Sky ?</a>
                    <a href="#work" data-scroll-target="#work">Découvrir ses oeuvres</a>
                </div>
            </div>
		</div>
	)
}

export default Footer
