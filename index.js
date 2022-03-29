import Name from './src/xrc20/name';
import Symbol from './src/xrc20/symbol';
import Decimal from './src/xrc20/decimals';
import BalanceOf from './src/xrc20/balanceOf';
import TotalSupply from './src/xrc20/total_supply';

const XDCTestNet = async() => {
    const name = await Name();
    const symbol = await Symbol();
    const decimals = await Decimal();
    const balanceOf = await BalanceOf();
    const totalSupply = await TotalSupply();

    let Object = {
        name:name,
        symbol:symbol,
        decimals:decimals,
        balanceOf:balanceOf,
        totalSupply:totalSupply
    }
    return Object;
}
export default XDCTestNet;