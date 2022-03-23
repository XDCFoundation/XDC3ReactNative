// import Web3 from 'web3';

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Web3 } from "web3-react-native";

const App = () => {
    // const web3 = new Web3('http://localhost:7545'); // Ganache
    // console.log('Web33333', web3);
    // const newWallet = web3.eth.accounts.wallet.create(1);
    // const newAccount = newWallet[0];
    // console.log('newAAAAAAAAA',newAccount);
    useEffect(async () => {
        const web3 =  await Web3('https://ropsten.infura.io/v3/dc696479f2264b91812f0b0e6faf5326'); // Ganache
        // web3.Keystore()
        // const web3 = new Web3('https//rpc.apothem.network/'); 
        console.log('Web33333',web3);
    }, [])
    return (
        <View>
            <Text>hi</Text>
        </View>
    )
}
export default App;