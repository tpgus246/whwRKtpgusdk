import web3 from 'web3';

const web3Core = (() => {
  let instance;

  function createInstance() {
    return new web3('ws://localhost:7545');
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  }
})();

export default web3Core;