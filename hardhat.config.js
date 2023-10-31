/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
const sepolia_pvt_key = "3372499f19d06480faf804006c98b507ce7b86bf39dd199ead9859695d89d591";
const alchemy_api_key = "vzjc2w_ZRNcN-BPNY6KwFuCMZ3Rykbwt";

module.exports = {
   solidity: "0.8.9",
   
   networks: {
      sepolia: {
         url: `https://eth-sepolia.g.alchemy.com/v2/${alchemy_api_key}`,
         accounts: [sepolia_pvt_key]
      }
   },
}