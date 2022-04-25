import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

//  Tells whether an operator is approved by a given owner.
//  This function required arguments.
//  owner address, spender address, token address.
const ApprovalAll = (url,token_address,owneraddress,receiverAddress) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let approved = contract.isApprovedForAll(owneraddress,receiverAddress).then(result => { return result })
    return approved;
}
export default ApprovalAll;