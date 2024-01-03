import {Component} from "react";
import l1 from "../../assets/l1.webp"
import l2 from "../../assets/l2.webp"
import l3 from "../../assets/l3.jpeg"
import l4 from "../../assets/l4.jpeg"
import l5 from "../../assets/l5.webp"
import {ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos} from "@mui/icons-material";
export class SectionOne extends Component {
    render() {
        return (
            <div className='px-5 lg:px-10 xl:px-36 2xl:px-52 flex flex-col w-full h-full'>

               <div className='flex flex-row justify-between'>
                   <div className='flex flex-col gap-2 '>
                       <span className=' text-4xl font-bold'>Our Travelling Places</span>
                       <span className='text-xl opacity-65'>characterize our curated selection of travel destinations.</span>
                   </div>

                   <div className='flex flex-row gap-3'>

                       <div className='w-10 h-10 bg-slate-200 rounded-full flex flex-row items-center justify-center'>
                           <ArrowBackIos className='ml-2 opacity-55'></ArrowBackIos>
                       </div>

                       <div className='w-10 h-10 bg-slate-200 rounded-full flex flex-row items-center justify-center'>
                           <ArrowForwardIos  className='ml-2 opacity-55'></ArrowForwardIos>
                       </div>



                   </div>
               </div>


                <div className='flex flex-row gap-7 mt-20 flex-wrap justify-center lg:justify-start'>

                    <div className=' w-[16rem]  '>
                        <img className='rounded-xl h-[23rem] ' src={l1}/>
                    </div>
                    <div className=' w-[16rem]  '>
                        <img className='rounded-xl h-[23rem] ' src={l2}/>
                    </div>
                    <div className=' w-[16rem]  '>
                        <img className='rounded-xl h-[23rem] ' src={l3}/>
                    </div>
                    <div className=' w-[16rem]  '>
                        <img className='rounded-xl h-[23rem] ' src={l4}/>
                    </div>
                    <div className=' w-[16rem]  '>
                        <img className='rounded-xl h-[23rem] ' src={l5}/>
                    </div>


                </div>

            </div>
        );
    }
}