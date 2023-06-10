import { createStyles } from "@mantine/core";

export default createStyles ( ( theme, props: {isLink?: boolean} ) => {
	return {
		text : {
			":hover" : {
				textDecoration      : props.isLink ? "underline" : "none",
				textDecorationColor : "inherit",
				cursor              : props.isLink ? "pointer" : "auto"
			}
		}
	};
} );