import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const _BalanceOf = (url,token_address,owneraddress) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let Balance = contract.balanceOf(owneraddress).then(result => { return result.toString() })
    return Balance;
}
export default _BalanceOf;