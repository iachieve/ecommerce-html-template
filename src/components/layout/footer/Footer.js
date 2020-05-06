import './footer.scss';
import React from "react";
import {Link} from "react-router-dom";

function Footer(props) {
    return (<footer className='footer'>

       <div>
           <h3>Contact Developer</h3>
       </div>
        <div className='footer__icons-container'>
            <a className="footer-icon" href="https://github.com/iachieve"
               target="_blank"  rel="noopener noreferrer" >
                <i className="fab fa-github"> </i>
            </a>
            <a className="footer-icon" href="https://www.linkedin.com/in/iachieve/"
               target="_blank"  rel="noopener noreferrer" >
                <i className="fab fa-linkedin"> </i>
            </a>
            <a className="footer-icon" href="tel:+1425-933-3765">
                <i className="fas fa-phone-square"> </i>
            </a>
            <a className="footer-icon"
               href="mailto:iachieve80@gmail.com?cc=mhalim80@hotmail.com&subject=I came across your portfolio website&body=Hi Mohamed, I came across your portfolio website, "
               target="_blank"  rel="noopener noreferrer" >
                <i className="fas fa-envelope-open-text"> </i>
            </a>
            <a className="footer-icon"
               href="https://docs.google.com/document/d/1ORhA0QpK1coPhDkPXU4j_E0xzzyRjKLy2gH25mQwV2g/export?format=pdf"
               download>
                <i className="far fa-file-pdf"> </i>
            </a>
            <a className="footer-icon" href="https://medium.com/@iachieve80" target="_blank"  rel="noopener noreferrer" >
                <i className="fas fa-blog"> </i>
            </a>

        </div>

    </footer>);
}
export default  Footer;