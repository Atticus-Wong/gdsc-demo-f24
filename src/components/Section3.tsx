import S3_1 from '../assets/S3_1.svg'
import S3_2 from '../assets/S3_2.svg'
import Button_group from './Button_group'
import S3_green from '../assets/S3_green.svg'
import S3_yellow from '../assets/S3_yellow.svg'
import S3_blue from '../assets/S3_blue.svg'
export default function Section3() {
  return(
    <div className="flex items-center mt-20">
      <div className="w-1/2">
        <img src={S3_1} alt='S3_2' className='size-10/12'/>
        <img src={S3_2} alt='S3_2' className='size-10/12 mt-5'/>
      </div>
      <div className="w-1/2">
        <h2 className='font-bold'>Benefits of the Product Cohort </h2>
        <div className='flex items-center gap-3 mt-10 mb-5'>
          <img src={S3_yellow} alt='S3_yellow'/>
          <p className='font-bold text-H3'>Hands-on Experience</p>
        </div>
        <p className='text-P2'>This cohort gives you the chance to work in a real-world scenario with <br/>real deadlines, clients, and deliverables. By the end of the project, you’ll <br/>have a fully developed website to showcase in your portfolio.</p>
        <div className='flex items-center gap-3 mt-10 mb-5'>
          <img src={S3_blue} alt='S3_blue'/>
          <p className='font-bold text-H3'>Mentorship that Matters</p>
        </div>
        <p className='text-P2'>With guidance from experienced product managers who know the ins <br/>and outs of launching professional websites, you’ll navigate through the complexities of client communication and team dynamics.</p>
        <div className='flex items-center gap-3 mt-10 mb-5'>
          <img src={S3_green} alt='S3_green'/>
          <p className='font-bold text-H3'>A professional network</p>
        </div>
        <p className='text-P2 mb-10'>Working with a startup means you’re not just gaining experience— <br/> you’re building relationships. The connections you make in our cohort <br/>could open doors to internships or even startup ventures of your own.</p>
        <Button_group />
      </div>
    </div>
  )
}