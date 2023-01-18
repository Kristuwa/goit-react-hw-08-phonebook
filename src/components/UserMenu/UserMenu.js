import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, UserMenuTitle, Wrapper } from './UserMenu.styled';
import { FaUserMinus } from 'react-icons/fa';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () =>
    dispatch(logOut())
      .then(unwrapResult)
      .then(() => {
        toast.success(`You were logout successfully`);
      })
      .catch(() => {
        toast.error(`Something wrong, try again`);
      });

  return (
    <Wrapper>
      <UserMenuTitle>Welcome, {user.name} </UserMenuTitle>
      <Button type="button" onClick={handleLogOut}>
        Logout <FaUserMinus size={16} />
      </Button>
    </Wrapper>
  );
};
