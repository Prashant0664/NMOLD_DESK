import React from 'react'
import AC from "../Assets/AccountIcon.png"
import BG from "../Assets/Rectangle2.png"
import G1 from "../Assets/Google.png"
import "../Styles/Login.css"
import ForgotPassword from '../Components/PopupBox/ForgotPassword'
import PopUpMain from '../Components/PopupBox/PopUpMain'
import EnterOTP from '../Components/PopupBox/EnterOTP'
import NewPassword from '../Components/PopupBox/NewPassword'
import BGIL from "../Assets/BGIL.avif"
import { Link, useNavigate } from 'react-router-dom'
const Login = (seturl) => {
    const navigate = useNavigate()
    const [state, setstate] = React.useState(false)
    const [ids, setids] = React.useState(-1)
    React.useEffect(() => {
        console.log(ids)
    }, [ids]);
    const goto = () => {
        navigate("/home")
        window.location.reload()
    }
    return (
        <>
            <div className={` ${ids == -1 ? "hidden" : ""} absolute w-full h-full z-[99] model-box`}>
                <ForgotPassword ids={ids} setids={setids} />
                <EnterOTP ids={ids} setids={setids} />
                <NewPassword ids={ids} setids={setids} />
            </div>
            <PopUpMain id={ids} />
            <div className='login-main-box absolute w-full h-full z-[-10]'>

            </div>
            <div className='h-[100vh] flex justify-center items-center w-full  absolute login-bg-box '>
                <div className='bg-[#F5F5F5] w-[375px] h-[fit-content] pb-7 shadow-slate-200 rounded-xl overflow-hidden shadow-xl  mt-[0%] pt-0'>
                    <div className='w-[379px] overflow-visible ml-[-2px]'>
                        <img src={BG} alt="" className='w-[379px]' />
                    </div>
                    <div className=' flex justify-center mt-[-2.5rem]'>
                        <img src={AC} alt="" className='w-[5rem] h-[5rem]' />
                    </div>
                    <div className={`${state ? "" : "hidden"}`}>

                        <div className='text-center text-[24px] mt-[1rem] font-normal'>
                            Sign In
                        </div>
                        <div className=''>
                            <form className='flex flex-col  gap-2 w-[100%] mt-[0.5rem]'>
                                <div className='flex flex-col gap-2 w-[100%] ml-[7%]'>

                                    <input type="text" placeholder="Username" className='login-input' />
                                    <input type="email" placeholder="Email" className='login-input' />
                                    <input type="password" placeholder="Password" className='login-input' />
                                    <input type="password" placeholder="Confirm Password" className='login-input' />
                                </div>
                                <div className='flex gap-1 justify-start items-center ml-[7%]'>
                                    <input type="checkbox" className='' />
                                    <label className='text-[15px]'>Remember Me</label>
                                </div>
                            </form>

                        </div>
                        <div className='flex items-center justify-center mt-4'>
                            <div className='login-signin text-center flex items-center justify-center' onClick={() =>
                                goto()
                            }>
                                Sign In
                            </div>
                        </div>
                        <div className='flex justify-center items-center text-[13px] mt-4'>
                            __________________ or __________________
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={G1} alt="" className='h-[2rem] mt-4' />
                        </div>
                        <div className='flex justify-center items-center text-[13px] mt-[1rem]'>
                            Already have an account? <span className='text-[#1877F2] cursor-pointer' onClick={() => { setstate(!state) }}>&nbsp;Login</span>
                        </div>
                    </div>
                    <div className={`${state ? "hidden" : ""}`}>
                        <div className='text-center text-[24px] mt-[1rem] font-normal'>
                            Login
                        </div>
                        <div className=''>
                            <form className='flex flex-col  gap-2 w-[100%] mt-[0.5rem]'>
                                <div className='flex flex-col gap-2 w-[100%] ml-[7%]'>

                                    <input type="email" placeholder="Email" className='login-input' />
                                    <input type="password" placeholder="Password" className='login-input' />
                                </div>
                                <div className='flex gap-1 justify-between items-center ml-[7%] mr-[7%]'>
                                    <div className='flex gap-1'>
                                        <input type="checkbox" className='' />
                                        <label className='text-[15px]'>Remember Me</label>
                                    </div>
                                    <div className='text-[#1877F2] text-[13px] cursor-pointer' onClick={() => { setids(1); }}>
                                        Forgot Password?
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className='flex items-center justify-center mt-4'>
                            <div className='login-signin text-center flex items-center justify-center'onClick={() =>
                                goto()
                            }>
                                Login
                            </div>
                        </div>
                        <div className='flex justify-center items-center text-[13px] mt-4'>
                            __________________ or __________________
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={G1} alt="" className='h-[2rem] mt-4' />
                        </div>
                        <div className='flex justify-center items-center text-[13px] mt-[1rem]'>
                            Already have an account? <span className='text-[#1877F2] cursor-pointer' onClick={() => { setstate(!state) }}>&nbsp;Sign Up</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login