import { Outlet } from "react-router";
import NavBartt from "../navbar/NavBartt";
import Slider from "../ttslider/Slider";



const MainPagett = () => {
    return (
        <div>
            <NavBartt />
            <div>
                <Slider />
                <div>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default MainPagett;