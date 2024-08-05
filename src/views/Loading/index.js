import { General } from "../../styled";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navBar/navBar";
import { Style } from "./Styles";
import { useUserProvider } from "../../context/provider";
import { useEffect } from "react";


function Loading() {
  const navigate = useNavigate();
  const {setCode,setToken} = useUserProvider();  
  const location = window.location.search;
  const urlParams = new URLSearchParams(location);
  const values = urlParams.values()
  let paramValues = [];
  for (const key of values) paramValues.push(key);

  const sendCode = async(code)=>{
    navigate("/dashboard",{replace:true});
  }

  const getToken =async(code)=>{
    await setToken(code);
  }

  useEffect(()=>{
    sendCode(paramValues[0])
  },[])


  return (
    <>
      <General.View>
        <Navbar/>
        <General.Body>
          <Style.Container>
            <Style.Login><Style.Loading src={require('./Styles/loading.gif')} height={"70%"} /></Style.Login>
            <Style.RightSide></Style.RightSide>
          </Style.Container>
        </General.Body>
      <General.Lower/>
      </General.View>
    </>
  );
}

export default Loading;
