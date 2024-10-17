import S3_1 from '../assets/S3_1.svg'
import S3_2 from '../assets/S3_2.svg'
import Button_group from './Button_group'
import S3_green from '../assets/S3_green.svg'
import S3_yellow from '../assets/S3_yellow.svg'
import S3_blue from '../assets/S3_blue.svg'
export default function Section3() {
  return(
    <div className="flex max-md:flex-col max-md:items-start items-center mt-32">
      <div className="w-1/2 flex flex-col gap-4 items-start max-md:items-center max-md:w-full max-md:flex-row max-md:mb-10 max-sm:flex-col max-md:overflow-x-scroll">
        <img src={S3_1} alt='S3_2' className='size-10/12 max-md:size-3/4 max-sm:size-full'/>
        <img src={S3_2} alt='S3_2' className='size-10/12 max-md:size-3/4 max-sm:size-full'/>
      </div>
      <div className="w-1/2 max-md:w-full md:pr-10">
        <h2 className='font-bold'>Benefits of the Product Cohort </h2>
        <div className='flex items-center gap-3 mt-10 mb-5'>
          <img src={S3_yellow} alt='S3_yellow'/>
          <h3 className='font-bold text-dark_blue'>Hands-on Experience</h3>
        </div>
        <p className='text-P2'>This cohort gives you the chance to work in a real-world scenario with real deadlines, clients, and deliverables. By the end of the project, you’ll have a fully developed website to showcase in your portfolio.</p>
        <div className='flex items-center gap-3 mt-10 mb-5'>
          <img src={S3_blue} alt='S3_blue'/>
          <h3 className='font-bold text-dark_blue'>Mentorship that Matters</h3>
        </div>
        <p className='text-P2'>With guidance from experienced product managers who know the ins and outs of launching professional websites, you’ll navigate through the complexities of client communication and team dynamics.</p>
        <div className='flex items-center gap-3 mt-10 mb-5'>
          <img src={S3_green} alt='S3_green'/>
          <h3 className='font-bold text-dark_blue'>A professional network</h3>
        </div>
        <p className='text-P2 mb-10'>Working with a startup means you’re not just gaining experience— you’re building relationships. The connections you make in our cohort could open doors to internships or even startup ventures of your own.</p>
        <Button_group />
      </div>
    </div>
  )
}