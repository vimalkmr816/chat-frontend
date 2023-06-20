import { route }                                                     from "@/common/constants";
import { Navbar, Stack, Tooltip, UnstyledButton, createStyles, rem } from "@mantine/core";
import {
	IconCalendarStats,
	IconDeviceDesktopAnalytics,
	IconFingerprint,
	IconGauge,
	IconHome2,
	IconLogout,
	IconSettings,
	IconSwitchHorizontal,
	IconUser
} from "@tabler/icons-react";
import Cookies       from "js-cookie";
import { useRouter } from "next/router";
import { useState }  from "react";

const useStyles = createStyles ( theme => ( {
	link : {
		width          : rem ( 50 ),
		height         : rem ( 50 ),
		borderRadius   : theme.radius.md,
		display        : "flex",
		alignItems     : "center",
		justifyContent : "center",
		color          : theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

		"&:hover" : {
			backgroundColor : theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0]
		}
	},

	active : {
		"&, &:hover" : {
			backgroundColor : theme.fn.variant ( { variant : "light", color : theme.primaryColor } ).background,
			color           : theme.fn.variant ( { variant : "light", color : theme.primaryColor } ).color
		}
	}
} ) );

interface NavbarLinkProps {
  icon: React.FC
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink ( { icon: Icon, label, active, onClick }: NavbarLinkProps ) {
	const { classes, cx } = useStyles ();

	return (
		<Tooltip label = { label }
			position = "right"
			transitionProps = { { duration : 0 } }
		>
			<UnstyledButton className = { cx ( classes.link, { [classes.active] : active } ) }
				onClick = { onClick }
			>
				<Icon
					size = "1.2rem"
					stroke = { 1.5 }
				/>
			</UnstyledButton>
		</Tooltip>
	);
}

const mockdata = [
	{ icon : IconHome2, label : "Home" },
	{ icon : IconGauge, label : "Dashboard" },
	{ icon : IconDeviceDesktopAnalytics, label : "Analytics" },
	{ icon : IconCalendarStats, label : "Releases" },
	{ icon : IconUser, label : "Account" },
	{ icon : IconFingerprint, label : "Security" },
	{ icon : IconSettings, label : "Settings" }
];

export default function () {
	const [ active, setActive ] = useState ( 2 );

	const router       = useRouter ();
	const handleLogout = () => {
		Cookies.remove ( "token" );
		router.push ( {
			pathname : route.auth.login
		} );
	};

	const links = mockdata.map ( ( link, index ) => (
		<NavbarLink
			{ ...link }
			key = { link.label }
			active = { index === active }
			onClick = { () => setActive ( index ) }
		/>
	) );

	return (
		<Navbar
			p = "md"
			width = { { base : 80 } }
		>
			<Navbar.Section grow
				mt = { 50 }
			>
				<Stack justify = "center"
					spacing = { 0 }
				>
					{links}
				</Stack>
			</Navbar.Section>

			<Navbar.Section>
				<Stack justify = "center"
					spacing = { 0 }
				>
					<NavbarLink icon = { IconSwitchHorizontal }
						label = "Change account"
					/>

					<NavbarLink
						icon = { IconLogout }
						label = "Logout"
						onClick = { () => handleLogout () }
					/>
				</Stack>
			</Navbar.Section>
		</Navbar>
	);
}