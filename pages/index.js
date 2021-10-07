import ArtWork from "../components/ArtWork"
import ArtWorksContainer from "../components/ArtWorksContainer"
import Hero from "../components/Hero"

export default function Home() {
	return (
		<div className="main">
			<Hero />
			<ArtWorksContainer>
				<ArtWork />
				<ArtWork reverse />
				<ArtWork />
			</ArtWorksContainer>
		</div>
	)
}
