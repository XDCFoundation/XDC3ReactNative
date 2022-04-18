import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const SupportInterface = (url,token_address) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    // const signer = httpProvider.getSigner();

    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);

    let support = contract.supportInterface("0x80ac58cd").then(result => { return result })
    return support;
}
export default SupportInterface;