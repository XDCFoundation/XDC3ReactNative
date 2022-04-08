import { Contract, ethers, Signer } from 'ethers';
import { parseEther, parseUnits } from 'ethers/lib/utils';
import { url, owneraddress, receiverAddress, privateKey, ERC20 } from '../../env';
import xrc20_abi from '../common/xrc20_abi.json';

const TransferToken = () => {
    transfertoken = async () => {
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(owneraddress);
        let gas_limit = "0x100000"
        let wallet = new ethers.Wallet(privateKey, httpProvider);
        let contract = new Contract(ERC20, xrc20_abi, wallet);
        let newmethod = await contract.populateTransaction.transfer(receiverAddress, BigInt(15));
        let txn = {
            to: ERC20,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, privateKey);
        let transfer_token = await httpProvider.sendTransaction(signedTxn);
        return transfer_token;
    }
    transfertoken();
}
export default TransferToken;