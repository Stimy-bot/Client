import React from 'react';
// import { useMutation } from '@tanstack/react-query';

const Menu: React.FC = () => {
  //   const { mutate: signOut } = useMutation({
  //   mutationFn: logout,
  //   onSettled: () => {
  //     queryClient.clear();
  //     navigate('/login', { replace: true });
  //   },
  // });
  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <ul className="space-y-2">
        <li
          className="p-2 bg-white rounded-md shadow-sm"
          // onClick={() => navigate('/')}
        >
          Home
        </li>
        <li
          className="p-2 bg-white rounded-md shadow-sm"
          // onClick={() => navigate('/profile')}
        >
          Profile
        </li>
        <li
          className="p-2 bg-white rounded-md shadow-sm"
          // onClick={() => navigate('/settings')}
        >
          Settings
        </li>
        <li className="p-2 bg-white rounded-md shadow-sm"
        // onClick={signOut}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Menu;
