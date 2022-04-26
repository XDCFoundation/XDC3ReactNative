import { Contract, ethers, Signer } from 'ethers';
import xrc721_abi from '../common/xrc721_abi.json';

//  Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE
//  to confirm that `reciever Address` is capable of receiving NFTs or else they may be permanently lost.
//  required arguments.
//  token address, owner address, spender address, spenderPrivateKey, receiver address, tokenId.


const _TransferFrom = (url,token_address,spendarprivateKey,receiverAddress,spenderAddress,owneraddress,tokenId) => {
    transferfrom = async () => {
        // HTTPProvider:
        let httpProvider = new ethers.providers.WebSocketProvider(url);
        let gasPrice = await httpProvider.getGasPrice();
        let nonce = await httpProvider.getTransactionCount(spenderAddress);
        let wallet = new ethers.Wallet(spendarprivateKey, httpProvider);
        let contract = new Contract(token_address, xrc721_abi, wallet);
        let newmethod = await contract.populateTransaction.transferFrom(owneraddress,receiverAddress, tokenId);
       
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
    let token =  transferfrom().then((res)=>{return res})
    return token;
}
export default _TransferFrom;
