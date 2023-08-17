import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="shadow-md py-[10px]" >
      <ul className="flex items-center justify-center text-[18px] font-medium">
        <li>
          <Link className="text-[20px]" to="/">Home</Link>
        </li>
        <li className="ml-[15px]">
          <Link className="text-[20px]" to="/about">About</Link>
        </li>
        <li className="ml-[15px]">
          <Link className="text-[20px]" to="/formsd">Form</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar