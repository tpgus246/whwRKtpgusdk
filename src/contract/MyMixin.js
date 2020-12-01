import Web3 from 'web3'
import Config from './config'

const Web3APIs = {
  created: async () => {
    const web3js = window.web3;
    if(typeof web3js !== 'undefined') {
      const data = new Web3(web3js.currentProvider);
      return data;
    }
    return null;
  },
  getDefaultAccount: () => {
    return new Promise((resolve, reject) => {
      window.web3.eth.getAccounts((err, data) => {
         if(!err) resolve(data[0]);
         reject(err);
      });
   });
  },
}

export const web3Data = {
  web3: Web3APIs.created(),
  accounts: Web3APIs.getDefaultAccount(),
}

export const AuctionAPIs = {
  getAuctions: async () => {
    const auction = window.web3.eth.contract(Config.AUCTIONS_ABI).at(Config.AUCTIONS_CA);
    const me = window.web3.eth.contract(Config.MYNFT_ABI, Config.MYNFT_CA);
    await window.web3.eth.getBalance(Config.MYNFT_CA, (err, res) => {
      const d = window.web3.fromWei(res, 'ether');
      console.log(d);
    })
    auction.getCount({}, (err, res) => {
      const cnt = res;
      console.log(cnt);
    })
  }
}

