import Web3 from 'web3';

const App = () => {
    const web3 = new Web3('http://localhost:7545'); // Ganache
    console.log('Web33333', web3);
    const newWallet = web3.eth.accounts.wallet.create(1);
    const newAccount = newWallet[0];
    console.log('newAAAAAAAAA',newAccount);
}
export default App;