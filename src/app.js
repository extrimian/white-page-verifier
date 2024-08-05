
import {Route, Routes} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Loading from "./views/Loading";
import Landing from "./views/Landing";
import OficialEvent from "./views/Oficial Event";
import SideEvent from "./views/Side Event";


function App() { 

  return (
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/login" element={<Loading/>}/>
				<Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/Oficial" element={<OficialEvent/>}/>
        <Route path="/Side" element={<SideEvent/>}/>
		</Routes>
  );
}

export default App;
