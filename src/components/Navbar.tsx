import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons"
import { Link, useLocation } from 'react-router-dom'

interface INavbarProps {
  cartItem: any[]
}
const Navbar: React.FC<INavbarProps> = function (props) {
  return (
    <>
      <nav className="w-full bg-customBlue min-h-8 text-white p-4 flex items-center">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <div className="bg-purple-300 rounded-[50%] w-8 h-8 flex justify-center items-center">EF</div> <span className="font-bold text-2xl-responsive">Eden Fashionworld</span>
          </div></Link>
        <div className="icons ml-auto flex items-center gap-2">
          {!(useLocation().pathname === "/cart")? <FontAwesomeIcon icon={faUser} size="2x" className="cursor-pointer" />: <></>}
          <Link to="/cart" className="cursor-pointer">
            <div className="relative">
              <FontAwesomeIcon icon={faCartShopping} size="2x" className="cursor-pointer" />
              {props.cartItem.length > 0 && <div className="absolute -top-2 -right-1 w-6 h-6 bg-black rounded-[50%] flex justify-center items-center">{props.cartItem.length}</div>}
            </div></Link>
          <div className="border-l-2 px-3 cursor-pointer"><FontAwesomeIcon icon={faBars} size="2x" className="" /></div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
