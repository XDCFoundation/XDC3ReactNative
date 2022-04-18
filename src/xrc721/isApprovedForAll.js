import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const ApprovalAll = (url,token_address,owneraddress,receiverAddress) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    // const signer = httpProvider.getSigner();

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let approved = contract.isApprovedForAll(owneraddress,receiverAddress).then(result => { return result })
    return approved;
}
export default ApprovalAll;