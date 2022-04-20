import { Contract, ethers, Signer } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const _TransferFrom = (url,token_address,privateKey,receiverAddress,spenderAddress,tokenId) => {
    transferfrom = async () => {
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(spenderAddress);
        let gas_limit = "0x100000"
        let wallet = new ethers.Wallet(privateKey, httpProvider);
        let contract = new Contract(token_address, xrc721_abi, wallet);
        let newmethod = await contract.populateTransaction.transferFrom(spenderAddress,receiverAddress, tokenId);
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, privateKey);
        let transfer_from = await httpProvider.sendTransaction(signedTxn);
        return transfer_from;
    }
    let token =  transferfrom().then((res)=>{return res})
    return token;
}
export default _TransferFrom;
