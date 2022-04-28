import { ethers } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// Enable or disable approval for a third party ("operator") to manage all of `Owner`'s assets
// Emits the ApprovalForAll event. The contract MUST allow multiple operators per owner.
// required arguments.
// token address, owner address, ownerPrivateKey, sepnder address, tokenId.

const setApprovalAll = (url,token_address,ownerPrivateKey,spenderAddress,owneraddress,booleanValue) => {
    // HTTPProvider:
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    setApproval = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet(ownerPrivateKey);
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let estimatevalue = await httpProvider.estimateGas({
            from: owneraddress
        });
       
        let contract = new ethers.Contract(token_address, xrc721_abi, signer);
        let newmethod = await contract.populateTransaction.setApprovalForAll(spenderAddress, booleanValue);
        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: estimatevalue,
            nonce: transactionCount,      
        }
        let signedTxn = await signer.signTransaction(txn,ownerPrivateKey);  
        let setapprove = await httpProvider.sendTransaction(signedTxn);
        return setapprove
    }
   
    let setapproveMethod =   setApproval().then((res)=>{return res})
    return setapproveMethod;
}
export default setApprovalAll;