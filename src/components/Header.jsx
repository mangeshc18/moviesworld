import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  console.log(user);

  const HandleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
  
    }).catch((error) => {
      // An error happened.
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
