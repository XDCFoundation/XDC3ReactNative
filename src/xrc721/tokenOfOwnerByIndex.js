import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const TokenByOwnerIndex = (url,token_address,owneraddress) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    // const signer = httpProvider.getSigner();

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let tokenbyownerindex = contract.tokenOfOwnerByIndex(owneraddress,0).then(result => { return result })
    return tokenbyownerindex;
}
export default TokenByOwnerIndex;