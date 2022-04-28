import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// Gets method returns total supply of token.
// Token address is required as argument.
const TotalSupply = (url, token_address) => {

    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url)
    let contract = new ethers.Contract(token_address, xrc20_abi, httpProvider);

    let totalsupply = contract.totalSupply().
        then(result => {
            var newvalue = ethers.utils.formatEther(result.toString());
            return newvalue
        })

    return totalsupply;
}
export default TotalSupply;