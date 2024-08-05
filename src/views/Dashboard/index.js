import {useEffect, useState} from "react";
import {checkMobileBrowser} from "../../utils";
import {getDeeplink, getQR, getUserId, vfUrl} from "../../api";
import Navbar from "../../navBar/navBar";
import {General} from "../../styled";
import {Style} from "./Style";
import {useUserProvider} from "../../context/provider";
import {useNavigate} from "react-router-dom";
import * as QRCode from 'qrcode';
import { decode } from "js-base64";
import succesAnimation from '../../assets/success.json'
import Lottie from "lottie-react";
import axios from "axios";


function Dashboard() {
  const isMobile = checkMobileBrowser();
  const [invitation, setInvitation] = useState(<div></div>);
  const [hasInvitation , setHasInvitation] = useState(false);
  const [requestError , setRequestError] = useState(false);
  const [isVerify , setIsVerify] = useState(false)
  const [invitationId , setInvitationId] = useState('')
  const [result , setResult] = useState(false)
  const [hasResult , setHasResult] = useState(false)
  const [user , setUser] = useState(false)

  const { SessionStorage} = useUserProvider();
  const navigate = useNavigate();

  const resultControll = async (invitation)=>{
    let aux = (await axios.get(vfUrl+ invitation)).data
      if(aux.verified){
        setResult(aux.result)
        setHasResult(true)
      }
}

  const getUser = ()=>{
    const user = SessionStorage.getItem("user");
    const json = JSON.parse(user);
    return json
  }
  const userController = ()=>{
    const sessionUser = getUser()
    if(sessionUser){
      setUser(sessionUser)
    }else{
      navigate('/')
    }
  }

  const cicleControll = (invitation)=>{
    let aux = invitation
      setInterval(() => {
        resultControll(aux)
      }, 10000);
}

  const setVerification = ()=>{
    setIsVerify(!isVerify)
    setInvitation(<div></div>)
    setHasInvitation(false)
  }

  const setDeeplink = async (goalCode)=>{
    let invitation = {
      goalCode:goalCode,
      credentialContextIds:['growth-card'],
      integrationParams: { givenName: user.givenName , familyName: user.familyName , company: user.company , id: user._id},
    };
    invitation.integrationParams.userId = await getUserId({});
    const {data:url} = await getDeeplink(invitation);

    const parsed = JSON.parse(decode(url?.split('oob=')[1].split('&')[0]))
    setInvitationId(parsed.id)


    return url
  }
  const getImg = async (goalCode) => {
    const data = await setDeeplink(goalCode);
    const qrBody = await QRCode.toDataURL(data);
    const qrImg = (
      <Style.InnerQrContainer>
        <Style.QR
          src={qrBody}
          alt='QR Invitation'
        />
      </Style.InnerQrContainer>
    );
    
    setHasInvitation(true);
    setInvitation(qrImg);
   
  };

  const getLink = async (goalCode) => {
    const linkUrl = await setDeeplink(goalCode)
    const linkElement = (
      <div>
        <a href={linkUrl}>
          <strong>Invitation link</strong>
        </a>
      </div>
    );
    setInvitation(linkElement);
    setHasInvitation(true)
  };

  const getInvitation = (goalCode) => {
    isMobile ? getLink(goalCode) : getImg(goalCode);
  };
  useEffect(() => {
    userController();
  }, []);


  useEffect(()=>{
    if(isVerify){cicleControll(invitationId)}
  },[invitationId])

  return (
    <General.View>
      <Navbar cb={setVerification}/>
      <General.Body>
        <Style.Container>
          <Style.QRContainer>
           { !hasInvitation?<p>
              You are using a{" "}
              <strong>{isMobile ? "mobile" : "non mobile"}</strong> device
            </p> : null}
            {!isMobile ? (
              !hasInvitation?<>
                <p>
                {!isVerify? 
                '1. Scan the QR code with the mobile agent app to get your credentials'
                :
                '1. Scan the QR code with the mobile agent app to verify your credentials'} 
                </p>
              </>:null
            ) : (
              <>
                <p>1. Click the button below to get your {!isVerify? 'ISSUING':'VERIFY'} invitation</p>
              </>
            )}
            {!hasInvitation?<Style.Button onClick={() => !isVerify? getInvitation("streamlined-vc"):getInvitation("streamlined-vp")}>
                Get your invitation
            </Style.Button>:null}
            {invitation && invitation}
            {hasResult && 
              <Style.ResultContainer>
                <Lottie
                  style={{
                    position:'absolute',
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                  }}
                  animationData={succesAnimation}
                  autoPlay
                  loop={false}
                />
              </Style.ResultContainer>}
          </Style.QRContainer>
          <Style.RightSide/>
        </Style.Container>
      </General.Body>
      <General.Lower>
      </General.Lower>
        {!requestError?null:
          <Style.BlurDiv>
            <Style.BlurContainer>
            <div>
            <Style.BlurButton onClick={()=>{setRequestError(false)}}>
              X
            </Style.BlurButton>
            </div>
            <div>
              <p>Oops, something went wrong.</p>
              <p>Try to get the invitation again or feel free to contact us if the problem persists.</p>
            </div>
            </Style.BlurContainer>
          </Style.BlurDiv>
        }
    </General.View>
  );
}


export default Dashboard;

