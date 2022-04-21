import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

const DecreaseAllowance = (url,token_address, privateKey, receiverAddress, owneraddress,value) => {
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    storeTemp = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet(privateKey);
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let contract = new ethers.Contract(token_address, xrc20_abi, signer);

        let allowance = await contract.allowance(owneraddress, receiverAddress);
        let amount = parseInt(allowance) - parseInt(value);
        let newmethod = await contract.populateTransaction.approve(receiverAddress, amount);
        let gas_limit = "0x100000"
        
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: transactionCount,
        };
        let signedTxn = await signer.signTransaction(txn, privateKey);
        let approve = await httpProvider.sendTransaction(signedTxn);
        return approve
    }
    let decreaseapprove =   storeTemp().then((res)=>{return res})
    return decreaseapprove;
}
export default DecreaseAllowance;