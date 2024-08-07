import React from 'react'

const UpdateVisitor = () => {
    return (
        <>
            <div className='ml-[15%] mt-[4rem] absolute w-[85%] max-[1100px]:w-full max-[1100px]:ml-[0rem] max-[1100px]:mt-[7rem]'>
                <div className=''>
                    <div className='bgc  text-white text-[25px] pl-2 py-2'>
                        Visitors
                    </div>
                    <div className='mt-[3rem]'>
                        <div className=''>
                            <div className=''>
                                Status
                            </div>
                            <select className='bg-white border mb-1  w-[15rem] h-[2rem] text-[grey] border-[grey]'>
                                <option>Approve</option>
                                <option>Deny</option>
                                <option>Waitlist</option>
                            </select>
                        </div>
                        <div className='bg-yellow-400 w-[fit-content] text-[17px] text-white px-[0.5rem] rounded-sm  cursor-pointer py-[0.1rem] mt-1'>
                        <span className='max-[1100px]:hidden'>
                                enteries

                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default UpdateVisitor