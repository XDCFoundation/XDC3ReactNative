import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// Enumerate NFTs assigned to an owner.
// The token identifier for the `index`th NFT assigned to `owner`.
// required arguments.
// owner address, token address, token index.
const TokenByOwnerIndex = (url,token_address,owneraddress,tokenIndex) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let tokenbyownerindex = contract.tokenOfOwnerByIndex(owneraddress,tokenIndex).then(result => { return result.toString() })
    return tokenbyownerindex;
}
export default TokenByOwnerIndex;