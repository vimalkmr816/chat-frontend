import Text                 from "@/components/atoms/text";
import { PasswordStrength } from "@/components/molecules/passwordStrengthInput/presentation";
import {
	Button,
	Checkbox,
	Container,
	Group,
	Paper,
	PasswordInput,
	Stack,
	TextInput,
	Title
} from "@mantine/core";
import { MantineTheme } from "@mantine/core/lib";
import { useRouter }    from "next/router";
import { SignUpProps }  from "./types";

export default function ( props: SignUpProps ) {
	const router = useRouter ();
	const {
		form,
		handleSignup
	} = props;

	return (
		<Container my = { 40 }
			size = { 420 }
		>
			<Title
				align = "center"
				sx = { ( theme: MantineTheme ) => ( { fontFamily : `Greycliff CF, ${ theme.fontFamily }`, fontWeight : 900 } ) }
			>
				Welcome back!
			</Title>

			<Group
				mx = { "auto" }
				my = { 8 }
				spacing = { 4 }
				w = { "fit-content" }
			>
				<Text
					span
					align = "center"
					color = "dimmed"
					size = "sm"
					title = { "Already have an account?" }
				/>

				<Text
					isLink
					span
					color = "blue"
					fw = { "normal" }
					onClick = { () => router.push ( {
						pathname : "login"
					} ) }
					p = { 0 }
					size = "sm"
					title = { "Login" }
					variant = "default"
				/>
			</Group>

			<form onSubmit = { form.onSubmit ( values => handleSignup ( values ) ) }>
				<Paper withBorder
					mt = { 30 }
					p = { 30 }
					radius = "md"
					shadow = "md"
				>
					<Stack spacing = { 16 }>
						<Group
							grow
							spacing = { 16 }
						>
							<TextInput
								required
								label = "First Name"
								placeholder = "firstname"
								{ ...form.getInputProps ( "firstName" ) }
							/>

							<TextInput
								required
								label = "Last Name"
								placeholder = "lastname"
								{ ...form.getInputProps ( "lastName" ) }
							/>
						</Group>

						<TextInput
							required
							label = "Email"
							placeholder = "youremail@gmail.com"
							{ ...form.getInputProps ( "email" ) }
							type = "email"
						/>

						<PasswordInput
							required
							{ ...form.getInputProps ( "password" ) }
							label = "Password"
							placeholder = "Your password"
						/>

						<Group position = "right">
							{/* <Checkbox label = "Remember me" /> */}

							<Text
								isLink
								span
								color = "blue"
								fw = { "normal" }
								onClick = { () => router.push ( {
									pathname : "forgot-password"
								} ) }
								p = { 0 }
								size = "sm"
								title = { "Forgot password?" }
								variant = "default"
							/>

						</Group>

						<Button
							fullWidth
							color = "blue"
							type = "submit"
						>
							Sign in
						</Button>
					</Stack>
				</Paper>
			</form>
		</Container>
	);
}