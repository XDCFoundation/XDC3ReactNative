import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const TokenByIndex = (url,token_address,token_index) => {

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    // let contract = new ethers.Contract(ERC721 , xrc721_abi, httpProvider);
    let contract = new ethers.Contract(token_address , xrc721_abi, httpProvider);
    // let tokenByIndex = contract.tokenByIndex(token_index).then((res) => { return res.toString() })
    //         .catch((err) => console.log('error is ',err))

    let tokenByIndex = contract.balanceOf(token_index).then((res) => { return res.toString() })
            .catch((err) => console.log('error is ',err))

    return tokenByIndex;
}
export default TokenByIndex ;
