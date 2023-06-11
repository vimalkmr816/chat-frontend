import { route }               from "@/common/constants";
import { useForm }             from "@mantine/form";
import axios                   from "axios";
import { useRouter }           from "next/router";
import React                   from "react";
import { LanguageServiceMode } from "typescript";
import Presentation            from "./presentation";
import { SignupFormType }      from "./types";

const component = () => {

	const form   = useForm<SignupFormType> ( {
		initialValues : {
			email     : "",
			password  : "",
			lastName  : "",
			firstName : ""
		},
		validateInputOnBlur : true,
		validate            : {
			email : value => ( /^\S+@\S+$/.test ( value ) ? null : "Invalid email" )
		}
	} );
	const router = useRouter ();

	const handleSignup = async ( values: SignupFormType ) => {
		try {
			const response = await axios ( {
				url    : `${ process.env.NEXT_PUBLIC_BASE_URL }/auth/register`,
				method : "post",
				data   : {
					email     : values.email,
					password  : values.password,
					lastName  : values.lastName,
					firstName : values.firstName
				}
			} );

			router.push ( {
				pathname : route.auth.verifyOTP,
				query    : {
					email : values.email
				}
			} );
		} catch ( error ) {
			console.log ( "========  error:", error );
		}
	};

	return (
		<Presentation
			form = { form }
			handleSignup = { handleSignup }
		/>
	);
};

export default component;