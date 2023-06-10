import { shortenMsgNumber } from "@/common/formatter";
import Text                 from "@/components/atoms/text";
import {
	Avatar,
	Flex,
	Group,
	Indicator,
	UnstyledButton,
	createStyles,
	rem
} from "@mantine/core";
import { UserButtonProps } from "./types";

const useStyles = createStyles ( theme => ( {
	user : {
		display : "block",
		width   : "100%",
		padding : theme.spacing.md,
		color   : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

		"&:hover" : {
			backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
		}
	},

	name : {
		textOverflow : "ellipsis",
		wordBreak    : "break-word"
	},

	numberIndicator : {
		borderRadius : "50%",
		display      : "flex",
		alignItems   : "center",
		padding      : rem ( 0.2 ),
		aspectRatio  : "1/1",
		fontSize     : "0.8rem"
	}
} ) );

export default function UserButton ( { chatData, icon, ...others }: UserButtonProps ) {
	const { classes } = useStyles ();

	return (
		<UnstyledButton className = { classes.user }
			{ ...others }
		>
			<Group align = "stretch">
				<Indicator
					color = "green"
					offset = { 8 }
					position = "bottom-end"
					size = { 10 }
				>
					<Avatar
						radius = "xl"
						size = { "lg" }
						src = { chatData.image }
					/>
				</Indicator>

				<Flex direction = { "column" }
					maw = "70%"
				>
					<Text
						truncate
						className = { classes.name }
						size = "sm"
						title = { chatData.name }
						weight = { 500 }
					/>

					<Text
						color = "dimmed"
						lineClamp = { 2 }
						size = "xs"
						title = { chatData.lastMessage.val }
					/>
				</Flex>

				<Flex
					align = { "end" }
					direction = "column"
					gap = { 8 }
				>
					<Text
						color = "dimmed"
						mt = { 2 }
						size = "xs"
						title = { chatData.lastMessage.createdAt }
					/>

					{ chatData.newMessages > 0 && (
						<Text
							bg = { "blue" }
							className = { classes.numberIndicator }
							color = "white"
							px = { 6 }
							size = { "xs" }
							title = { shortenMsgNumber ( chatData.newMessages ) }
							variant = "filled"
							w = { "fit-content" }
						/>
					)}

				</Flex>
			</Group>
		</UnstyledButton>
	);
}