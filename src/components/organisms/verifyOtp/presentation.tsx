import { route } from "@/common/constants";
import Text      from "@/components/atoms/text";
import {
	Button,
	Container,
	Flex,
	Group,
	Paper,
	PinInput,
	Stack,
	Title
} from "@mantine/core";
import { MantineTheme }   from "@mantine/core/lib";
import { useRouter }      from "next/router";
import { VerifyOtpProps } from "./types";

export default function ( props: VerifyOtpProps ) {
	const {
		handleVerifyPin,
		pin,
		setPin
	} = props;
	const router = useRouter ();

	return (
		<Container my = { 40 }
			size = { 420 }
		>
			<Title
				align = "center"
				sx = { ( theme: MantineTheme ) => ( { fontFamily : `Greycliff CF, ${ theme.fontFamily }`, fontWeight : 900 } ) }
			>
				Please Verify OTP
			</Title>

			<Flex
				align = "center"
				direction = { "column" }
				gap = { 4 }
				justify = { "center" }
				mx = { "auto" }
				my = { 8 }
				w = { "fit-content" }
			>
				<Text
					span
					align = "center"
					color = "dimmed"
					size = "sm"
					title = { "Sent email to vimalkmr816@gmail.com" }
				/>

				<Group
					spacing = { 8 }
				>
					<Text
						span
						align = "center"
						color = "dimmed"
						size = "sm"
						title = { "Not You?" }
					/>

					<Text
						isLink
						span
						color = "blue"
						fw = { "normal" }
						onClick = { () => router.push ( {
							pathname : route.auth.forgotPassword
						} ) }
						p = { 0 }
						size = "sm"
						title = { "Change Email" }
						variant = "default"
					/>
				</Group>
			</Flex>

			<Paper withBorder
				mt = { 30 }
				p = { 30 }
				radius = "md"
				shadow = "md"
			>
				<Stack align = "center"
					spacing = { 16 }
				>
					<PinInput
						length = { 6 }
						onChange = { v => setPin ( v ) }
						placeholder = ""
						value = { pin }
					/>

					<Button
						fullWidth
						color = "blue"
						onClick = { () => handleVerifyPin ( pin ) }
					>
						Verify
					</Button>
				</Stack>
			</Paper>
		</Container>
	);
}