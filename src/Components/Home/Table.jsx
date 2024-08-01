import React from 'react'
import {homedatatable} from '../../Data/index'
const Table = () => {
  return (
    <>
        <div className='home-table'>
            <div className=' font-semibold text-[20px] '>
                Material Inventory Overview
            </div>
            <div className=''>
                <table className='w-full dash-table1'>
                    <tr className='border border-solid border-black h-[2rem]' style={{backgroundColor:"white"}}>
                        <td>
                            Item
                        </td>
                        <td>
                            Net Weight
                        </td>
                        <td>
                            Supplier
                        </td>
                        <td>
                            Received Date
                        </td>
                        <td>
                            Last Issue
                        </td>
                        <td>
                            Quantity
                        </td>
                        <td>
                            Stock Lvl
                        </td>
                    </tr>
                    {homedatatable.map((item,index)=>{
                        return(
                            <tr className='h-[2rem]'>
                                <td>
                                    {item.name1}
                                </td>
                                <td>
                                    {item.name2}
                                </td>
                                <td>
                                    {item.name3}
                                </td>
                                <td>
                                    {item.name4}
                                </td>
                                <td>
                                    {item.name5}
                                </td>
                                <td>
                                    {item.name6}
                                </td>
                                <td>
                                    {item.name7==="Full" && <div className='bg-green-400 w-[fit-content] px-3 rounded-full'>
                                        {item.name7}
                                    </div>}
                                    {item.name7==="Mid" && <div className='bg-blue-300 w-[fit-content] px-3 rounded-full'>
                                        {item.name7}
                                    </div>}
                                    {item.name7==="Low" && <div className='bg-red-300 w-[fit-content] px-3 rounded-full'>
                                        {item.name7}
                                    </div>}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
            <div className='w-full right-0 flex justify-end mt-2'>
                <div className='flex'>
                    <div className=' home-gt-btn'> 
                        &lt;
                    </div>
                    <div className='home-pagination'>
                        1
                    </div>
                    <div className='home-pagination-active'>
                        2
                    </div>
                    <div className='home-gt-btn'>
                        &gt;
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Table