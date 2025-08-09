import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <>
            <div className="container">
                <Titulo />
                <Menu />
                <Outlet />
            </div>
            <Rodape />
        </>
    )
}

export default Layout;