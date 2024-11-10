import NavItem from "./NavItem";
import "./navbar.css";

const Navbar = ({onValueChange}:{onValueChange:(value: string) => void}) => {

    return (
        <ul className="container text-white border-b-2 border-black flex gap-2 list-none">
            <li onClick={() => onValueChange("Home")} className='cursor-pointer item'>
                <NavItem item="Raphael Tomaz" />
            </li>
            <li onClick={() => onValueChange("About")} className='cursor-pointer'>
                <NavItem item="About" />
            </li>
            <li onClick={() => onValueChange("Projects")} className='cursor-pointer'>
                <NavItem item="Projects" />
            </li>
            <li onClick={() => onValueChange("Resume")} className='cursor-pointer'>
                <NavItem item="Resume" />
            </li>
            <li onClick={() => onValueChange("Hire me")} className='cursor-pointer'>
                <NavItem item="Hire me" />
            </li>
        </ul>
    );
}
export default Navbar;