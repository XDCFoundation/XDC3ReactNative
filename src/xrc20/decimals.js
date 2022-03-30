import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20 } from '../../env';

const Decimals = () => {

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(ERC20, xrc20_abi, httpProvider);

    let Decimal = contract.decimals().then(result => { return result })
        .catch((err) => console.log('Error is', err))

    return Decimal;
}
export default Decimals;