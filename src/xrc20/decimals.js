import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// Gets the Decimal of the specified address.
// Token address is required as argument.

const Decimals = (url, token_address) => {

    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);

    let Decimal = contract.decimals().then(result => { return result })

    return Decimal;
}
export default Decimals;