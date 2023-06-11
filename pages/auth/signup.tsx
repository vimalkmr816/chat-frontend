import { withAuth }                  from "@/common/utils";
import Signup                        from "@/components/organisms/signup";
import { GetServerSidePropsContext } from "next";

const component = () => {

	return (
		<Signup />
	);
};

export default component;

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