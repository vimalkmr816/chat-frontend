
import { withAuth }                  from "@/common/utils";
import VerifyOtp                     from "@/components/organisms/verifyOtp";
import { GetServerSidePropsContext } from "next";

export default function Home () {
	return (
		<VerifyOtp />
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