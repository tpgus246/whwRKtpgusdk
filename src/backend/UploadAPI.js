import firebase from './config';

const uploadImageWithInfo = async ({
  image,
  userUid,
  price,
  sellCA,
  title,
  content,
  conductCategory
}) => {
  const uuid = Math.random() * 300000;
  await firebase.storage().ref(`/${userUid}/${uuid}`).put(image);
  const data = {
    image: `gs://sehyeon-aa902.appspot.com/${userUid}/${uuid}`,
    userUid,
    price,
    sellCA,
    title,
    content,
    uuid,
    conductCategory
  }
  await firebase.firestore().collection('conducts').doc(`${uuid}`).set(data);
  return uuid;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  uploadImageWithInfo,
}