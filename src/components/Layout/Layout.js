import {NavLink, Outlet} from 'react-router-dom';
import "./Layout.css"
function Layout() {
    return(
        <>
            <Outlet/>

            <footer className="Footer">
                <NavLink to="/photos" className="Footer-Link">Посмотреть фото</NavLink>
                <NavLink to="/" className="Footer-Link">Прочитать историю</NavLink>
                <NavLink to="/" className="Footer-Link">Узнать про фичу</NavLink>
                <NavLink to="/" className="Footer-Link">Скачать исходный код</NavLink>
            </footer>
        </>
    )
}

export default Layout