// import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { images } from '@/constants';
import { logout } from "@/lib/api";

const UserMenu = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signOut } = useMutation({
    mutationFn: logout,
    onSettled: () => {
      queryClient.clear();
      navigate("/login", { replace: true });
    },
  });

  return (
    <Menu isLazy placement="right-start">
      <MenuButton position="absolute" left="1.5rem" bottom="1.5rem">
        <Link to="/">
          <img className="w-16" src={images.profile} alt="logo" />
        </Link>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate('/')}>Profile</MenuItem>
        <MenuItem onClick={() => navigate('/about')}>About</MenuItem>
        <MenuItem onClick={() => navigate('/contact')}>Contact</MenuItem>
        <MenuItem onClick={() => navigate('/projects')}>Projects</MenuItem>
        <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem>
        <MenuItem onClick={() => navigate('/settings')}>Settings</MenuItem>
        <MenuItem onClick={signOut}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
