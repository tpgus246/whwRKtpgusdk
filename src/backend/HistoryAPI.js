import web3Core from '../components/Web3Core';
import firebase from './config';

const buyConduct = async ({
  conductUid,
  sellCA,
  buyCA,
  privateKey
}) => {
  const web3 = web3Core.getInstance();
  web3.eth.personal.unlockAccount(buyCA, privateKey);
  const conduct = await firebase.firestore().collection('conducts').doc(conductUid).get();
  const we2 = await web3.utils.toWei((conduct.data().price).toString());
  try {
    await web3.eth.sendTransaction({
      from: buyCA,
      to: sellCA,
      value: we2,
    });
  } catch(e) {
    throw Error(e);
  }
  const uid = Math.random() * 300000;
  const data = {
    uid,
    price: conduct.data().price,
    sellCA,
    buyCA,
    conductUid,
    now: firebase.firestore.Timestamp.now()
  }
  await firebase.firestore().collection('history').doc(`${uid}`).set(data);
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  buyConduct,
}