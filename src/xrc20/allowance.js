import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20 ,owneraddress,receiverAddress} from '../../env';

const Allowance = () => {
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(ERC20, xrc20_abi, httpProvider);

    let allowance = contract.allowance(owneraddress, receiverAddress).then(result => { return result.toString()})
        .catch((err) => console.log('Error is', err));

    return allowance;
}
export default Allowance;