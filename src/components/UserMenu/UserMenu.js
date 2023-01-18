import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Button, UserMenuTitle, Wrapper } from './UserMenu.styled';
import { FaUserCheck, FaUserMinus } from 'react-icons/fa';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () =>
    dispatch(logOut())
      .then(unwrapResult)
      .then(() => {
        toast.success(`You were logout successfully`);
      })
      .catch(e => {
        toast.error(`Something wrong: ${e.message}`);
      });

  return (
    <Wrapper>
      <UserMenuTitle>
        Welcome, {user.name} <FaUserCheck size={16} />
      </UserMenuTitle>
      <Button type="button" onClick={handleLogOut}>
        Logout <FaUserMinus size={16} />
      </Button>
    </Wrapper>
  );
};
