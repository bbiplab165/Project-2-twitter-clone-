import { Link } from "react-router-dom";
import Style from "./Registration_1.module.css";

function registration() {
    const handleEmailRegistration = () => {
        window.open("mailto:", "_blank");
    };
    return (
        <div className={Style.backGround}>
            <div className={Style.registration}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLU8QlIDK6OCt8cduG6Wxv7SIw12YwfHBV6kzTy20&s"
                alt="logo"
                className={Style.logo}
            />
            <h2>Join Twitter today</h2>
            <button onClick={handleEmailRegistration}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHxitr63nqUsJWNuWIBQuZ57t4bT1sndzAw&usqp=CAU"
                    alt="google"
                />
                Sign up with Google
            </button>
            <button>
                <img
                    src="https://thumbs.dreamstime.com/b/apple-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-apple-logo-editorial-illustrative-208329130.jpg"
                    alt="apple"
                />
                Sign up with Google
            </button>
            <hr />
            <h3>Or</h3>
            <Link to="/register2">
                <button className={Style.registrationButton}>Create account</button>
            </Link>
            <p>
                By signing up, you agree to the <span>Terms of Service</span> and{" "}
                <span>Privacy Policy</span>, including <span>Cookie Use</span>.
            </p>
            <p>
                {" "}
                Have an account already?<span>Log in</span>{" "}
            </p>
        </div>
        </div>
    );
}

export default registration;
