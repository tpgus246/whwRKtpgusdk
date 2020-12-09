import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AuthAPI from '../backend/AuthAPI';
import { userInfo } from '../stores/user';

const Core = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      try {
        const data = (await AuthAPI.getUserInfo()).data();
        dispatch(userInfo(data));
      } catch (e) {
        console.log(e);
      }
      
    }
    getUser();
  }, []);

  return null;
}

export default Core;