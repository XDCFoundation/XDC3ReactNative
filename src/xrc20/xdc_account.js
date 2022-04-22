// import { Random } from 'expo-random';
// import { randomBytes } from 'crypto';

import { ethers } from 'ethers';

const _createAccount = (url) => {
    // let mnemonic = "indoor dish desk flag debris potato excuse depart ticket judge file exit"
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    console.log('httpProvider',httpProvider);
    const wallet = ethers.Wallet.createRandom({ provider: httpProvider });

    // const randNum = Math.random() * 100000;
    // const randomBytes = ethers.utils.parseUnits(randNum.toString(), 18);
    // var randomBytes = ethers.utils.randomBytes(32);
    
    // console.log('bytesbytes',randomBytes);
    // let language = ethers.wordlists.en;
    // console.log('languagelanguage', language);
    // let randomMnemonic = ethers.utils.entropyToMnemonic(randomBytes, language)
    // let wallet = ethers.Wallet.fromMnemonic(randomMnemonic);
    console.log('walletwallet', wallet);
}
export default _createAccount;