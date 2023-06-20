import { data }                      from "@/common/constants";
import { withAuth }                  from "@/common/utils";
import Sidebar                       from "@/components/organisms/sidebar";
import UserList                      from "@/components/organisms/userList";
import { Flex }                      from "@mantine/core";
import { GetServerSidePropsContext } from "next";
import { Inter }                     from "next/font/google";

const inter = Inter ( { subsets : [ "latin" ] } );

export default function Home () {

	return (
		<Flex>
			<Sidebar />

			<UserList
				data = { data }
			/>

		</Flex>
	);
}

export const getServerSideProps = async ( context: GetServerSidePropsContext ) =>
	withAuth ( context, async ( ctx: GetServerSidePropsContext ) => {
		ctx.res.setHeader (
			"Cache-Control",
			"public, s-maxage=10, stale-while-revalidate=60"
		);

		return {
			props : {
			}
		};
	} );
