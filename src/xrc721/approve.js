import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

const _Approve = (url,token_address,ownerPrivateKey,spenderAddress,owneraddress,tokenId) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    storeTemp = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet(ownerPrivateKey);
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let gas_limit = "0x100000"
       
        let contract = new ethers.Contract(token_address, xrc721_abi, signer);
        let newmethod = await contract.populateTransaction.approve(spenderAddress, tokenId);
        
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: transactionCount,      
        }
        let signedTxn = await signer.signTransaction(txn,ownerPrivateKey);  
        let approve = await httpProvider.sendTransaction(signedTxn);
        return approve
    }
   
    let approveMethod =   storeTemp().then((res)=>{return res})
    return approveMethod;
}
export default _Approve;