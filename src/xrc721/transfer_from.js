import { Contract, ethers, Signer } from 'ethers';
import xrc721_abi from '../common/xrc20_abi.json';

const _TransferFromAmount = async (url,token_address,privateKey,receiverAddress,owneraddress,value) => {

        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let wallet = new ethers.Wallet(privateKey, httpProvider);
        let contract = new Contract(token_address, xrc721_abi, wallet);
        let transfer = contract.callStatic.transferFrom(owneraddress,receiverAddress,value).then((res) => {return res})
                        .catch((err) => console.log('error is ',err))

        return transfer;
}
export default _TransferFromAmount;
