import { Contract, ethers, Signer } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const transferFromAmount = (url,token_address,spendarprivateKey,receiverAddress,spenderAddr,value) => {
    transferfrom = async () => {
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(spenderAddr);
        let gas_limit = "0x100000"
        let wallet = new ethers.Wallet(spendarprivateKey, httpProvider);
        let contract = new Contract(token_address, xrc20_abi, wallet);
        const amount = BigInt(value);
        let newmethod = await contract.populateTransaction.transferFrom(spenderAddr,receiverAddress, amount);
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, spendarprivateKey);
        let transfer_from = await httpProvider.sendTransaction(signedTxn);
        return transfer_from;
    }
    let token =  transferfrom().then((res)=>{return res})
    return token;
}
export default transferFromAmount;
