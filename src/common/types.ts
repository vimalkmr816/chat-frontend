export type SidebarUser = {
    image: string
    name: string
    email: string
    lastMessage: LastMessage
    isOnline: boolean
    newMessages: number
}
export type LastMessage ={
	val: string
	createdAt: string
}
export type ChatList = {
    pinned: SidebarUser[]
    regular: SidebarUser[]
}