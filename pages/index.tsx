import { getSession, withAuth }      from "@/common/utils";
import { GetServerSidePropsContext } from "next";
import { Inter }                     from "next/font/google";

const inter = Inter ( { subsets : [ "latin" ] } );

export default function Home () {

	return (
		<div>vimal</div>
	);
}

export const getServerSideProps = async ( context: GetServerSidePropsContext ) =>
	withAuth ( context, async ( ctx: GetServerSidePropsContext ) => {
		ctx.res.setHeader (
			"Cache-Control",
			"public, s-maxage=10, stale-while-revalidate=60"
		);

		return {
			props : {}
		};
	} );
