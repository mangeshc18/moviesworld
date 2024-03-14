import { useRef, useState } from "react";
import Header from "./Header";
import CheckValidData from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { BACKGROUND_IMG, USER_PROFILE } from "../utils/constants";


const Login = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const [errorMsg, setErrorMsg] = useState(null)
    const email = useRef(null);
    const name = useRef(null)
    const password = useRef(null)
    // const navigate = useNavigate()
    const dispatch = useDispatch()


    const ToggleForm = () =>{
        setIsLoginForm(!isLoginForm)
    }


    const HandleBtn = () => {
console.log(email.current.value, password.current.value);

const Message =CheckValidData(email.current.value, password.current.value)

console.log(Message);
setErrorMsg(Message)

if(Message) return;

if(!isLoginForm) {
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up logic
    const user = userCredential.user;
    console.log(user);

    updateProfile(user, {
      displayName: name.current.value, photoURL: USER_PROFILE
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser;
      console.log(auth.currentUser);

      dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
      

      // ...
    }).catch((error) => {
      // An error occurred

      // ...
    });
    

    // navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + "" + errorMessage)
    // ..
  });
}else {
    //sign up logic


    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
    // navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + "" + errorMessage)
  });
}


    }




  return (
    <div className="relative">
      <Header />
      <div className="">
        <img
          className="w-full h-screen"
          src={BACKGROUND_IMG}
          alt=""
        />

        <div className="w-full h-screen absolute top-0 bg-black/30 z-10"></div>

        <form onSubmit={(e) => e.preventDefault()} className="absolute top-[30%] mx-auto w-[280px] h-auto left-0 right-0 bg-black/80 rounded-md z-30 text-white">
          <div className="flex flex-col gap-y-4 py-4 px-4 rounded-md ">
            {
                isLoginForm ? <p>Sign In</p> : <p>Sign Up</p>
            }

            {
                !isLoginForm && <input ref={name}
                className="py-2 px-4 rounded-md outline-none bg-[#0F1513] placeholder:text-gray-500 text-white"
                type="text"
                placeholder="full name"
              />
            }
            
            
            <input ref={email}
              type="email"
              className="py-2 px-4 rounded-md outline-none bg-[#0F1513] placeholder:text-gray-500 text-white"
              placeholder="email"
            />
            <input ref={password}
              type="password"
              className="py-2 px-4 rounded-md outline-none bg-[#0F1513] placeholder:text-gray-500 text-white"
              placeholder="password"
            />
            <p className="text-red-500 text-sm">{errorMsg}</p>
            <button onClick={HandleBtn} className="bg-red-600 text-white rounded-md p-2 font-semibold">
                {
                    isLoginForm ? "Sign In" : "sign up"
                }
              
            </button>

            <p className="cursor-pointer text-sm" onClick={ToggleForm}>{
                isLoginForm ? "new on netflix ? sign up now" : "already have account ? sign in now"
            }</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
