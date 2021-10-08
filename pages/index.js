import ArtWork from "../components/ArtWork"
import ArtWorksContainer from "../components/ArtWorksContainer"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Biography from "../components/Biography"
import artworksYaml from "../content/artworks.yml"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import { useRef } from "react"
import { useRouter } from "next/router"

export default function Home({ artworksData }) {
	const containerRef = useRef(null)
	const { asPath } = useRouter() // With next/router

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
				// ... all available Locomotive Scroll instance options
			}}
			location={asPath}
			containerRef={containerRef}
			// watch={
			// 	[
			// 		//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
			// 	]
			// }
		>
			<div className="main" data-scroll-container ref={containerRef}>
				<Hero />
				<Biography />
				<ArtWorksContainer>
					{artworksData.map((artwork) => (
						<ArtWork key={artwork.title} {...artwork} />
					))}
				</ArtWorksContainer>
				<Footer />
			</div>
		</LocomotiveScrollProvider>
	)
}

export async function getStaticProps(context) {
	return {
		props: {
			artworksData: artworksYaml,
		}, // will be passed to the page component as props
	}
}
