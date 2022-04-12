import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const Symbol = (url,token_address) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);

    let Symbol = contract.symbol().then(result => {return result})
    
    return Symbol;
}
export default Symbol;