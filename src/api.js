import axios from "axios";
export const ssiApiUrl = process.env.REACT_APP_SSI_API_URL;
export const baseUrl = process.env.REACT_APP_SSI_INTEGRATION_SERVICE_URL;
export const vfUrl = process.env.REACT_APP_VERIFICATION_URL;
export const verIntegration = process.env.REACT_APP_VERIFICATION_INTEGRATION;
export const did = process.env.REACT_APP_DID;
const credentialContextIds = process.env.REACT_APP_CONTEXT_IDS ?
  process.env.REACT_APP_CONTEXT_IDS.split(',') :
  ['citizen-card']


export const getQR = (goalCode, userId) => {
  return axios.post(`${baseUrl}invitation/qr`, {
    goalCode,
    integrationParams: {userId},
    credentialContextIds
  });
};

export const getDeeplink = (invitation ) => {
  return axios.post(`${baseUrl}invitation/deeplink`, invitation);
};

export const getUserId = async (data) => {
  const { data: id } = await axios.post(`${ssiApiUrl}/add`, data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return id;
};

export const postUserInfo = async (data)=>{
  return await axios.post(`${ssiApiUrl}/citizen/new`, data, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export const getVeriInvitation = async (did , verificationParams )=>{

  const body ={
    did:did,
    inputDescriptors: [
        {
            id: "PopUpCityCredential",
            name: "PopUpCityCredential",
            constraints: {
                fields: [
                    {
                      path: [
                        "$.credentialSubject.category"
                    ],
                    filter: {
                        "type": "string"
                    }
                    }
                ]
            }
        }
    ],
    "verificationParams":verificationParams
  }
  try{
    const { data } = await axios.post(verIntegration + '/getOob', body, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return data;

  }catch(err){
    console.log({status:"failed" , message:err});
  }

}
export const getCategories = async (id) => {
 try{ const { data } = await axios.get(verIntegration + `/categories/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return data;}catch(err){console.log({status:"failed" , message:err});}
};
export const getVerificationResult = async (id) => {
  try{ const { data } = await axios.get(verIntegration + `/result/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
  return data;}catch(err){console.log({status:"failed" , message:err});}
};