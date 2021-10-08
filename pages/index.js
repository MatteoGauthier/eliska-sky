import ArtWork from "../components/ArtWork"
import ArtWorksContainer from "../components/ArtWorksContainer"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Biography from "../components/Biography"
import artworksYaml from "../content/artworks.yml"

export default function Home({ artworksData }) {
	return (
		<div className="main">
			<Hero />
			<Biography />
			<ArtWorksContainer>
				{artworksData.map((artwork) => (
					<ArtWork key={artwork.title} {...artwork} />
				))}
			</ArtWorksContainer>
			<Footer />
		</div>
	)
}

export async function getStaticProps(context) {
	return {
		props: {
			artworksData: artworksYaml,
		}, // will be passed to the page component as props
	}
}
