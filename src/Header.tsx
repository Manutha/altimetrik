import { Link } from "react-router-dom"
import logo from './assets/ucars-black.png'

const Header = () => {
    return (
        <header>
            <ul style={{ width: "100%" }}>
                <img style={{ "float": "left" }} alt="ucars-logo" src={logo} height={45} />
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/service"}>Services</Link></li>
                <li><Link to={"/gallery"}>Gallery</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </header>
    )
}

export default Header;
