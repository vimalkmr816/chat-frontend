import Text from "@/components/atoms/text";
import {
	Button,
	Container,
	Group,
	Paper,
	Stack,
	TextInput,
	Title,
	rem
} from "@mantine/core";
import { IconArrowLeft }      from "@tabler/icons-react";
import { useRouter }          from "next/router";
import useStyles              from "./styles";
import { ResetPasswordProps } from "./types";

export default function ( props: ResetPasswordProps ) {
	const { classes }                   = useStyles ();
	const { form, handleResetPassword } = props;
	const router                        = useRouter ();

	return (
		<Container my = { 30 }
			size = { 460 }
		>
			<Title align = "center"
				className = { classes.title }
			>
				Reset Password
			</Title>

			<Text
				c = "dimmed"
				fz = "sm"
				ta = "center"
				title = { "Enter your new password" }
			/>

			<form onSubmit = { form.onSubmit ( values => handleResetPassword ( values ) ) }>
				<Paper withBorder
					mt = "xl"
					p = { 30 }
					radius = "md"
					shadow = "md"
				>
					<Stack>
						<TextInput
							required
							label = "Enter new password"
							{ ...form.getInputProps ( "password" ) }
							placeholder = "me@mantine.dev"
						/>

						<TextInput
							required
							label = "Confirm password"
							{ ...form.getInputProps ( "confirmPassword" ) }
							placeholder = "me@mantine.dev"
						/>
					</Stack>

					<Group
						className = { classes.controls }
						mt = "lg"
						position = "right"
					>
						<Button
							className = { classes.control }
							type = "submit"
						>
							Change Password
						</Button>
					</Group>
				</Paper>
			</form>
		</Container>
	);
}