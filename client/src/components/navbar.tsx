import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex w-full items-center justify-between sticky bg-slate-900 h-24 px-10" >
        <Link to='/' className="= text-white text-4xl top-5 left-10">X<span className="text-purple-800">pense</span></Link>
        <ul className=" text-white flex space-x-4">
            <li>d</li>
            <li>d</li>
            <li>d</li>
            <li></li>
        </ul>
    </div>
  )
}

export default Navbar