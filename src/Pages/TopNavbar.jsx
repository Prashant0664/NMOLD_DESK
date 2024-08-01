import React from 'react'

const TopNavbar = () => {
    return (
        <>
            <div className='absolute top-0 w-full'>
                <div className='w-[100%]'>
                    <div className='flex mt-4 gap-[2rem] justify-end items-end mr-[5rem]'>
                        <div className=''>
                            Password
                        </div>
                        <div className=''>
                            Log Out
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopNavbar