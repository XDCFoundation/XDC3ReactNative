import Name from './src/xrc20/name';
import Symbol from './src/xrc20/symbol';
import Decimal from './src/xrc20/decimals';
import BalanceOf from './src/xrc20/balanceOf';
import TotalSupply from './src/xrc20/total_supply';
import Approve from './src/xrc20/approve';
import Allowance from './src/xrc20/allowance';
import TransferXdc from './src/xrc20/transfer_xdc';
import TransferToken from './src/xrc20/transfer_token';
import IncreaseAllowance from './src/xrc20/increase_allowance';

const XDCTestNet = async() => {
    const name = await Name();
    const symbol = await Symbol();
    const decimals = await Decimal();
    const balanceOf = await BalanceOf();
    const totalSupply = await TotalSupply();
    // const approve = await Approve();
    const allowance = await Allowance();
    // console.log('approveapprove',approve);
    // const transferxdc = await TransferXdc();
    // const transfertoken = await TransferToken();
    const increaseallowance = await IncreaseAllowance();
    // console.log('transferxdctransferxdc',transferxdc);

    let Object = {
        name:name,
        symbol:symbol,
        decimals:decimals,
        balanceOf:balanceOf,
        totalSupply:totalSupply,
        // approve:approve,
        allowance:allowance,
        // transfer_xdc : transferxdc,
        // transfer_token:transfertoken,
        increase_allowance : increaseallowance
    }
    return Object;
}
export default XDCTestNet;