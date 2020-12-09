import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AuthAPI from '../backend/AuthAPI';
import { userInfo } from '../stores/user';

const Core = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const data = (await AuthAPI.getUserInfo()).data();
      dispatch(userInfo(data));
    }
    getUser();
  }, []);

  return null;
}

export default Core;