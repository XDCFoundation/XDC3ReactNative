import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';
import {url , ERC721 , ERC20} from '../../env'

// const TotalSupply = (url,token_address) => {
const TotalSupply = () => {

    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let signer = httpProvider.getSigner()
    // let contract = new ethers.Contract(ERC721 , xrc721_abi, signer);
    // let contract = new ethers.Contract(ERC20 , xrc721_abi, signer);
    let contract = new ethers.Contract(ERC721 , xrc721_abi, httpProvider);

    
    // let totalsupply = contract.totalSupply().
    //     then(result => { console.log('total supply ',result.toString()) })
    //     .catch((err) => console.log('Error is', err))

    let totalsupply = contract.ownerOf(ERC721).then((res) => { return res.toString() })
                .catch((err) => console.log('error is ',err))

    // let totalsupply = contract.tokenURI(1).
    //     then(result => { return result.toString() })
    //     .catch((err) => console.log('Error is', err))

    return totalsupply;
}
export default TotalSupply;