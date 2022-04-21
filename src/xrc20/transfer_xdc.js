import { ethers } from 'ethers';

const TransferXdc = (url,ownerprivateKey,owneraddress,receiverAddress,send_token_amount) => {

    // Set Provider

    transferxdc = async () => {
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let wallet = new ethers.Wallet(ownerprivateKey);
        let walletSigner = wallet.connect(httpProvider);
        let gasPrice = await httpProvider.getGasPrice();
        let gas_limit = "0x100000"
        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        const amount = BigInt(send_token_amount);
        let txn = {
            to: receiverAddress,
            value: amount,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: transactionCount,      
        }
        console.log('Valuee is',txn);
        let signedTxn = await walletSigner.signTransaction(txn,ownerprivateKey);        
        let transfer_xdc = await httpProvider.sendTransaction(signedTxn);
        return transfer_xdc;
    }
    // transferxdc();
    let TransferXDC = transferxdc().then((res)=>{return res})
    return TransferXDC;
}
export default TransferXdc;