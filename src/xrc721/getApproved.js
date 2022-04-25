import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// The approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.
// This function required arguments.
// token address, tokenId.
const GetApproved = (url,token_address,tokenId) => {
   // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let approved = contract.getApproved(tokenId).then(result => { return result })
    return approved;
}
export default GetApproved;