import {Component} from "react";
import s2 from "../../assets/s2.png"

export class SectionTwo extends Component {
    render() {
        return (
            <div className='px-5 lg:px-10 xl:px-36 flex flex-col 2xl:px-52  xl:flex-row  mt-[13rem] gap-16'>

                <div className=''>
                    <img className='w-[50rem]' src={s2}/>
                </div>

                <div className='flex flex-col  justify-center '>
                   <div>
                       <div className='flex flex-col gap-3'>
                           <span className='opacity-50'>BENNEFITS</span>
                           <span className='text-4xl font-bold'>Happening cities</span>
                       </div>

                       <div className='flex flex-col gap-4 mt-12'>
                           <div className='bg-[#DBEAFE] w-24 text-center px-2 py-1 rounded-lg text-sm text-blue-700'>Advertising</div>
                           <div>
                               <span className='font-bold text-2xl'>Cost-effective advertising</span>
                           </div>

                           <div>
                               <p className='opacity-55 text-lg'>With a free listing, you can advertise your rental with no upfront costs</p>
                           </div>
                       </div>

                       <div className='flex flex-col gap-4 mt-12'>
                           <div className='bg-[#DCFCE7] w-24 text-center px-2 py-1 rounded-lg text-sm text-green-600'>Exposure</div>
                           <div>
                               <span className='font-bold text-2xl'>Reach millions with Chisfis</span>
                           </div>

                           <div>
                               <p className='opacity-55 text-lg'>Millions of people are searching for unique places to stay around the world</p>
                           </div>
                       </div>

                       <div className='flex flex-col gap-4 mt-12'>
                           <div className='bg-[#FEE2E2] w-24 text-center px-2 py-1 rounded-lg text-sm text-red-600'>Secure</div>
                           <div>
                               <span className='font-bold text-2xl'>Secure and simple</span>
                           </div>

                           <div>
                               <p className='opacity-55 text-lg'>A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                           </div>
                       </div>
                   </div>

                </div>

            </div>
        );
    }
}