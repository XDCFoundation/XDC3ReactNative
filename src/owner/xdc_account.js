import "@ethersproject/shims"

import { ethers } from 'ethers';

const _createAccount = () => {

    // For Creating random Wallet.
    const wallet = ethers.Wallet.createRandom();

    return wallet.privateKey;
}
export default _createAccount;