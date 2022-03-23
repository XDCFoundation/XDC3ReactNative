// import Web3 from 'web3';

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Web3 } from "web3-react-native";
import contracts from './abi.json';

const App = () => {
    // const web3 = new Web3('http://localhost:7545'); // Ganache
    // console.log('Web33333', web3);
    // const newWallet = web3.eth.accounts.wallet.create(1);
    // const newAccount = newWallet[0];
    // console.log('newAAAAAAAAA',newAccount);
    useEffect(async () => {
        const Newww = await Web3('https//rpc.apothem.network/');
        console.log('Newwwwww',Newww);

        fecthName();
    }, []);

    fecthName = () => {
        const Abi = contracts;
        const token_address = "0xbA9D6a36FbC194f5d1Aa48A2892AE4bdF6939Cb9";
        
    }

    return (
        <View>
            <Text>hi</Text>
        </View>
    )
}
export default App;