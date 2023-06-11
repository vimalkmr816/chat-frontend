import { createStyles } from "@mantine/core";

export default createStyles ( theme => {
	return {
		chatListRoot : {
		},
		chatListTitle : {
			position   : "sticky",
			top        : "0",
			paddingTop : "1rem",
			zIndex     : 999
		},
		accordionControl : {
			padding      : 0,
			borderRadius : "0.2rem"
		},
		accordionItem : {
			borderRadius : "0.2rem"
		},
		accordionLabel : {
			display    : "flex",
			padding    : "0.3rem 0.2rem",
			gap        : "0.4rem",
			alignItems : "center"
		},
		accordionContent : {
			borderRadius : "0.2rem",
			padding      : "0"
		}
	};
} );