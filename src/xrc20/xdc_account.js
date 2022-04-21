// import { Random } from 'expo-random';
// import { randomBytes } from 'crypto';

import { ethers } from 'ethers';

const _createAccount = () => {
    // let mnemonic = "indoor dish desk flag debris potato excuse depart ticket judge file exit"
    // // let httpProvider = new ethers.providers.WebSocketProvider(url);
    // // console.log('httpProvider',httpProvider);
    // let wallet = ethers.Wallet.fromMnemonic(mnemonic);
   
    var randomBytes = ethers.utils.randomBytes(32);
     console.log('bytesbytes', randomBytes);
    let language = ethers.wordlists.en;
    console.log('languagelanguage', language);
    let randomMnemonic = ethers.utils.entropyToMnemonic(randomBytes,language)
    console.log('walletwallet', randomMnemonic);
}
export default _createAccount;