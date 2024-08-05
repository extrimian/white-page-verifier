import {useEffect, useState} from "react";
import {getCategories} from "../../api";
import Navbar from "../../navBar/navBar";
import {General} from "../../styled";
import QRContainer from "../../components/QR";


function SideEvent() {
  const [ticketCategories , setTicketCategories] = useState(false)
  const [key , setKey] = useState(0)

  const fetchCategories = async ()=>{
    const response = await getCategories('tickets')
    const categories = response.categories
    setTicketCategories(categories)
  }

  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <General.View>
      <Navbar cb={()=>{}}/>
      <General.Body>
        <div className="h-full w-full flex justify-center items-center">
            {ticketCategories && <QRContainer categories={ticketCategories} key={key} reload={setKey} title={'Side Event'} eventName={'External'} checkDate={false}/>}
        </div>
      </General.Body>
      <General.Lower>
      </General.Lower>
    </General.View>
  );
}


export default SideEvent;

