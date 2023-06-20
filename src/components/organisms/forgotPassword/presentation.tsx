import Text from "@/components/atoms/text";
import {
	Button,
	Container,
	Group,
	Paper,
	TextInput,
	Title,
	rem
} from "@mantine/core";
import { IconArrowLeft }       from "@tabler/icons-react";
import { useRouter }           from "next/router";
import useStyles               from "./styles";
import { ForgotPasswordProps } from "./types";

export default function ( props: ForgotPasswordProps ) {
	const { classes }                    = useStyles ();
	const { form, handleForgotPassword } = props;
	const router                         = useRouter ();

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

			<form onSubmit = { form.onSubmit ( values => handleForgotPassword ( values ) ) }>
				<Paper withBorder
					mt = "xl"
					p = { 30 }
					radius = "md"
					shadow = "md"
				>
					<TextInput required
						label = "Your email"
						{ ...form.getInputProps ( "email" ) }
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

						<Button
							className = { classes.control }
							type = "submit"
						>
							Reset password
						</Button>
					</Group>
				</Paper>
			</form>
		</Container>
	);
}