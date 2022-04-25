import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const _TotalSupply = (url,token_address) => {

    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);
    let totalsupply = contract.totalSupply().then(result => { return result.toString()});
       
    return totalsupply;
}
export default _TotalSupply;