import 'react-native-get-random-values';

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';
import { ethers } from 'ethers';

const _createAccount = () => {
    // let mnemonic = "announce room limb pattern dry unit scale effort hard jazz weasel alcohol"
    // let httpProvider = new ethers.providers.WebSocketProvider(url);
    // console.log('httpProvider',httpProvider);
    let wallet = ethers.Wallet.createRandom();
     console.log('walletwallet',wallet);
}
export default _createAccount;