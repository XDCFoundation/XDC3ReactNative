import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20 } from '../../env';


const Name = () => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(ERC20, xrc20_abi, httpProvider);
    let Name = contract.name().then(result => { return result.toString() })
        .catch((err) => console.log('Error is', err));

    return Name;
}
export default Name;