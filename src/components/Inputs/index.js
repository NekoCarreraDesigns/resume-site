import React from "react";
import "./index.css";

function Inputs () {
    return (
        <div>
            <p className="intro">Welcome to the boot camp resume&acute; builder, and interview prep site. I know what your thinking another resume&acute;, but this one is different.
                It is strictly for boot camp students, and boot camp graduates. the good news is it's free unlike the other sites that make you pay for their fancy resume.
                Another thing that is different here is that not only can you build a resume&acute;, you can find interview prep questions, and the dreaded algorithms, which
                we all need to practice. Welcome to the the site please sign in or sign-up!
            </p>
            <div>
            <form className="user-inputs">
            <input className="username" placeholder="What's your name?"></input>
            <br></br>
            <input className="password" placeholder="What's your password?"></input>
            <br></br>
            <button className="submit-button"><a href="/user">Submit</a></button>
            <button className="sign-up-button"><a href="/user-sign-up">Sign up</a></button>
            </form>
            </div>
        </div>
    )
}
export default Inputs;