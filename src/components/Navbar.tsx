import { useState } from 'react'
import logo from '../assets/logo.svg'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-center w-full h-16 py-12 mt-5 relative">
      <div className='flex items-center justify-between max-lg:mx-20 mx-4 px-12 w-full py-8'>
        <div>
          <img src={logo} alt="Logo" className="h-8" />
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="hidden max-sm:block"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-grey" />
          ) : (
            <Menu className="h-6 w-6 text-grey" />
          )}
        </button>

        <ul className="flex space-x-8 text-white items-center max-sm:hidden">
          <li className="text-grey text-P2 cursor-pointer">About</li>
          <li className="text-grey text-P2 cursor-pointer">Projects</li>
          <li className="text-grey text-P2 cursor-pointer">FAQ</li>
          <li className="text-grey text-P2 cursor-pointer">Contact</li>
          <li className="text-white text-P2 cursor-pointer font-semibold">
            <button className='bg-blue px-5 py-2 transition-colors duration-300 rounded-lg hover:bg-dark_blue'>
              Join
            </button>
          </li>
        </ul>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2 hidden max-sm:block">
            <ul className="flex flex-col py-4">
              <li className="text-grey text-P2 cursor-pointer hover:bg-gray-50 px-12 py-3">About</li>
              <li className="text-grey text-P2 cursor-pointer hover:bg-gray-50 px-12 py-3">Projects</li>
              <li className="text-grey text-P2 cursor-pointer hover:bg-gray-50 px-12 py-3">FAQ</li>
              <li className="text-grey text-P2 cursor-pointer hover:bg-gray-50 px-12 py-3">Contact</li>
              <li className="px-12 py-3">
              <button className='bg-blue text-white px-5 py-2 transition-colors duration-300 rounded-lg hover:bg-dark_blue w-full'>Join</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}