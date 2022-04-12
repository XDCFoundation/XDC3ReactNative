import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const TotalSupply = (url,token_address) => {

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);
    let totalsupply = contract.totalSupply().
        then(result => { return result.toString() })
        .catch((err) => console.log('Error is', err))

    return totalsupply;
}
export default TotalSupply;