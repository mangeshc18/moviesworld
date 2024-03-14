import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  // console.log(user);
  const dispatch = useDispatch()


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
  
        dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse")
        
        // ...
      } else {
        // User is signed out
        // ...
  
        dispatch(removeUser());
        navigate("/")
      }
    });
  
  
    return () => unsubscribe();
  
  }
  
  
  ,[])



  const HandleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/")
  
    }).catch((error) => {
      // An error happened.
      // console.log(error.message);
    });
  }

  




  return (
    <div className='absolute top-0 z-40  flex justify-between px-20 w-full '>
      <img className='w-36  z-30' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix logo" />
      {user && <div className='flex items-center gap-2'>
        <img className='w-10' src={user?.photoURL} alt="" />
        <span className='text-white'>{user?.displayName}</span>
        <button onClick={HandleSignOut} className='text-white bg-red-600 font-semibold text-sm rounded-md cursor-pointer  p-2'>Sign Out</button>


      </div>}
  
    </div>
    
  )
}

export default Header;
