import { getSession, withAuth }      from "@/common/utils";
import Login                         from "@/components/organisms/login";
import { GetServerSidePropsContext } from "next";

export default function Home () {
	return (
		<Login />
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
	}
	);