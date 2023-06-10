import { LastMessage, SidebarUser } from "@/common/types";
import { UnstyledButtonProps }      from "@mantine/core";

export interface UserButtonProps extends UnstyledButtonProps {
  chatData: SidebarUser
  icon?: React.ReactNode
}