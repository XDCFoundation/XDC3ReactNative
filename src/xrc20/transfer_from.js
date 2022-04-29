import { Contract, ethers, Signer } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// Transfer tokens from one address to another.
// This function requires following arguments.
// owner address, spenderPrivateKey, spender address, receiver address, token address, amount.

const transferFromAmount = (url, token_address, spendarprivateKey, receiverAddress, spenderAddr, owneraddress, value) => {
    transferfrom = async () => {
        // HTTPProvider:
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(spenderAddr);
        let wallet = new ethers.Wallet(spendarprivateKey, httpProvider);
        let contract = new Contract(token_address, xrc20_abi, wallet);
        const amount = ethers.utils.parseEther(value);
       
        let newmethod = await contract.populateTransaction.transferFrom(owneraddress, receiverAddress, amount);
        let estimatevalue = await httpProvider.estimateGas({
            from: spenderAddr
        });
        var estimate = estimatevalue.toString();
        if ((estimate.length) % 2 !== 0) {
            estimate = '0x0' + estimate;
        }
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: estimate,
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, spendarprivateKey);
        let transfer_from = await httpProvider.sendTransaction(signedTxn);
        return transfer_from;
    }
    let token = transferfrom().then((res) => { return res })
    return token;
}
export default transferFromAmount;
