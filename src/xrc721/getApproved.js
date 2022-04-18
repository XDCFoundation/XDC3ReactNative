import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const GetApproved = (url,token_address,tokenId) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    // const signer = httpProvider.getSigner();

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let approved = contract.getApproved(tokenId).then(result => { return result })
    return approved;
}
export default GetApproved;