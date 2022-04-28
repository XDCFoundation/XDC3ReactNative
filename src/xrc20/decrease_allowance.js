import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// decrease the amount of tokens that an owner allowed to a spender.
// This function required arguments.
// owner address, ownerPrivateKey, spender address, token address, amount.

const DecreaseAllowance = (url, token_address, privateKey, spenderAddr, owneraddress, value) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    storeTemp = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet(privateKey);
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let contract = new ethers.Contract(token_address, xrc20_abi, signer);

        let allowance = await contract.allowance(owneraddress, spenderAddr);
        let amount = parseInt(allowance) - parseInt(value);

        if (allowance >= value) {
            amount = parseInt(allowance) - parseInt(value);
        }
        else {
            amount = parseInt(value) - parseInt(allowance);
        }
        let newmethod = await contract.populateTransaction.approve(spenderAddr, amount);
        let estimatevalue = await httpProvider.estimateGas({
            from: owneraddress,
        });

        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: estimatevalue,
            nonce: transactionCount,
        };

        let signedTxn = await signer.signTransaction(txn, privateKey);
        let approve = await httpProvider.sendTransaction(signedTxn);
        return approve
    }
    let decreaseapprove = storeTemp().then((res) => { return res })
    return decreaseapprove;
}
export default DecreaseAllowance;