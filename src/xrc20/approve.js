import { ethers } from 'ethers';
import xrc20_abi from '../common/xrc20_abi.json';
import { url, ERC20 } from '../../env';
// import { parseEther } from 'ethers/lib/utils';

const Approve = () => {
    const owneraddress = '0x8ee46e46d22ecfa19ed68c024c5672af4a1aa0d7'
    const receiverAddress = '0x8eE46e46D22ecfA19Ed68C024C5672af4a1AA0d7'

    // useEffect(() => {
    //     // const balanceOf = await BalanceOf();
    //     // console.log('balanceOfbalanceOf', balanceOf);
    //     // setStorebalance(balanceOf)
    //     estimate();
    // },[])
    // Set Provider
    let httpProvider = new ethers.providers.WebSocketProvider(url);

    storeTemp = async () => {
        let gasPrice = await httpProvider.getGasPrice();

        let wallet = new ethers.Wallet('c3ead4fb2666d22862b819731162d2e43cd388a244f01cb7bbc86e044d795142');
        let signer = wallet.connect(httpProvider);

        let transactionCount = await httpProvider.getTransactionCount(owneraddress);
        console.log('Transaction Count is', transactionCount);

        // const receiverAddress = '0xd19a435dfa78386e728e7444287f2f2d0b78d110';
        // const transaction = {
        //     to : owneraddress,
        //     value : ethers.utils.parseUnits('0.001'),
        //     gasPrice:gasPrice,
        //     gasLimit : ethers.utils.hexlify(100000),
        //     nonce : httpProvider.getTransactionCount(receiverAddress),
        // };

        // console.log('transaction',transaction);

        // const trxn = await signer.sendTransaction(transaction);
        // console.log('Transaction is',trxn);

        // let estimatePrice = await httpProvider.estimateGas({
        //     to: receiverAddress,
        //     data: gasPrice.hex,
        //     value: parseEther("1.0")
        // })
        // console.log('newValue', estimatePrice);

      

        // signer.getAddress().then((res) => console.log('Addess is',res))
        // .catch((err) => console.log('Adrees Error is',err));


        let contract = new ethers.Contract(ERC20, xrc20_abi, signer);
        // contract.functions
        let newmethod = await contract.approve(receiverAddress, 10);
        console.log('newmethodnewmethod', newmethod);
    }

    storeTemp();

    // const signer = httpProvider.getSigner();

    // console.log('signedmethoddd',signer);

    // let contract = new ethers.Contract(ERC20, xrc20_abi, signer);
    // console.log('COnteatcttc', contract);

    // var newvalue = BigInt(10);
    // console.log('nedebhc df',newvalue);

    // const fun = async () => {
    // console.log('estimated caledded');
    // httpProvider.getGasPrice()
    //     .then((res) => {
    //         console.log('Gas Price', res);

    //         httpProvider.estimateGas({
    //             // Wrapped ETH address
    //             to: receiverAddress,
    //             data: res,
    //             value: parseEther("1.0")
    //         }).then((res1) => console.log('Estimate Gas is', res1))
    //             .catch((err) => console.log("Error is", err));

    //     })
    //     .catch((err) => console.log('errr', err));
    // httpProvider.getTransactionCount(receiverAddress)
    //     .then((res) => console.log('Nonce', res))
    //     .catch((err) => console.log('Nonce Error', err));

    // httpProvider.getTransaction("4e3c6bb21be731b75a33ecc6dd1b8512e62b47277a8a216d5b216b073391d90d")
    //     .then((res) => console.log('Transaction is', res))
    //     .catch((err) => console.log('Error is', err));
    // console.log('nounceeeee', nounce);
    // contract.estimateGas.transfer(receiverAddress,10)
    // .then((res) => {
    //     console.log('Response is',res)
    // }).catch((err) => console.log('Contract Error',err))

    // let approve = contract.approve(address, 100).then(result => { console.log('Approve is', result);return result })
    //     .catch((err) => console.log('Error is', err))

    // return approve;
}
export default Approve;