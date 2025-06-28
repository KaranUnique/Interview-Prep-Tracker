import googlelogo from './assets/googlelogo.png';
import login_img from './assets/login_img.svg';
function Login() {
    return (
        <div className="logcontainer">
            <div className="left-log">
                <h2>Sign in</h2>
                <p style={{
                    borderBottom: "1px solid rgb(223, 228, 232)",
                    paddingBottom: "7px"
                }}>
                    <span style={{ opacity: '60%' }}>Don't have an account yet?</span>
                    <span style={{ color: "rgb(0, 0, 223)", marginLeft: "8px", opacity: "80%" }}>Sign up here</span>
                </p>
                <div className="credentials">
                    <h5>Email address</h5>
                    <input type="text" name="email" id="email" placeholder="Enter email address"></input>
                    <div className="password-label">
                        <h5>Password</h5>
                        <h6>Forgot Password</h6>
                    </div>
                    <input type="password" name="password" id="password" placeholder="Enter password"></input>
                    <button className="credentials-btn">Sign in</button>
                    <div className="divider">
                        <hr />
                        <span>Or continue with</span>
                        <hr />
                    </div>
                    <div className='google-login'>
                        <button>
                            <img src={googlelogo} alt="" />
                            Sign in with Google</button>
                    </div>
                    <div className='terms-condition'>
                        <p>By signing in or creating an account, you are agreeing to </p>
                        <p>our &nbsp; <span>Terms & Conditions</span> &nbsp;and our<span>&nbsp;Privacy Policy</span>.</p>
                    </div>
                </div>
            </div >
            <div className="right-log">
                <img src={login_img} alt="" />
            </div>
        </div>
    );
}
export default Login;
