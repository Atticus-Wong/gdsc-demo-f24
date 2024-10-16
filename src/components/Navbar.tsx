import logo from '../assets/logo.svg'
export default function Navbar() {
  return (
    <nav className="flex items-center justify-center w-full h-16 py-12 my-5">
      <div className='flex items-center justify-between mx-20 px-12 w-full py-8'>
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        
        {/* Navigation links on the right */}
        <ul className="flex space-x-8 text-white items-center">
          <li className="text-grey text-P2 cursor-pointer">About</li>
          <li className="text-grey text-P2 cursor-pointer">Projects</li>
          <li className="text-grey text-P2 cursor-pointer">FAQ</li>
          <li className="text-grey text-P2 cursor-pointer">Contact</li>
          <li className="text-white text-P2 cursor-pointer font-semibold"><button className='bg-blue px-5 py-2 transition-colors duration-150 rounded-lg hover:bg-dark_blue'>Join</button></li>
        </ul>

      </div>

    </nav>
  );
}
