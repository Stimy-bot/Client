import { useState, useRef } from 'react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Link, useNavigate } from 'react-router-dom';
// import { useAppSelector, useAppDispatch } from '../../hooks/redux'
// import { useLogoutMutation } from '../../slices/usersApiSlice'
// import { logout } from '../../slices/authSlice'
import { images } from '../../constants';
import HandleClickOutsideDropdown from '../ReusableComponents/HandleClickOutsideDropdown';
import { navlinks } from './NavLinks';
import Burger from './Burger';
import { DarkmodeSwitch } from '../../utils/DarkmodeSwitch';
// eslint-disable-next-line import/extensions
import { logout } from '@/lib/api';
// import type  RootState  from "../../store";

// interface RootState {
//   auth: {
//     userInfo: any | null;
//   };
// }

function Header() {
  // const { _id, createdAt, userAgent, isCurrent } = session;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      navigate('/login', { replace: true });
    },
  });

  // const userInfo = useAppSelector((state) => state.auth.userInfo);

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

  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  HandleClickOutsideDropdown(ref, () => setOpen(false));
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean): void => {
    setOpen(!state);
  };

  return (
    <nav className="absolute">
      <div className="navbar bg-dark-hard flex justify-between p-2">
        <Link to="/">
          <img className="w-16" src={images.Logo} alt="logo" />
        </Link>
        {/* navlinks */}

        <div className="z-50 relative items-center hidden md:block text-dark-light">
          <div ref={dropdownRef} className="flex">
            <DarkmodeSwitch />
            {/* {isCurrent ? (
              <>
                <button
                  onClick={(e) => handleDropDownFocus(open)}
                  title={isCurrent}
                  id="name"
                  className="mr-20"
                >
                  {isCurrent}
                </button>

                {open && (
                  <ul
                    ref={ref}
                    className="absolute z-50 bg-dark-hard p-2 rounded-b-md px-4"
                  >
                    {navlinks.map((link, index) => (
                      <a
                        key={index}
                        className="flex text-dark-light hover:bg-dark-soft"
                        href={link.link}
                      >
                        {link.title}
                      </a>
                    ))}
                    <li>
                      <Link onClick={signOut} to="">
                        Logout
                      </Link>
                    </li>
                  </ul>
                )}
              </>
            ) : ( */}
            <div className="flex p-2 gap-4">
              <Link to="/login">
                <FaSignInAlt /> Sign In
              </Link>
              <Link to="/register">
                <FaSignOutAlt /> Sign Up
              </Link>
            </div>
            {/* // )} */}
          </div>
        </div>
        <Burger />
      </div>
    </nav>
  );
}

export default Header;
