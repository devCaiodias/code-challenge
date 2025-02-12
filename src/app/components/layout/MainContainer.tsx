import SidebarDash from "../SideBarDash"


interface Props {
    children: React.ReactNode
} 



export default function MainContainer({children}: Readonly<Props>) {
    return (
        <>
            <SidebarDash />
            {children}
        </>
    )
}