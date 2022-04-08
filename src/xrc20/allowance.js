import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20 } from '../../env';

const Allowance = () => {
    const owneraddress = '0x8eE46e46D22ecfA19Ed68C024C5672af4a1AA0d7'
    const receiverAddress = '0xd19a435dfa78386e728e7444287f2f2d0b78d110'
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(ERC20, xrc20_abi, httpProvider);

    let allowance = contract.allowance(owneraddress, receiverAddress).then(result => { return result.toString()})
        .catch((err) => console.log('Error is', err));

    // let _allowance = allowance.hex/100000000000000000000
    return allowance;
}
export default Allowance;