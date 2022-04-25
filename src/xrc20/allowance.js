import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// This method returns how much allowance spender have from owner.
// This function required three arguments.
// owner address, spender address, token address.

const Allowance = (url, token_address, owneraddress, spenderAddr) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);

    let allowance = contract.allowance(owneraddress, spenderAddr).then(result => { return result.toString() })

    return allowance;
}
export default Allowance;