import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// Enumerate NFTs assigned to an owner.
// tokenAddress An address for whom to query.
// IndexNO A counter less than `totalSupply()`.
// The token identifier for the `index`th NFT assigned to `owner`.
const TokenByIndex = (url, token_address, tokenIndex) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let tokenbyindex = contract.tokenByIndex(tokenIndex).then(result => { return result.toString() })
    return tokenbyindex;
}
export default TokenByIndex;