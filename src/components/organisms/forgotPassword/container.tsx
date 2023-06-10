import React        from "react";
import Presentation from "./presentation";

const component = props => {
	return (
		<Presentation
			{ ...props }
		/>
	);
};

export default component;

