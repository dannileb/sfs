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
                <a href="https://github.com/dannileb/yandex-mentor-spa"
                   target="_blank"
                   className="Footer-Link"
                   rel="noreferrer">Скачать исходный код</a>
            </footer>
        </>
    )
}

export default Layout