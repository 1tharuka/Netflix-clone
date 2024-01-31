import "./App.css";
import HomeScree from "./componets/Home/HomeScren";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sinin from "./componets/Home/singe/Sinin";
import Profile from "./componets/profile/Profile";
import { useEffect } from "react";
import { auth } from "./util/Fierbas";
import { useDispatch, useSelector } from "react-redux";
import { logout, login, selectUser } from "./userSlice";

function App() {
  const navigate = useNavigate();
  const User = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='app'>
      {!User ? (
        <Sinin />
      ) : (
        <Routes>
          <Route path='/' element={<HomeScree />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
