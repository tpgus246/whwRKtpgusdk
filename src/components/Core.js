import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Web3 from 'web3';
import firebase from '../backend/config';
import { web3Data } from '../contract/MyMixin';
import { userInfo } from '../stores/user';

const Core = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async res => {
      if (!res) {
        history.push('/');
      }

      await web3Data.web3;
      dispatch(userInfo(res.uid));
    });
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return null;
}

export default Core;