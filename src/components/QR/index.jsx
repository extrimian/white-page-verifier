import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import succesAnimation from '../../assets/success.json';
import failedAnimation from '../../assets/fail.json';
import loading from '../../assets/loading.gif';
import { did, getVeriInvitation, getVerificationResult } from "../../api";


const QRContainer = ({categories , reload , keyValue , title , eventName , checkDate})=>{
    const [hasResult , setHasResult] = useState(false);
    const [result , setResult] = useState(false);
    const [message , setMessage] = useState("");
    const [invitation , setInvitation] = useState('NO DATA');
    const [invitationId , setInvitationId] = useState('NO DATA');

    const onClick = ()=>{
        reload(keyValue+1)
    }

    const fetchInvitation = async(data)=>{
        const verificationParams ={available:data , eventName:eventName || '' , checkDate:checkDate};
        try{
            const response = await getVeriInvitation(did , verificationParams);
            setInvitation(response.oobContentData)
            setInvitationId(response.invitationId)
        }catch(e){
            console.log(e)
        }
    }
    const fetchResult = async(invitationId)=>{
        try{
            const response = await getVerificationResult(invitationId);
            if(!!response){
                setHasResult(true);
                setResult(response.verification);
                setMessage(response.message);
            }
        }catch(e){
            console.log(e)
        }
    }
    const pullCicle = (invitation)=>{
        setInterval(() => {
            if(!hasResult) fetchResult(invitation)
          }, 3000);
    }
    useEffect(()=>{
        if(invitationId === 'NO DATA')fetchInvitation(categories)
    },[])
    useEffect(()=>{
        if(invitationId!== 'NO DATA'){
            pullCicle(invitationId)
        }
    },[invitationId])

    return(
        <div className="w-screen md:w-60vw h-full md:h-70vh flex justify-center items-center border border-slate-400 rounded-md flex flex-col ">
        <div className="w-full md:h-1/6 bg-indigo-400 flex justify-center">
            <h1 className="mt-10 w-full text-xl text-white font-black text-center">
                {title}
            </h1>
        </div>
        <div className="w-full h-5/6 flex justify-center items-center">
            <div className="w-full md:w-1/2 h-4/6 flex justify-center items-center">
                {!hasResult?
                invitation === 'NO DATA' ?
                <div className="w-full h-full flex justify-center items-center flex-col p-10">
                    <img src={loading} alt="Success Animation" className="w-full" />
                </div> 
                :
                <QRCode 
                value={invitation} 
                renderAs="canvas" 
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                />
                
                :
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <div className="w-full h-1/3">
                        <Lottie
                        style={{
                            position:'absolute',
                            transform: 'translate(-50%, -50%)',
                            top: '50%',
                            left: '50%',
                        }}
                        animationData={result?succesAnimation:failedAnimation}
                        autoPlay
                        loop={false}
                        />
                    </div>
                    <div className="w-full h-2/3 flex justify-center items-center flex-col mt-10 p-1">
                        <h1 className="mt-10 w-full text-xl  text-gray-900 font-black text-center">
                            {result?"Scan succeeded":message}
                        </h1>
                        <button 
                            onClick={onClick}
                            className="w-1/2 md:w-1/4 h-12 bg-blue-500 text-white font-black rounded-md mt-10">
                            Reload
                        </button>
                    </div>
                </div>
                }
            </div>

        </div>
        </div>
    )
}

export default QRContainer;