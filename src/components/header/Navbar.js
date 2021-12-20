
const NavbarElement = (props) => {
    return(
        <li>{props.name}</li>
    );
}

const Navbar = () => {
    return(
        <ul className="navbar">
            <NavbarElement name="Start"/>
            <NavbarElement name="Works"/>
            <NavbarElement name="About Us"/>
            <NavbarElement name="News"/>
            <NavbarElement name="Hello"/>
        </ul>
    );
}

export default Navbar;