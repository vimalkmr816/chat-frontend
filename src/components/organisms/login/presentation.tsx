import Text from "@/components/atoms/text";
import {
	Anchor,
	Button,
	Center,
	Checkbox,
	Container,
	Group,
	Paper,
	PasswordInput,
	TextInput,
	Title
} from "@mantine/core";
import { MantineTheme } from "@mantine/core/lib";
import { useRouter }    from "next/router";
import { LoginProps }   from "./types";

export default function ( props: LoginProps ) {

	const {
		form,
		handleLogin
	} = props;
	const router = useRouter ();

	return (
		<Container
			my = { 40 }
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
					title = { "Do not have an account yet?" }
				/>

				<Text
					isLink
					span
					color = "blue"
					fw = { "normal" }
					onClick = { () => router.push ( {
						pathname : "signup"
					} ) }
					p = { 0 }
					size = "sm"
					title = { "Create account" }
					variant = "default"
				/>
			</Group>

			<form onSubmit = { form.onSubmit ( values => handleLogin ( values ) ) }>

				<Paper withBorder
					mt = { 30 }
					p = { 30 }
					radius = "md"
					shadow = "md"
				>
					<TextInput required
						label = "Email"
						{ ...form.getInputProps ( "email" ) }
						placeholder = "you@mantine.dev"
					/>

					<PasswordInput required
						label = "Password"
						{ ...form.getInputProps ( "password" ) }
						mt = "md"
						placeholder = "Your password"
					/>

					<Group mt = "lg"
						position = "apart"
					>
						<Checkbox label = "Remember me" />

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
						mt = "xl"
						type = "submit"
					>
						Sign in
					</Button>
				</Paper>
			</form>
		</Container>
	);
}