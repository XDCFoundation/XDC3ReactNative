import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const Allowance = (url,token_address,owneraddress,receiverAddress) => {
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);

    let allowance = contract.allowance(owneraddress, receiverAddress).then(result => { return result.toString()})

    return allowance;
}
export default Allowance;