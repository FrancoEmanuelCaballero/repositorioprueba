import Navbar from './Navbar';


function Header() {
    return(
        <header>
            <div className="headerTop row text-center">
                <div className="col-md-4"></div>
                <div className="col-md-4">Logo</div>
                <div className="col-md-4">Menu</div>
            </div>
            <Navbar/>
        </header>
    );
}

export default Header;