import { Contract, ethers, Signer } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// Transfer token for a specified address.
// This function requires following arguments.
// ownerAddress, ownerPrivateKey, receiver address, token address, amount.

const TransferToken = (url, token_address, ownerprivateKey, receiverAddress, owneraddress, value) => {
    transfertoken = async () => {
        // HTTPProvider:
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(owneraddress);
        let wallet = new ethers.Wallet(ownerprivateKey, httpProvider);
        let contract = new Contract(token_address, xrc20_abi, wallet);
        const amount = ethers.utils.parseEther(value);
        let newmethod = await contract.populateTransaction.transfer(receiverAddress, amount);
        let estimatevalue = await httpProvider.estimateGas({
            from: owneraddress
        })
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: estimatevalue,
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, ownerprivateKey);
        let transfer_token = await httpProvider.sendTransaction(signedTxn);

        return transfer_token;
    }
    let token = transfertoken().then((res) => { return res })
    return token;
}
export default TransferToken;