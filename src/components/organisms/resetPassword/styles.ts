import { createStyles, rem } from "@mantine/core";

export default createStyles ( theme => ( {
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
