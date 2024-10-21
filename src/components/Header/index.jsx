import { Link, NavLink } from "react-router-dom";
import AuthLink from "./AuthLink";
import ProfileInfo from "./ProfileInfo";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";


const Header = () => {
const [isOpen, setIsOpen] = useState()
  return (
    <header>
      <nav className="bg-gray-800 px-4 py-2.5 lg:px-6 border-gray-200 text-white">
        <div className="flex flex-wrap justify-between text-white items-center mx-auto ">
          
        <Link className="flex items-center gap-2">
          <img
            className="rounded-full w-10 h-10 mt-5 mr-3 sm:h-9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlZj1MgQUZbBim5Wjrq3S66bnr9byHia-2w&s"
            alt=""
          />
          <span className="text-white mt-6 text-xl font-semibold">Flow</span>
        </Link>
        {/* kullanıcı oturum açmışsa profıl bilgileri
        oturum açık değilse giriş yap kaydol butonu  */}
          <div  className='flex items-center gap-3 lg-order-2'>
          {true ? <AuthLink /> : <ProfileInfo />}
          <button onClick={()=>setIsOpen(!isOpen)}  className="inline-flex text-[24px]items-center p-2 ml-1 rounded lg:hidden transition hover:bg-gray-300 hover:text-gray-400">
          <GiHamburgerMenu/>
          </button>

          </div>


        <div className= {`${isOpen ? "" : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg-order-1`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:
          mt-0">
            <li>
              <NavLink className={'block py-2 pr-4 pl-3 rounded lg:text-blue-700 lg:bg-transparent lg:p-0 text-gray-400 hover:bg-gray-700'} to={"/home"}>Anasayfa</NavLink>
            </li>
            <li>
              <NavLink className={'block py-2 pr-4 pl-3 rounded lg:text-blue-700 lg:bg-transparent lg:p-0 text-gray-400 hover:bg-gray-700'} to={"/hakkımızda"}>Hakkamızda</NavLink>
            </li>
            <li>
              <NavLink className={'block py-2 pr-4 pl-3 rounded lg:text-blue-700 lg:bg-transparent lg:p-0 text-gray-400 hover:bg-gray-700'} to={"/iletişim"}>iletişim</NavLink>
            </li>
            <li >
              <NavLink className={'block py-2 pr-4 pl-3 rounded lg:text-blue-700 lg:bg-transparent lg:p-0 text-gray-400 hover:bg-gray-700'} to={"/ürünler"}>Ürünler</NavLink>
            </li>
          </ul>
          </div>
       </div>
          
      </nav>
    </header>
  );
};

export default Header;
