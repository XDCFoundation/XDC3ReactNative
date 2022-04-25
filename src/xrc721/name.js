import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// Gets the Name of the specified address.
const _Name = (url,token_address) => {

    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address , xrc721_abi, httpProvider);
    let name = contract.name().then((res) => { return res.toString() })

    return name;
}
export default _Name ;
