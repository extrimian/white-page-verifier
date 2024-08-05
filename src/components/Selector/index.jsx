import { useState } from "react";
import SelectorButton from "../SelectorButton";

const Dropdown =({title , data , cb})=>{
    const [isActive , setIsActive] = useState(false);
    const dataMapping = data.map((item)=>{
        return (
            <li>
                <div  
                onClick={()=>{
                    setIsActive(!isActive)
                    cb(item)
                }}
                className="block px-4 py-2 hover:bg-gray-100 ">
                    {item}
                </div>
            </li>
        )
    })

    return (
    <div className="relative m-5">
    <button 
        id="dropdownDividerButton" 
        data-dropdown-toggle="dropdownDivider" 
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" 
        type="button"
        onClick={()=>{
            setIsActive(!isActive)
        }}
        >
        {title}
    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
    </svg>
    </button>
    {isActive && 
    <div id="dropdownDivider" className="absolute top-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDividerButton">
        {dataMapping}
        </ul>
    </div>}
    </div>
    )
}
const Selector = ({data , title , onPick , categories , sumbit , stageSelector, stageCategories , setEventName ,setCheckDate})=>{
    const [dropdown , setDropdown] = useState(false);
    const [hasEventName , setHasEventName] = useState(false);

    const onClickHandler = (e) => {
        e.preventDefault();
        setCheckDate(e.target.checked);
    }

    const selectHandler = (title)=>{
        setHasEventName(true)
        setDropdown(title)
        setEventName(title)
    }

    const dataMapping = data.map(item =>{
        return (
            <SelectorButton item={item} onPick={onPick} categories={categories} />
        )
    })
    const onSumbitHandler = (e) =>{
        e.preventDefault();
        if(!hasEventName){
            alert("Please select an event name")
            return
        }else{
            sumbit()
        }
    }

    return(
        <div className="w-full h-full rounded-md border border-slate-300">
            <div className="w-full min-h-10 flex justify-center items-center rounded-t-md text-white bg-gradient-to-br from-blue-500 to-purple-600 ">
                    {title}
            </div>
            <div className="flex w-full justify-center items-center pt-2">
            </div>
            <div className="w-full h-3/4 grid grid-cols-2 md:grid-cols-3 gap-4 mt-5 p-5">
                {dataMapping}
            </div>
            {stageSelector &&
            <div className="w-full flex flex-row justify-center items-center">
            <Dropdown title={dropdown || 'Selecciona el evento'} data={stageCategories} cb={selectHandler}/>
            <div className="flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input 
                        id="remember" 
                        type="checkbox" 
                        value="" 
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        onChange={(e)=>{onClickHandler(e)}} 
                    />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Verificar fecha</label>
            </div>
            </div>
            </div>
            }
            <div className="w-full h-1/4 flex justify-center items-center">
                <button 
                    onClick={onSumbitHandler}
                    className="w-1/2 h-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Siguiente
                </button>
            </div>
        </div>
    )
}
export default Selector;