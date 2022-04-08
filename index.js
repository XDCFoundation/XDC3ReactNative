import Name from './src/xrc20/name';
import Symbol from './src/xrc20/symbol';
import Decimal from './src/xrc20/decimals';
import BalanceOf from './src/xrc20/balanceOf';
import TotalSupply from './src/xrc20/total_supply';
import Approve from './src/xrc20/approve';
import Allowance from './src/xrc20/allowance';
import TransferXdc from './src/xrc20/transfer_xdc';

const XDCTestNet = async() => {
    const name = await Name();
    const symbol = await Symbol();
    const decimals = await Decimal();
    const balanceOf = await BalanceOf();
    const totalSupply = await TotalSupply();
    // const approve = await Approve();
    const allowance = await Allowance();
    const transfer = await TransferXdc();
    console.log('Transferrrr',transfer);

    let Object = {
        name:name,
        symbol:symbol,
        decimals:decimals,
        balanceOf:balanceOf,
        totalSupply:totalSupply,
        // approve:approve,
        allowance:allowance,
        transfer_token : transfer,
    }
    return Object;
}
export default XDCTestNet;