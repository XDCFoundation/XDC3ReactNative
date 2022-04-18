import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';
// import {url , ERC721 , ERC20} from '../../env'

const _Symbol = (url,token_address) => {

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address , xrc721_abi, httpProvider);
    let symbol = contract.symbol().then((res) => { return res.toString() })

    return symbol;
}
export default _Symbol ;