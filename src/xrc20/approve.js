import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';

// Approve the passed address to spend the specified amount of tokens on behalf of owner.
// This function required arguments.
// ownerAddress, ownerPrivateKey, spenderAddress, tokenAddr, amount.

const Approve = (url, token_address, ownerPrivateKey, spenderAddress, owneraddress, amount) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    storeTemp = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet(ownerPrivateKey);
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let gas_limit = "0x100000"

        let contract = new ethers.Contract(token_address, xrc20_abi, signer);
        let newmethod = await contract.populateTransaction.approve(spenderAddress, amount);

        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: transactionCount,
        }

        let signedTxn = await signer.signTransaction(txn, ownerPrivateKey);
        let approve = await httpProvider.sendTransaction(signedTxn);
        return approve
    }

    let approveMethod = storeTemp().then((res) => { return res })
    return approveMethod;
}
export default Approve;