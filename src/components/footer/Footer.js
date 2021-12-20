import NavSocial from './NavSocial';


const Footer = () => {
    return(
        <footer className="footer">
            <div className="row">
                <div className="col">
                    <h2>Let's create a new transformation for your business ?</h2>
                    <div className="row">

                        <div className="col-md-4">
                            <p>
                                16192 Coastal Highway 
                                <br/>
                                DE – USA
                            </p>
                        </div>

                        <div className="col-md-4">+ 1 920 333 1106</div>

                        <div className="col-md-4">hello@revalcodesolution.com</div>

                    </div>
                    <NavSocial/>
                </div>

                <div className="col-4"></div>
            </div>
        </footer>
    );
}

export default Footer;