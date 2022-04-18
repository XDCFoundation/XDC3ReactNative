import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const TokenByIndex = (url,token_address,tokenIndex) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let tokenbyindex = contract.tokenByIndex(tokenIndex).then(result => { return result.toString() })
    return tokenbyindex;
}
export default TokenByIndex;