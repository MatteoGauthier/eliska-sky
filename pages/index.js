import ArtWork from "../components/ArtWork"
import ArtWorksContainer from "../components/ArtWorksContainer"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Biography from "../components/Biography"

export default function Home() {
	return (
		<div className="main">
			<Hero />
			<Biography />
			<ArtWorksContainer>
				<ArtWork />
				<ArtWork reverse />
				<ArtWork />
			</ArtWorksContainer>
			<Footer />
		</div>
	)
}
