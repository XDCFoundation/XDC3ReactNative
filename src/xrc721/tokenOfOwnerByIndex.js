import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const TokenByOwnerIndex = (url,token_address,owneraddress,tokenIndex) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let tokenbyownerindex = contract.tokenOfOwnerByIndex(owneraddress,tokenIndex).then(result => { return result.toString() })
    return tokenbyownerindex;
}
export default TokenByOwnerIndex;