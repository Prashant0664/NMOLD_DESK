import React from 'react'
import { useNavigate } from 'react-router-dom'
import IMG1 from "../Assets/LOGO1.webp"
import IMG2 from "../Assets/Logo2.webp"
const TopNavbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute top-0 w-full max- bg-blue-600'>
                <div className='w-[100%] flex justify-between items-center '>
                    <div className='flex gap-4 ml-6'>
                        <div className=' pt-3 pb-1'>
                            <img src={IMG1} alt="" className='h-[3rem]' />
                        </div>
                        <div className='pt-3 pb-1'>
                            <img src={IMG2} alt="" className='h-[3rem]' />
                        </div>
                    </div>
                    <div className='text-white cursor-pointer flex mt-0 gap-[2rem] max-[1100px]:gap-[1rem] justify-end items-end mr-[5rem] max-[900px]:mr-[1rem]'>
                        <div className='text-white'>
                            Password
                        </div>
                        <div className='' onClick={() => {
                            navigate('/')
                            window.location.reload()
                        }}>
                            Log Out
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopNavbar