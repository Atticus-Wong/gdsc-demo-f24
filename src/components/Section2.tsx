import S2 from '../assets/S2_1.svg'
export default function Section2() {
  return(
    <div className="mt-20 flex items-center gap-12">
      <div className='w-1/2'>
        <h2 className='font-bold'>Why join the Product Cohort?</h2>
        <p className='text-P1 font-bold mt-5'>Because we turn your skills into tangible results!</p>
        <p className='text-grey text-P2 mt-5'>Do you want to take your development/design skills to the next level? <br/>Are you ready to collaborate with a startup and create a product that makes an impact? The UC Davis Google Developer Student Club’s <br/>Product Cohort is the opportunity you've been waiting for.</p>
        <p className='text-grey text-P2 mt-5'>In this hands-on cohort, you won’t just learn—you’ll do. You will join a small, dynamic team tasked with building a functional website for an innovative startup. Together, you’ll experience the thrill and challenges <br/>of working in  a fast-paced, real-world environment.</p>
        <button className='text-base text-blue outline-blue outline outline-2 py-2 px-6 rounded-lg mt-10'>View our projects</button>
      </div>
      <div className='w-1/2'>
      <img src={S2} alt='network' className='size-full'/>
      </div>
    </div>
  )
}