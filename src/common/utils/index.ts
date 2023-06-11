import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getSession = ( ctx: GetServerSidePropsContext ) => {
	const cookies = ctx.req.headers.cookie;

	// console.log ( "========  cookies:", cookies && JSON.parse ( cookies ) );

	if ( cookies ) {
		try {
			const parsedCookies: Record<string, string> = cookies.split ( ";" ).reduce ( ( acc, cookie ) => {
				const [ key, value ] = cookie.split ( "=" );

				acc[key.trim ()] = decodeURIComponent ( value );

				return acc;
			}, {} as Record<string, string> );

			return {
				token : parsedCookies.token
			};
		} catch ( error ) {
			console.log ( "Error parsing cookies:", error );
		}
	}
};

export const withAuth = async ( context: GetServerSidePropsContext, fn: GetServerSideProps ) => {

	const session = getSession ( context );

	console.log ( "========  :", session?.token && context.resolvedUrl.includes ( "/auth/" ) );
	if ( session?.token && context.resolvedUrl.includes ( "/auth/" ) ) {
		return {
			redirect : {
				destination : "/",
				permanent   : false
			}
		};
	}
	if ( !session?.token && !context.resolvedUrl.includes ( "/auth/" ) ) {
		return {
			redirect : {
				destination : "/auth/login",
				permanent   : false
			}
		};
	}

	return fn ( context );
};