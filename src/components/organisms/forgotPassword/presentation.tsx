import Text from "@/components/atoms/text";
import {
	Button,
	Center,
	Container,
	Group,
	Paper,
	TextInput,
	Title,
	createStyles,
	rem
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter }     from "next/router";

const useStyles = createStyles ( theme => ( {
	title : {
		fontSize   : rem ( 26 ),
		fontWeight : 900,
		fontFamily : `Greycliff CF, ${ theme.fontFamily }`
	},

	controls : {
		[theme.fn.smallerThan ( "xs" )] : {
			flexDirection : "column-reverse"
		}
	},

	goBack : {
		cursor : "pointer"
	},

	control : {
		cursor                          : "pointer",
		[theme.fn.smallerThan ( "xs" )] : {
			width     : "100%",
			textAlign : "center"
		}
	}
} ) );

export default function () {
	const { classes } = useStyles ();
	const router      = useRouter ();

	return (
		<Container my = { 30 }
			size = { 460 }
		>
			<Title align = "center"
				className = { classes.title }
			>
				Forgot your password?
			</Title>

			<Text c = "dimmed"
				fz = "sm"
				ta = "center"
				title = { "Enter your email to get a reset link" }
			/>

			<Paper withBorder
				mt = "xl"
				p = { 30 }
				radius = "md"
				shadow = "md"
			>
				<TextInput required
					label = "Your email"
					placeholder = "me@mantine.dev"
				/>

				<Group className = { classes.controls }
					mt = "lg"
					position = "apart"
				>
					<Group
						className = { classes.control }
						spacing = { 8 }
					>
						<IconArrowLeft
							size = { rem ( 12 ) }
							stroke = { 1.5 }
						/>

						<Text
							className = { classes.goBack }
							color = "gray"
							onClick = { () => router.push ( {
								pathname : "signup"
							} ) }
							size = { "sm" }
							title = { "Back to the login page" }
						/>
					</Group>

					<Button className = { classes.control }>Reset password</Button>
				</Group>
			</Paper>
		</Container>
	);
}