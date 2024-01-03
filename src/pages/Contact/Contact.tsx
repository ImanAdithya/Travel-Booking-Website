import {Component} from "react";
import {ArrowForwardIos} from "@mui/icons-material";
import contactImage from "../../assets/contact.png"

export class Contact extends Component {
    render() {
        return (
            <div className='px-5 lg:px-10 xl:px-36 2xl:px-52 flex flex-row gap-10 h-full mt-[10rem]'>

                <div className='flex flex-col gap-16 '>
                   <div className='flex flex-col gap-4'>
                       <span className='font-bold text-4xl'>Join our newsletter 🎉</span>
                       <p className='text-lg opacity-50'>
                           Read and share new perspectives on just about any topic. Everyone’s welcome.
                       </p>
                   </div>

                    <div className='flex flex-col gap-4'>

                       <div className='flex flex-row gap-3'>
                           <div className='w-10 h-8 rounded-xl  flex  items-center justify-center bg-[#DBEAFE]'>
                               <span className='text-blue-700 '>01</span>
                           </div>

                           <span className='font-bold text-xl'>Get more discount</span>

                       </div>

                        <div  className='flex flex-row gap-3'>
                            <div className='w-10 h-8 rounded-xl flex  items-center justify-center bg-[#FEE2E2]'>
                                <span>02</span>
                            </div>
                            <span className='font-bold text-xl'>Get premium magazines</span>
                        </div>

                    </div>

                    <div className='flex flex-row w-[25rem] h-[3rem] border border-black border-opacity-50 rounded-3xl'>
                        <input placeholder='Enter your email' className='w-full h-full rounded-3xl px-5'/>
                        <div className='h-[2.5rem] w-12 m-1 bg-blue-700 rounded-3xl flex justify-center items-center'>
                            <ArrowForwardIos className='text-white text-xl'></ArrowForwardIos>
                        </div>
                    </div>
                </div>


                <div className='w-[45rem]'>
                    <img  src={contactImage}/>
                </div>
            </div>
        );
    }
}