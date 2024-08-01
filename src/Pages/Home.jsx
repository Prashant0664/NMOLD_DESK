import React from 'react'
import IMG1 from "../Assets/img1.webp"
import IMG2 from "../Assets/img2.webp"
import IMG3 from "../Assets/img3.webp"
import IMG4 from "../Assets/img4.webp"
const Home = () => {
    return (
        <div className=''>
            <div className='mt-[6rem]'>
                <img src={IMG1} alt='img1' className='h-full w-full' />
            </div>
            <div className='mt-[5rem]'>
                <div className='flex justify-around'>
                    <div className='w-[fit-content]'>
                        <img src={IMG3} alt='img3' className='h-[50vh] rounded-xl ' />
                    </div>
                    <div className='w-[50%]'>
                        <div className='text-[45px]'>
                            About Us
                        </div>
                        <div className='text-[20px] '>
                            Bharat's biggest AI & Drone Expo is a premier event that brings together professionals, experts, and enthusiasts from the fields of Artificial Intelligence and drone technology. The expo aims to showcase the latest innovations, products, and solutions in AI and drone technology, as well as facilitate networking and collaboration among industry stakeholders.A popular event in the domains of artificial intelligence and drone technology, Bharat's AI & Drone Expo brings together professionals, experts, and enthusiasts. The purpose of the exhibition is to present the newest advancements in artificial intelligence (AI) and drone technology, as well as to encourage networking and cooperation between industry participants.
                        </div>
                    </div>
                </div>
                <div className='w-[100%] mt-[4rem]'>

                <div className='flex w-[90%] ml-[5%] mr-[5%] gap-4'>
                    <div className='w-[50%]'>
                        <div className='text-[40px]'>
                            Our Mission
                        </div>
                        <div className='text-[20px]'>
                            Our mission of an AI & Drone expo could be multifaceted, but generally, it aims to serve as a platform for showcasing the latest advancements, applications, and technologies in artificial intelligence (AI) and drone technology.
                        </div>
                        <div className='text-[40px]'>
                            Our Vision
                        </div>
                        <div className='text-[20px]'>
                            Vision of an AI & Drone Expo is to serve as a dynamic platform that showcases cutting-edge advancements in artificial intelligence and drone technology. It aims to foster innovation, collaboration, and education within these rapidly evolving fields, while promoting responsible and ethical practices. Through exhibitions, workshops, and networking opportunities, the expo seeks to inspire and empower individuals and organizations to leverage AI and drones for positive societal impact across various industries and domains.
                        </div>
                    </div>
                    <div className='w-[fit-content]'>
                        <img src={IMG4} alt='img4' className='h-[50vh] rounded-xl' />
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Home