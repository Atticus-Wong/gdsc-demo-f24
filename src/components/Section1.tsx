import S1 from '../assets/S1_1.svg'
import Button_group from './Button_group'

export default function Section1() {
  return(
    <div className="flex items-center justify-between gap-8 mt-6 max-md:flex-col max-md:items-start">
      <div className='w-1/2 pr-10 max-md:w-full'>
        <p className='text-P2 font-bold text-dark_blue'>Build Real-World Products with the </p>
        <h1 className='font-extrabold pr-3 leading-snug'>UC Davis Product Cohort</h1>
        <p className='text-P1 pr-10'>This cohort focuses on collaborating with real-world startups to deliver a fully-functional product, simulating the experience of working in a professional environment.</p>
        <Button_group />
        </div>
      <div className='w-1/2 max-md:w-full max-md:flex max-md:items-center max-md:justify-center'>
        <img src={S1} alt='photo gallery' className='size-full max-md:size-1/2 max-sm:size-full'/>
      </div>
    </div>
  )
}