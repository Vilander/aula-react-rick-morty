import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Titulo from '../components/Titulo';
import Footer from '../components/Footer';


function Layout() {
    return (
        <>
            <div className="container">
                <Navbar />
                <Titulo />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout;