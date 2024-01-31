import { useState } from "react";
import "./sini.css";
import Sininip from "./Siniup/Sininip";

const Sinin = () => {
  const [singe, setSinge] = useState(true);
  const singin = (e) => {
    e.preventDefault()
  }
  return (
    <div className='singe'>
      <div className='singe__nav'>
        <img
          src='https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png'
          alt='baner'
          className='nav__log'
        />

        <button className='loging__button' onClick={() => setSinge(false)}>
          Sign In
        </button>
      </div>
      {singe ? (
        <div className='forme'>
          <>
            <h1>Unlimited filem, Tv Programmes and more.</h1>
            <h3>Watch any where. Cancel at any time</h3>
            <p>
              Ready to whatch? Enter You email to create or restat your
              membersip
            </p>
          </>
          <div>
            <form className='input__frome'>
              <input
                type='email'
                className='input_email'
                placeholder='Enter you email'
              />
              <button className='get__btn' onClick={() =>setSinge(false)}>Get Started</button>
            </form>
          </div>
        </div>
      ) : (
        <Sininip />
      )}
    </div>
  );
};

export default Sinin;
