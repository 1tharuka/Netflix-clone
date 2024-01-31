import React, { useState } from 'react'
import "./sininip.css"
import { useRef } from 'react'
import { auth } from '../../../../util/Fierbas';


const Sininip = () => {
  const emailref = useRef(null);
  const paswordref = useRef(null);


  const singup = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailref.current.value,
      paswordref.current.value,
    ).then((authUser) =>{console.log(authUser)}).catch((error) =>{alert(error.message)})
  }
  const register = (e) =>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailref.current.value,
      paswordref.current.value,
    ).then((authUser) =>{console.log(authUser)}).catch((error) =>{alert(error.message)})
  }
  return (
    <div className='siniup'>
      <div className='black__sinup'>

        <h1>Sing in</h1>
        <form className='forme__cols'>
          <input ref={emailref} type="email" placeholder=' email'/>
          <input ref={paswordref} type="password" placeholder=' password'/>
          <button onClick={singup}>Sing In</button>
        </form>
        <h4><span>New to Netflix?</span><a onClick={register}>Sign up now.</a></h4>
      </div>
    </div>
  )
}

export default Sininip
