import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const SupportInterface = (url,token_address,interfaceId) => {
   // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let support = contract.supportsInterface(interfaceId).then(result => { return result })
    return support;
}
export default SupportInterface;