const MyNFT = require('./MyNFT.json')
const Auctions = require('./Auctions.json')
console.log(MyNFT);
export default {
  MYNFT_CA: '0x6f2245BdD395cAEEE26f69A70375Dd0ed5910470',
  AUCTIONS_CA: '0x69c22ec5212d7fffd9940ddcf322fbe0ba6a74e8',
  MYNFT_ABI: MyNFT.abi,
  AUCTIONS_ABI: Auctions.abi,
  GAS_AMOUNT: 500000
}