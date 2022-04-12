import { Contract, ethers, Signer } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const TransferToken = (url,token_address,privateKey,receiverAddress,owneraddress,amount) => {
    transfertoken = async () => {
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(owneraddress);
        let gas_limit = "0x100000"
        let wallet = new ethers.Wallet(privateKey, httpProvider);
        let contract = new Contract(token_address, xrc20_abi, wallet);
        let newmethod = await contract.populateTransaction.transfer(receiverAddress, amount);
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, privateKey);
        let transfer_token = await httpProvider.sendTransaction(signedTxn);
        return transfer_token;
    }
    let token =  transfertoken().then((res)=>{return res}).catch((err) => console.log('Err',err))
    return token;
}
export default TransferToken;