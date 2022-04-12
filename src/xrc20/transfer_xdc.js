import { ethers } from 'ethers';

const TransferXdc = (url,privateKey,owneraddress,receiverAddress,send_token_amount) => {

    // Set Provider

    transferxdc = async () => {
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let wallet = new ethers.Wallet(privateKey);
        let walletSigner = wallet.connect(httpProvider);
        let gasPrice = await httpProvider.getGasPrice();
        let gas_limit = "0x100000"
        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let txn = {
            to: receiverAddress,
            value: ethers.utils.parseEther(send_token_amount),
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: transactionCount,      
        }
        let signedTxn = await walletSigner.signTransaction(txn,privateKey);        
        let transfer_xdc = await httpProvider.sendTransaction(signedTxn);
        return transfer_xdc;
    }
    // transferxdc();
    let TransferXDC = transferxdc().then((res)=>{return res}).catch((err) => console.log('Err',err))
    return TransferXDC;
}
export default TransferXdc;