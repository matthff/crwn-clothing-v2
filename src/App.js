import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";

import { 
    createUserDocumentFromAuth, 
    onAuthStateChangedListener 
} from './utils/firebase/firebase.utils.js';

//import { setCurrentUser } from "./store/user/user.action.js";
import { setCurrentUser } from "./store/user/user.slice.js";

import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx"


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
          if(user) {
              createUserDocumentFromAuth(user);
          }
          dispatch(setCurrentUser(user));
      })

      return unsubscribe;
  }, []);

  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="/auth" element={<Authentication/>}/>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
};

export default App;
