import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const Name = (url,token_address) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);
    let Name = contract.name().then(result => { return result.toString() })
       
    return Name;
}
export default Name;