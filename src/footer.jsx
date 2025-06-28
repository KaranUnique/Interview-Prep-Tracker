import insta from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import x from './assets/twitter.png';
function Footer() {
    return (
        <>
            <div className='footer-part'>
                <div className="foot-container">
                    <h5>FAQ</h5>
                    <h5>Support</h5>
                    <h5>Privacy</h5>
                    <h5>Timeline</h5>
                    <h5>Terms</h5>
                </div>
                <div className='footer-socialmedia'>
                    <img src={insta} alt="Instagram" width="30" height="30" />
                    <img src={linkedin} alt="linkedin" width="30" height="30" />
                    <img src={x} alt="x" width="30" height="30" />
                </div>
                <div className='footer-copyright'>
                    <p>© 2025 AlgoBase, Inc. All rights reserved.</p>
                </div>

            </div>

        </>
    );
}
export default Footer;