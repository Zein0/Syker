import React from "react";
import "./SlideshowBack.css";
import "./ImageSlider.css";

const delay = 300000;

function SlideshowBack({ slides }) {
	const [current, setIndex] = React.useState(0);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === slides.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [current]);

	return (
		<div>
			{slides.map((slide, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && (
							<img
								src={slide.image}
								alt="Automatic-Ad-Slider"
								className="homeImageback"
							/>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default SlideshowBack;
