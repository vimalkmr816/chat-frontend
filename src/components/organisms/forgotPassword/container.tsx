import { useForm }            from "@mantine/form";
import axios                  from "axios";
import React                  from "react";
import Presentation           from "./presentation";
import { ForgotPasswordForm } from "./types";

const component = ( ) => {
	const form = useForm<ForgotPasswordForm> ( {
		initialValues : {
			email : ""
		},
		validateInputOnBlur : true,
		validate            : {
			email : value => ( /^\S+@\S+$/.test ( value ) ? null : "Invalid email" )
		}
	} );

	const handleForgotPassword = async ( values: ForgotPasswordForm ) => {
		console.log ( "========  values:", values );

		try {
			const response = await axios ( {
				url    : `${ process.env.NEXT_PUBLIC_BASE_URL }/auth/forgot-password`,
				method : "post",
				data   : {
					email : values.email
				}
			} );

			console.log ( "========  response:", response );

		} catch ( error ) {
			console.log ( "========  error:", error );
		}
	};

	return (
		<Presentation
			form = { form }
			handleForgotPassword = { handleForgotPassword }
		/>
	);
};

export default component;

