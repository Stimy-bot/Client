import { Divide as Hamburger } from 'hamburger-react'
import { useRef, useState } from 'react'
import { navlinks } from './NavLinks'
// import { useAppDispatch } from '../../hooks/redux'
// import { useLogoutMutation } from '../../slices/usersApiSlice';
import { useNavigate } from 'react-router-dom';
// import { logout } from '../../slices/authSlice';
import HandleClickOutsideDropdown from "../ReusableComponents/HandleClickOutsideDropdown";



const Burger = () => {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLDivElement>(null)
  const ref = useRef(null);
  HandleClickOutsideDropdown(ref, () => setOpen(false));
  const handleDropDownFocus = (state: boolean): void => {
    setOpen(!state);
  };

  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();

  // const [logoutApiCall] = useLogoutMutation();


  // const logoutHandler = async () => {
  //   try {
  //     await logoutApiCall().unwrap();
  //     dispatch(logout());
  //     navigate('/login');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <>
    <div ref={burgerRef} className="z-50 -mr-2 flex md:hidden">

        <button onClick={(e) => handleDropDownFocus(open)}
        type="button"
           className="flex text-dark-light pr-5"
        ref={burgerRef}
      >
        <span className="sr-only">Open Main Menu</span>
        <Hamburger toggled={open} toggle={setOpen} />
      </button>

    </div>
        {/* mobile-menu */ }
  {
    open ? (

      <div className="flex flex-row md:hidden">
            <div ref={ref} className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navlinks.map((link, index) => (
            <a
              key={index}
              className="flex text-dark-light hover:bg-dark-soft"
              href={link.link}
            >
              {link.title}
            </a>
          ))}
          <button
            // onClick={logoutHandler}
            type="button"
            className="text-dark-light"
          >
            Logout
          </button>
        </div>
      </div>
    ) : null
  }
</>
  );
}

export default Burger
