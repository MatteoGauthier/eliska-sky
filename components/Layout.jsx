import Scrollbar from "smooth-scrollbar"
import { useEffect, useRef } from "react"

export default function Layout({ children }) {
	const refMain = useRef(null)

	useEffect(() => {
		if (refMain.current) {
			class AnchorPlugin extends Scrollbar.ScrollbarPlugin {
				static pluginName = "anchor"

				onHashChange = () => {
					this.handleHash(location.hash)
				}

				onClick = (event) => {
					const { target } = event

					if (target.tagName !== "A") {
						return
					}

					const hash = target.getAttribute("href")

					if (!hash || hash.charAt(0) !== "#") {
						return
					}

					this.handleHash(hash)
				}

				handleHash = (hash) => {
					console.log("hash:", hash)

					if (!hash) {
						return
					}

					if (hash === "#top") {
						scrollbar.setMomentum(0, -scrollbar.scrollTop)
					} else {
						console.log("scrollTop:", scrollbar.containerEl.scrollTop)

						scrollbar.scrollIntoView(document.querySelector(hash), {
							offsetTop: -scrollbar.containerEl.scrollTop,
						})
					}
				}

				onInit() {
					this.handleHash(location.hash)

					window.addEventListener("hashchange", this.onHashChange)

					this.scrollbar.contentEl.addEventListener("click", this.onClick)
				}

				onDestory() {
					window.removeEventListener("hashchange", this.onHashChange)

					this.scrollbar.contentEl.removeEventListener("click", this.onClick)
				}
			}

			Scrollbar.use(AnchorPlugin)

			const scrollbar = Scrollbar.init(refMain.current, {
				damping: 0.1,
				alwaysShowTracks: false,
			})
		}
	}, [refMain])

	return (
		<div ref={refMain} data-scrollbar style={{ height: "100vh", width: "100vw" }}>
			<main>{children}</main>
		</div>
	)
}
