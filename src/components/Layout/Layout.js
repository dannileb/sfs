import {NavLink, Outlet } from 'react-router-dom';
import {isMobile} from "react-device-detect";
import "./Layout.css"
function Layout() {

    return(
        <div className="Container">
            {
                isMobile ?
                    <div className="LandscapeWarning">
                        <span className="LandscapeWarning-Text">Пожалуйста!</span>
                        <span className="LandscapeWarning-Text"> Переведите устройство режим портретной ориентации!</span>
                    </div>
                    :
                    <></>

            }

            <Outlet/>
            <footer className="Footer">
                <NavLink to="/photos" className="Footer-Link">Посмотреть фото</NavLink>
                <NavLink to="/story" className="Footer-Link">Прочитать историю</NavLink>
                <NavLink to="/" className="Footer-Link">Узнать про фичу</NavLink>
                <a href="https://github.com/dannileb/yandex-mentor-spa"
                   target="_blank"
                   className="Footer-Link"
                   rel="noreferrer">Скачать исходный код</a>
            </footer>
        </div>
    )
}

export default Layout