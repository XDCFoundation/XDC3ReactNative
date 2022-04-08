
# xdc3_react-native

xdc3_react-native SDK with support for smart contracts, XRC20 .




## Usage

Add the following dependency to your package.json:

"dependencies": {
"xdc-sdk-react-native" = "0.1.0"
}
## This SDK supports following Read & Write operations:-

  |    XRC20 Token: Read methods                    |   XRC20 Token: Write methods                          |
  |     ---                                         |   ---                                                 | 
  |     name()                                      |   approve(receiverAddress , amount)                   |
  |     symbol()                                    |   transfer(recipient, amount)                         |
  |     decimal()                                   |   transferFrom(sender, recipient, amount)             |
  |     totalSupply()                               |   increaseAllowance(spender, addedValue)              |
  |     balanceOf(account)                          |   decreaseAllowance(spender, subtractedValue)         |
  |     allowance(owner, spender)                   |                                                       |
  |                                                 |                                                       |

## Environment Variable

Create a .env file in the root directory of the react-native project to put the wallet and endpoint information in like so: APOTHEM_ADDRESS = wss://ws.apothem.network
## Example for XRC20


## Transports

 - WebSockets transport
## Types

- Types for U256,H256,Address(H160)
- Transaction type (Transaction from Parity)
