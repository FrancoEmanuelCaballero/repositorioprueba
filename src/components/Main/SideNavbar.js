import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SideNavbar = () => {
    
    return(
        <aside className="col-md-1 float-md-start">
            <ul className="sideNav text-center">

                <li>
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </li>

                <li>
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </li>

                <li>
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </li>

            </ul>
        </aside>
    );
}

export default SideNavbar;