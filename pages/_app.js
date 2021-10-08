import { useRef } from "react"
import { useRouter } from "next/router"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import "tailwindcss/dist/base.css"
import "locomotive-scroll/dist/locomotive-scroll.min.css"
import "../styles/fonts.css"
import "../styles/globals.css"
import "../styles/Biography.css"
import "../styles/Footer.css"
import "../styles/Artworks.css"

function MyApp({ Component, pageProps }) {
	const containerRef = useRef(null)
	const router = useRouter()

	return (
		<LocomotiveScrollProvider
			options={{
				smooth: true,
			}}
			watch={[router.asPath]}
			containerRef={containerRef}
		>
			<main data-scroll-container ref={containerRef}>
				<Component {...pageProps} />
			</main>
		</LocomotiveScrollProvider>
	)
}

export default MyApp
