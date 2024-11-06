import NavItem from "./NavItem"
const Navbar = () => {
    return (
        <div className="text-white border-b-2 border-black flex gap-2">
            <NavItem item="Home"/>
            <NavItem item="About"/>
            <NavItem item="Projects"/>
            <NavItem item="Resume"/>
            <NavItem item="Hire me"/>
        </div>
    );
}
export default Navbar;