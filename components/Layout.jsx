import Scrollbar from "smooth-scrollbar"
import { useEffect, useRef } from "react"

export default function Layout({ children }) {
	const refMain = useRef(null)

	useEffect(() => {
		if (refMain.current) {
			Scrollbar.init(refMain.current, {
				damping: 0.1,
				alwaysShowTracks: false,
			})
			console.log("init smoothscroll")
		}
	}, [refMain])

	return (
		<div ref={refMain} data-scrollbar style={{ height: "100vh", width: "100vw" }}>
			<main>{children}</main>
		</div>
	)
}
