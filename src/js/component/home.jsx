import React, {useState} from "react";


//create your first component
const Home = () => {
	
	const [selectedColor, setSelectedColor] = useState("red");
		
	return (
				
		<div className="traffic-Light justify-content-Center">
			
			<div onClick={() => setSelectedColor("red")} className={"Light Red"+((selectedColor === "red") ? " glow" :"")}></div>

			
			<div onClick={() => setSelectedColor("orange")} className={"Light Orange"+((selectedColor === "orange") ? " glow" :"")}></div>
			
			
			<div onClick={() => setSelectedColor("green")} className={"Light Green"+((selectedColor === "green") ? " glow" :"")}></div>
			
		</div>
	);
};

export default Home;
