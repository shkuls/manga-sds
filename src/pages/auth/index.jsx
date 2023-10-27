import React from 'react'

import {auth , provider } from '../../config/firebase-config'
import { signInWithPopup } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

export function Auth() {

const navigate = useNavigate();//for redirection

  const signIn = async () =>{
    const results = await signInWithPopup(auth ,  provider)
    const authInfo = {
      userID : results.user.uid , 
      dispName : results.user.displayName , 
      profPic : results.user.photoURL ,
      auth : true ,
    }
    localStorage.setItem('auth' ,JSON.stringify(authInfo) )
    navigate('/exp')
  }

  return (
    <div class="container">
        <button onClick={signIn} type="button" class="btn btn-info my-5">Sign In with Google</button>
    </div>
  )
}