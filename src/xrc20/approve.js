import { BigNumber, ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20, privateKey,receiverAddress,owneraddress} from '../../env';

const Approve = () => {
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    storeTemp = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet(privateKey);
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        let gas_limit = "0x100000"
       
        let contract = new ethers.Contract(ERC20, xrc20_abi, signer);
        let newmethod = await contract.populateTransaction.approve(receiverAddress, "20");

        let txn = {
            to: ERC20,//Token Address
            data: newmethod.data,
            gasPrice: gasPrice,
            gasLimit: ethers.utils.hexlify(gas_limit),
            nonce: transactionCount,      
        }
        let signedTxn = await signer.signTransaction(txn,privateKey);  
        let approve = await httpProvider.sendTransaction(signedTxn);

        return approve
    }
    storeTemp();
    // let Approvefunc = storeTemp().then((res)=>{return res}).catch((err) => console.log('Err',err));
    // console.log('Approvefunc',Approvefunc);
    // return Approvefunc;
}
export default Approve;