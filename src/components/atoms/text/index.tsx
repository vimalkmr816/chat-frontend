import { Text as MText, TextProps } from "@mantine/core";
import useStyles                    from "./styles";

interface CustomTextProps extends TextProps{
title: string
isLink?: boolean
onClick?: () => void
}
function Text ( props: CustomTextProps ) {
	const {
		title,
		isLink,
		...others
	} = props;

	const { classes } = useStyles ( { isLink } );

	return (
		<MText
			className = { classes.text }
			{ ...others }
		>
			{title}
		</MText>
	);
}
export default Text;