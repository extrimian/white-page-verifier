import { useState } from "react";

const SelectorButton = ({item , categories , onPick})=>{
    const [active , setActive] = useState(false);

    const onClickHandler = ()=>{
        onPick(item , categories)
        setActive(!active)
    }
    return(
        <div className="">
                {!active ?
                <button 
                    onClick={()=>{onClickHandler()}}
                    className="w-full h-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    {item}
                </button>
                :
                <button 
                    onClick={()=>{onClickHandler()}}
                    className="w-full h-full  bg-gradient-to-br from-teal-200 to-lime-200  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    {item}
                </button>
                }
        </div>
    )
}

export default SelectorButton