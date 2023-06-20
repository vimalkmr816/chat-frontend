import { ColorScheme, ColorSchemeProvider, Flex, MantineProvider, useMantineColorScheme } from "@mantine/core";
import { SpotlightAction, SpotlightProvider }                                             from "@mantine/spotlight";
import { IconDashboard, IconFileText, IconHome, IconSearch }                              from "@tabler/icons-react";
import type { AppProps }                                                                  from "next/app";
import { useState }                                                                       from "react";

const actions: SpotlightAction[] = [
	{
		title       : "Home",
		description : "Get to home page",
		onTrigger   : () => console.log ( "Home" ),
		icon        : <IconHome size = "1.2rem" />
	},
	{
		title       : "Dashboard",
		description : "Get full information about current system status",
		onTrigger   : () => console.log ( "Dashboard" ),
		icon        : <IconDashboard size = "1.2rem" />
	},
	{
		title       : "Documentation",
		description : "Visit documentation to lean more about all features",
		onTrigger   : () => console.log ( "Documentation" ),
		icon        : <IconFileText size = "1.2rem" />
	}
];

export default function App ( { Component, pageProps }: AppProps ) {

	const [ colorScheme, setColorScheme ] = useState<ColorScheme> ( "light" );

	const toggleColorScheme = ( value?: ColorScheme ) => setColorScheme ( value || ( colorScheme === "dark" ? "light" : "dark" ) );

	return (
		<ColorSchemeProvider
			colorScheme = { "dark" }
			toggleColorScheme = { toggleColorScheme }
		>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme = { {
					colorScheme,
					primaryColor : "blue",
					primaryShade : 8
				} }
			>
				<SpotlightProvider
					actions = { actions }
					nothingFoundMessage = "Nothing found..."
					searchIcon = { <IconSearch size = "1.2rem" /> }
					searchPlaceholder = "Search..."
					shortcut = "mod + shift + o"
				>

					<Component { ...pageProps } />
				</SpotlightProvider>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
