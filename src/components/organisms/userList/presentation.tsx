import Text                                                                   from "@/components/atoms/text";
import { ActionToggle }                                                       from "@/components/atoms/toggleTheme";
import UserButton                                                             from "@/components/molecules/userButton";
import { Accordion, Flex, Group, Paper, ScrollArea, Stack, TextInput, Title } from "@mantine/core";
import { spotlight }                                                          from "@mantine/spotlight";
import { IconArchive, IconArchiveOff, IconInnerShadowTopLeft }                from "@tabler/icons-react";
import { Fragment }                                                           from "react";
import useStyles                                                              from "./styles";
import { UserListProps }                                                      from "./types";

const UserList = ( props: UserListProps ) => {
	const {
		data
	} = props;

	const { classes } = useStyles ();

	return (
		<ScrollArea h = { "100vh" }
			type = "never"
		>
			<Stack
				className = { classes.chatListRoot }
				mah = { "100vh" }
				px = { 16 }
				spacing = { 4 }
			>
				<Paper
					className = { classes.chatListTitle }
					w = { "100%" }
				>
					<Flex align = { "center" }
						justify = { "space-between" }
					>
						<Title>Chats</Title>

						<ActionToggle />
					</Flex>

					<TextInput
						mt = { 16 }
						onClick = { () => {
							spotlight.open ();
						} }
					/>
				</Paper>

				<Accordion
					classNames = { {
						content : classes.accordionContent,
						label   : classes.accordionLabel,
						item    : classes.accordionItem,
						control : classes.accordionControl
					} }
					defaultValue = "archived"
					my = { 16 }
				>
					<Accordion.Item
						value = "archived"
					>
						<Accordion.Control>
							<IconArchive color = "gray"
								size = "1rem"
							/>

							<Text
								span
								size = { "sm" }
								title = { "Archived" }
								weight = { 500 }
							/>

						</Accordion.Control>

						{
							data.pinned.map ( user => {
								return (
									<Fragment
										key   = { user.email }
									>

										<Accordion.Panel>
											<UserButton
												chatData = { user }
											/>

										</Accordion.Panel>
									</Fragment>
								);
							} )
						}
					</Accordion.Item>

				</Accordion>

				<Stack>
					<Text
						color = "gray"
						title = "Pinned"
						weight = { 500 }
					/>

					{
						data.pinned.map ( user => {
							return (
								<UserButton
									key   = { user.email }
									chatData = { user }
								/>
							);
						} )
					}
				</Stack>

				<Stack>
					<Text
						color = "gray"
						title = "All Chats"
						weight = { 500 }
					/>

					{
						data.regular.map ( user => {
							return (
								<UserButton
									key   = { user.email }
									chatData = { user }
								/>
							);
						} )
					}
				</Stack>
			</Stack>
		</ScrollArea>
	);
};

export default UserList;