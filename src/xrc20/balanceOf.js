import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20 } from '../../env';

const BalanceOf = () => {
    const address = '0x8eE46e46D22ecfA19Ed68C024C5672af4a1AA0d7'

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(ERC20, xrc20_abi, httpProvider);

    let Balance = contract.balanceOf(address).then(result => { return result.toString() })
        .catch((err) => console.log('Error is', err))

    return Balance;
}
export default BalanceOf;