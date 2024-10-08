import { useState } from "react";
import { useUserProvider } from "../../context/provider";

const Form = ({cb}) => {
    const [password, setPassword] = useState('');
    const [remember,setRemember] = useState(false);
    const {state , setUser , setRememberMe} = useUserProvider();

    const onChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(validatePassword(password)){
            if(remember){
                cb(true)
                setUser(true)
                setRememberMe(true)
            }else{
                cb(true) 
                setUser(true)
            }
        }else{
            alert('Wrong password')
        }
    }

    const onClickHandler = (e) => {
        e.preventDefault();
        setRemember(e.target.checked);
    }
    const validatePassword = (password)=>{
        return password === 'popupcity2024'
    }


    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="space-y-6" action="#" onSubmit={onSubmitHandler}>
                <h5 className="text-xl font-medium text-gray-900">Sign in to your oficial verifier</h5>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        required
                        onChange={(e)=>{onChangeHandler(e)}}
                        />
                </div>
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
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Login to your verifier station
                </button>
            </form>
        </div>
    )
}

export default Form