import React from 'react'
import "./profile.css"
import Nav from "../Nav/Nav"
import { useSelector } from 'react-redux'
import { selectUser } from '../../userSlice'
import { auth } from '../../util/Fierbas'
const Profile = () => {
    const user = useSelector(selectUser)
  return (
    <div className='profile'>
      <div>
        <Nav />
      </div>
        <div className='profile__container'>
            <div className='profile__container-user'>
             <h1>Edith Profile</h1>
            <img
                 onClick={() => navigate("/")}
                 src="https://th.bing.com/th/id/R.0a5e7a1fa5a0c49f27a55ab285e7d375?rik=zzuvfcCsf4I8vw&pid=ImgRaw&r=0" 
                 className="profile__netflix"/>
            </div>
            <div className='profile__data-user'>
              <h1 className='user__email'>{user.email}</h1>
              <div className='plans__user'>
                <h2>Plans</h2>
              </div>
              <button onClick={() => auth.signOut()}>Sig out</button> 
            </div>
        </div>
    </div>
  )
}

export default Profile
