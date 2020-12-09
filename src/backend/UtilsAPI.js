import firebase from './config';

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

const getAllSellConduct = async (ca) => {
  return await firebase.firestore().collection('history').where('sellCA', '==', ca).get();
};

const getAllBuyConduct = async (ca) => {
  return await firebase.firestore().collection('history').where('buyCA', '==', ca).get();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllConduct,
  getItem,
  getAllSellConduct,
  getAllBuyConduct
}