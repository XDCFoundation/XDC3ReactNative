import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';
// import {url , ERC721 , ERC20} from '../../env'

const _Name = (url,token_address) => {

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    // let contract = new ethers.Contract(ERC721 , xrc721_abi, httpProvider);
    let contract = new ethers.Contract(token_address , xrc721_abi, httpProvider);
    let name = contract.name().then((res) => { return res.toString() })
            .catch((err) => console.log('error is ',err))

    return name;
}
export default _Name ;