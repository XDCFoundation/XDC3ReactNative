import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const OwnerOf = (url,token_address,tokenId) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let ownerof = contract.ownerOf(tokenId).then(result => { return result })
    return ownerof;
}
export default OwnerOf;