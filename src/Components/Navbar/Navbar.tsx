import NavItem from "./NavItem"
const Navbar = ({onValueChange}:{onValueChange:(value: string) => void}) => {

    return (
        <div className="text-white border-b-2 border-black flex gap-2 fixed h-10 w-full top-0 bg-black">
            <div onClick={() => onValueChange("Home")} className='cursor-pointer'>
                <NavItem item="Home" />
            </div>
            <div onClick={() => onValueChange("About")} className='cursor-pointer'>
                <NavItem item="About" />
            </div>
            <div onClick={() => onValueChange("Projects")} className='cursor-pointer'>
                <NavItem item="Projects" />
            </div>
            <div onClick={() => onValueChange("Resume")} className='cursor-pointer'>
                <NavItem item="Resume" />
            </div>
            <div onClick={() => onValueChange("Hire me")} className='cursor-pointer'>
                <NavItem item="Hire me" />
            </div>
        </div>
    );
}
export default Navbar;