import firebase from './config';
import web3Core from '../components/Web3Core';

const getAllConduct = async (conductCategory) => {
  const data = await firebase.firestore().collection('conducts').where('conductCategory', '==', conductCategory).get();
  return await Promise.all(
    data.docs.map(async (elem) => ({
      image: await firebase.storage().refFromURL(elem.data().image).getDownloadURL(),
      title: elem.data().title,
      content: elem.data().content,
      price: elem.data().price,
      sellCA: elem.data().sellCA,
      uuid: elem.data().uuid
    }))
  );
};

const getItem = async (uid) => {
  return await firebase.firestore().collection('conducts').doc(uid).get();
};

const getItemImage = async (uid) => {
  const data = (await firebase.firestore().collection('conducts').doc(uid).get()).data();
  return await firebase.storage().refFromURL(data.image).getDownloadURL();
}

const getAllSellConduct = async (ca) => {
  const data = await firebase.firestore().collection('history').where('sellCA', '==', ca).get();
  return data;
};

const getAllBuyConduct = async (ca) => {
  const data = await firebase.firestore().collection('history').where('buyCA', '==', ca).get();
  return data;
};

const getGasPrice = async () => {
  const gasPrice = await web3Core.getInstance().eth.getGasPrice();
  return await web3Core.getInstance().utils.fromWei(gasPrice);
}

const getEther = async (ca) => {
  const ether = await web3Core.getInstance().eth.getBalance(ca);
  return await web3Core.getInstance().utils.fromWei(ether);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllConduct,
  getItem,
  getItemImage,
  getAllSellConduct,
  getAllBuyConduct,
  getGasPrice,
  getEther
}