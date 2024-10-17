import logo from '../assets/logo.svg'
import discord_logo from '../assets/discord_logo.svg'
import instagram_logo from '../assets/instagram_logo.svg'
import linkedin_logo from '../assets/linkedin_logo.svg'
import tiktok_logo from '../assets/tiktok_logo.svg'
import youtube_logo from '../assets/youtube_logo.svg'

export default function Footer() {
  return(
    <footer className='bg-footer_white py-12 mt-20 flex flex-col md:flex-row justify-around items-center'>
      <div className="flex flex-col items-center justify-center max-md:mb-5">
        <img src={logo} alt='logo'/>
        <p className='text-P2 font-bold my-2'>Google Developer Student Clubs</p>
        <p>University of California, Davis</p>
      </div>
      <div className='flex justify-between gap-12 max-md:mb-5'>
        <ul className='flex flex-col items-center'>
          <li className='font-bold'>Links</li>
          <li className='text-P3 hover:cursor-pointer'>About</li>
          <li className='text-P3 hover:cursor-pointer'>Apply</li>
          <li className='text-P3 hover:cursor-pointer'>Projects</li>
        </ul>
        <ul className='flex flex-col items-center'>
          <li className='font-bold'>Students</li>
          <li className='text-P3 hover:cursor-pointer'>FAQ</li>
          <li className='text-P3 hover:cursor-pointer'>Contact</li>
          <li className='text-P3 hover:cursor-pointer'>Newsletter</li>
        </ul>
      </div>
      <div>
        <div className='flex gap-8'>
          <img src={instagram_logo} alt='instagram' className='hover:cursor-pointer'/>
          <img src={linkedin_logo} alt='linkedin' className='hover:cursor-pointer'/>
          <img src={youtube_logo} alt='youtube' className='hover:cursor-pointer'/>
          <img src={discord_logo} alt='discord' className='hover:cursor-pointer'/>
          <img src={tiktok_logo} alt='tik tok' className='hover:cursor-pointer'/>
        </div>
      </div>

    </footer>
  )
}