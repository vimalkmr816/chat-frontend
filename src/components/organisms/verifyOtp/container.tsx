import { route }                      from "@/common/constants";
import axios                          from "axios";
import Cookies                        from "js-cookie";
import { cookies }                    from "next/headers";
import { useRouter }                  from "next/router";
import React, { useEffect, useState } from "react";
import Presentation                   from "./presentation";

const component = ( ) => {

	const router          = useRouter ();
	const [ pin, setPin ] = useState ( "" );
	const email           = router.query.email;

	useEffect ( () => {

		if ( pin.length === 6 ) {
			// console.log ( pin );
		}
	}, [ pin ] );

	const handleVerifyPin = async ( pin: string ) => {
		console.log ( "========  pin:", pin, email );
		try {
			const response = await axios ( {
				url    : `${ process.env.NEXT_PUBLIC_BASE_URL }/auth/verify-otp`,
				method : "post",
				data   : {
					otp : pin,
					email
				}
			} );

			Cookies.set ( "token", response.data.token, { expires : 30 } );
			router.push ( {
				pathname : route.home
			} );
		} catch ( error ) {
			console.log ( error );
		}
	};

	return (
		<Presentation
			handleVerifyPin = { handleVerifyPin }
			pin = { pin }
			setPin = { setPin }
		/>
	);
};

export default component;