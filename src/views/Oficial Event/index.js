import {useEffect, useState} from "react";
import {getCategories} from "../../api";
import Navbar from "../../navBar/navBar";
import {General} from "../../styled";
import {useUserProvider} from "../../context/provider";
import Form from "../../components/Form";
import Selector from "../../components/Selector";
import QRContainer from "../../components/QR";


function OficialEvent() {
  const {isLogged , state} = useUserProvider();
  const [logged, setLogged] = useState(false);
  const [categories , setCategories] = useState([])
  const [ticketCategories , setTicketCategories] = useState([])
  const [stageCategories , setStageCategories] = useState([])
  const [hasInvitation , setHasInvitation]=useState(false)
  const [key , setKey] = useState(0)
  const [eventName ,setEventName] = useState(false)
  const [checkDate , setCheckDate] = useState(false);

  const userCheck = ()=>{
    return  isLogged()
  }
  const addCategory = (data)=>{
    const newCategories = [...categories]
    newCategories.push(data)
    setCategories(newCategories)
  };
  const removeCategory = (data)=>{
    const newCategories = [...categories]
    newCategories.splice(newCategories.indexOf(data),1)
    setCategories(newCategories)
  };
  const onPickHandler =(data , arr)=>{
    if(arr.includes(data)){
      removeCategory(data)
    }else{
      addCategory(data)
    }
  }
  const fetchCategories = async ()=>{
    const tickets = await getCategories('tickets')
    const stages = await getCategories('stages')
    setTicketCategories(tickets.categories)
    setStageCategories(stages.categories)
  }
  const onSumbitHandler = ()=>{
    if(categories.length === 0){
      alert("Please select at least one category")
      return
    }else{
      setHasInvitation(true)
    }
  }

  useEffect(() => {
    fetchCategories()
    setLogged(userCheck())
  }, []);
  return (
    <General.View>
      <Navbar cb={()=>{}}/>
      <General.Body>
        <div className="h-full w-full flex justify-center items-center">
          {hasInvitation?
            <QRContainer categories={categories} key={key} keyValue={key} reload={setKey} title={eventName || 'Evento Oficial'} eventName={eventName} checkDate={checkDate}/>
          :
          !logged?
          <Form cb={setLogged}/>
          :
          <div>
            <Selector 
              data={ticketCategories} 
              stageSelector={true}
              stageCategories={stageCategories}
              setEventName={setEventName}
              title={'Selecciona las categorias habilitadas a pasar'} 
              onPick ={onPickHandler}
              categories={categories}
              setCheckDate={setCheckDate}
              sumbit={()=>{
                onSumbitHandler()
              }}
            />
          </div>}
        </div>
      </General.Body>
      <General.Lower>
      </General.Lower>
    </General.View>
  );
}


export default OficialEvent;

