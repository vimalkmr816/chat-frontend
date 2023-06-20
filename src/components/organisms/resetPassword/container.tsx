import { useForm }           from "@mantine/form";
import axios                 from "axios";
import React                 from "react";
import Presentation          from "./presentation";
import { ResetPasswordForm } from "./types";

const component = ( ) => {
	const form = useForm<ResetPasswordForm> ( {
		initialValues : {
			password        : "",
			confirmPassword : ""
		},
		validateInputOnBlur : true,
		validate            : {
			// password : value => ( /^\S+@\S+$/.test ( value ) ? null : "Invalid email" )
			// confirmPassword: value => value ===
		}
	} );

	const handleResetPassword = async ( values: ResetPasswordForm ) => {
		if ( values.confirmPassword !== values.password ) {
			form.setFieldError ( "confirmPassword", "Passwords do not match." );

			return;
		}

		try {
			const response = await axios ( {
				url    : `${ process.env.NEXT_PUBLIC_BASE_URL }/auth/reset-password`,
				method : "post",
				data   : {
					password        : values.password,
					confirmPassword : values.confirmPassword
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
			handleResetPassword = { handleResetPassword }
		/>
	);
};

export default component;

