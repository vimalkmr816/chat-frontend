import { route }                      from "@/common/constants";
import { useForm, UseFormReturnType } from "@mantine/form";
import axios                          from "axios";
import Cookies                        from "js-cookie";
import { useRouter }                  from "next/router";
import Presentation                   from "./presentation";
import { LoginFormType }              from "./types";

export default function ( ) {

	const form   = useForm<LoginFormType> ( {
		initialValues : {
			email    : "",
			password : ""
		},
		validateInputOnBlur : true,
		validate            : {
			email : value => ( /^\S+@\S+$/.test ( value ) ? null : "Invalid email" )
		}
	} );
	const router = useRouter ();

	const handleLogin = async ( values: LoginFormType ) => {
		try {
			const response = await axios ( {
				url    : `${ process.env.NEXT_PUBLIC_BASE_URL }/auth/login`,
				method : "post",
				data   : {
					email    : values.email,
					password : values.password
				}
			} );

			console.log ( "========  response:", response );

			Cookies.set ( "token", response.data.token );
			router.push ( {
				pathname : route.home
			} );
		} catch ( error ) {
			console.log ( "========  error:", error );
		}
	};

	return (
		<Presentation
			form = { form }
			handleLogin = { handleLogin }
		/>
	);
}