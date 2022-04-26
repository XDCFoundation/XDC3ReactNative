import { Contract, ethers, Signer } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

// Transfers the ownership of an NFT from one address to another address.
// required arguments.
// token address, owner address, spender address, spenderPrivateKey, receiver address, tokenId. 

const _safeTransferFrom = (url,token_address,spendarprivateKey,receiverAddress,spenderAddress,owneraddress,tokenId) => {
    safetransfer = async () => {
        // HTTPProvider:
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(spenderAddress);
        let wallet = new ethers.Wallet(spendarprivateKey, httpProvider);
        let contract = new Contract(token_address, xrc721_abi, wallet);
        let newmethod = await contract.populateTransaction.safeTransferFrom(owneraddress,receiverAddress, tokenId);
       
        let gas_limit = "0x100000"

        let txn = {
            to: token_address,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: nonce,
        }
        let signedTxn = await wallet.signTransaction(txn, spendarprivateKey);
        let transfer_from = await httpProvider.sendTransaction(signedTxn);
        return transfer_from;
    }
    let token =  safetransferfrom().then((res)=>{return res})
    return token;
}
export default _safeTransferFrom;
