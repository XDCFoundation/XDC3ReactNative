import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// Gets the balance of the specified address.
// token address, owner address are required as arguments.
const BalanceOf = (url, token_address, owneraddress) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);

    let Balance = contract.balanceOf(owneraddress).then(result => { return result.toString() })
    return Balance;
}
export default BalanceOf;