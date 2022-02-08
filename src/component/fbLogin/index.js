import React, {useState} from "react";
import "./index.css";

const Login = ({loginData}) =>{

    const [correct, setCorrect] = useState(false);               //to check the login credentials
    const [unmatch, setUnmatch] = useState(false);              //to show error if password in wrong
    const [unavailable, setUnavailable] = useState(false);      //to show the error if email unavailable in data
    const [email, setEmail] = useState("");
    const [psswrd, setPsswrd] = useState("");
    const [validate, setValidate] = useState({});

    const emailBoxHandler = (text) =>{
        setEmail(text.target.value);
        // console.log("email typing");
    }

    const psswrdBoxHandler = (text) =>{
        setPsswrd(text.target.value.trim());
        // console.log("psswrd typing");
    }

    const validation = () =>{
        const regex = /\S+@\S+\.\S+/;
        const error = {};

        if(!email){
            error.email = "Email is required";
        }
        else if(!regex.test(email)){
            error.email = "Email is not in valid format!"
        }

        if(!psswrd){
            error.password = "Password is required";
        }
        // else{
        //     setPsswrd(psswrd.trim())
        // }
        return error;
    }

    const loginCheck = () =>{
        let isChecked = false;
        let accountExist = false;

        for(let i=0; i < loginData.length; i++){
            if(loginData[i].emailAdd === email){
                accountExist = true;
                if(loginData[i].password === psswrd){

                    isChecked = true;

                    // console.log("email or psswrd are correct");
                }
            }
            // console.log("hello");
        }

        if(accountExist === false){
            setUnavailable(true);         // email id hi exist nhi krti
        }

        return isChecked;
    }

    const loginBtnHandler = (event) =>{
        event.preventDefault();

        // console.log(loginData);

        // console.log(loginData[1].emailAdd);

        setValidate(validation);

        const check = loginCheck();

        if(check === false){    
            console.log("check false h");

            setEmail("");
            setPsswrd("");
            setUnmatch(true);

            // console.log(unmatch);  
        }
        else{
            setCorrect(true);
        }
    }
     
    // console.log(unmatch, "unmatch ki value");

    return(
        <div className="fbLoginContainer">
            <section className="fbMoto">
                <h1>facebook</h1>
                <p>Facebook helps you connect and share with the people in your life.</p>
            </section>

            <section className="loginArea">
                <div className="loginWhiteBox">
                    <div className="loginBox">
                        <form className="upperLoginBox">
                            <input onChange={emailBoxHandler} value={email} className="emailBox" type="email" placeholder="Email address or phone number" />
                            <p className="error">{validate.email}</p>

                            <input onChange={psswrdBoxHandler} value={psswrd} className="psswrdBox" type="password" placeholder="Password" />
                            <p className="error">{validate.password}</p>

                                {/* to display error if email account does not exist in data */}
                            <p className={unavailable ? "emlNtExst" : "emlExst"}>Account does not exist</p>

                                {/* to display an error when account exist but password is wrong */}
                            <p className={unavailable ? "noError" : unmatch ? "error" : "noError"}>Login credentials are <strong>wrong</strong></p>

                            <button onClick={loginBtnHandler} className="logInBtn" >Log In</button>

                                {/* to display successful login */}
                            <p className={correct ? "greenTick" : "redTick"}>Your Login credentials are <strong>correct</strong></p>

                            <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">Forgotten password?</a>
                        </form>
                        <div className="lowerLoginBox">
                            <button className="createAccountBtn">Create New Account</button>
                        </div>
                    </div>
                </div>
                <div className="createAPage">
                    <p><strong>Create a Page</strong> for a celebrity, brand or business.</p>
                </div>
            </section>
        </div>
    );
}

export default Login;