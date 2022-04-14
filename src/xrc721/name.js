import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const Name = (url,token_address) => {
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);
    let contract = new ethers.Contract(token_address, xrc721_abi, httpProvider);
    console.log('Contact is',contract);
    let Name = contract.name().then(result => { 
        console.log('Result is',result.toString());
        return result.toString() 
    })
        .catch((err) => console.log('Error is', err));

    console.log('name sis',Name);

    return Name;
}
export default Name;