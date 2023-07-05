import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { BsFillCartFill } from 'react-icons/bs';

const Header = () => {
    return ( 
        <header className='fixed h-16 shadow-md w-full md:px-4'>
            <div className='flex items-center h-full justify-between'>
                <Link to={''}>
                    <div className='h-12'>
                        <img className='h-full' src='https://seeklogo.com/images/C/chef-logo-3AB30DE4D7-seeklogo.com.png'></img>
                    </div>
                </Link>

                <div className="flex gap-4 items-center">
                    <nav className="flex gap-5">
                        <Link to={''}>Home</Link>
                        <Link to={'menu'}>Menu</Link>
                        <Link to={'about'}>About</Link>
                        <Link to={'contact'}>Contact</Link>
                    </nav>
                    <div className="text-4xl text-slate-400">
                        <BsFillCartFill/>
                    </div>
                    <div className="text-4xl text-red-500">
                        <FaUserCircle/>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;