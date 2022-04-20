import {encryptPrivateKey} from 'hdwallet';

const _createAccount = (url) => {
    // let httpProvider = new ethers.providers.WebSocketProvider(url);
    // console.log('httpProvider1',httpProvider);
    let wallet = ethers.Wallet.createRandom()

    // let wallet = ethers.Wallet;
    console.log('Wallet is',wallet)
}
export default _createAccount;