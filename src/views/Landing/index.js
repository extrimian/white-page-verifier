import {General} from "../../styled";
import {Link, useNavigate} from "react-router-dom";
import Navbar from "../../navBar/navBar";
import {Style} from "./Styles";
import {useEffect, useState} from "react";
import {checkMobileBrowser} from "../../utils";
import { postUserInfo } from "../../api";
import { useUserProvider } from "../../context/provider";

function Landing() {
  const navigate = useNavigate();
  const {} = useUserProvider();
  const onClickHandler = (data)=>{
    navigate('/'+data)
  }
  useEffect(() => {
  }, []);

  return (
    <>
      <General.View>
        <Navbar/>
        <General.Body>
          <Style.Container>
            <Style.Login>
            <div className="h-1/2 w-full flex justify-center items-center px-10">
              <button type="button" onClick={()=>{onClickHandler("Oficial")}}className=" w-full h-1/4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Evento Oficial
              </button>
            </div>
            <div className="h-1/2 w-full flex justify-center items-center px-10">
              <button type="button" onClick={()=>{onClickHandler("Side")}} className=" w-full h-1/4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Evento Extra-oficial
              </button>
            </div>
            </Style.Login>
            <div
              className="h-1/5 md:h-full w-full md:w-2/6 bg-gradient-to-br from-purple-600 to-blue-500 rounded-br-xl rounded-tr-xl"
            />
          </Style.Container>
        </General.Body>
        <General.Lower/>
      </General.View>
    </>
  );
}

export default Landing;
