import S1 from '../assets/S1_1.svg'
import Button_group from './Button_group'

export default function Section1() {
  return(
    <div className="flex items-center justify-between">
      <div className='w-1/2'>
        <p className='text-P2 font-black'>Build Real-World Products with the </p>
        <h1 className='font-bold'>UC Davis</h1>
        <h1 className='font-bold'>Product Cohort</h1>
        <p className='text-P1'>This cohort focuses on collaborating with real-world <br/>startups to deliver a fully-functional product, simulating <br/>the experience of working in a professional environment.</p>
        <Button_group />
        </div>
      <div className='w-1/2'>
        <img src={S1} alt='photo gallery' className='size-full'/>
      </div>
    </div>
  )
}