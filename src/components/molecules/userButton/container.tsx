import React               from "react";
import Presentation        from "./presentation";
import { UserButtonProps } from "./types";

const component = ( props: UserButtonProps ) => {
	return (
		<Presentation
			{ ...props }
		/>
	);
};

export default component;

