
# xdc3-react-native

xdc3-react-native SDK with support for smart contracts, XRC20 .




## Usage

Add the following dependency to your package.json:
```
"dependencies": {
"xdc3-react-native" = "1.0.0"
}

and 

npm i 
```
or 
```
npm install xdc3-react-native
or
npm i xdc3-react-native
```
## This SDK supports following Read & Write operations:-

  |    XRC20 Token: Read methods                    |   XRC20 Token: Write methods                          |
  |     ---                                         |   ---                                                 | 
  |     name(url , token_address)                                      |   approve(url , token_address ,privateKey , receiverAddress , owneraddress)                   |
  |     symbol(url , token_address)                                    |   transferToken(url , token_address , privateKey , receiverAddress , owneraddress , amount)                         |
  |     decimal(url , token_address)                                   |   transferFrom(url , token_address , privateKey , receiverAddress , owneraddress , amount)             |
  |     totalSupply(url , token_address)                               |   increaseAllowance(url , token_address , privateKey , receiverAddress , owneraddress , value )             |
  |     balanceOf(url , token_address , owneraddress)                          |   decreaseAllowance(url , token_address , privateKey , receiverAddress , owneraddress , value)         |
  |     allowance(url , token_address , owneraddress , receiverAddress)                  |   transferXDC(url , privateKey , owneraddress , receiverAddress , send_token_amount)  |
  |                                               |                                                       |

## Environment Variable

Create a .env file in the root directory of the react-native project to put the wallet and endpoint information in like so: 
```
APOTHEM_ADDRESS = wss://ws.apothem.network
```
## Example for XRC20

### Read Method
```
//import read function Name

import Name from 'xdc-sdk-react-native/src/xrc20/name';

const getName = async () => {
  const url = network-url ;
  const token_address = XRC20-token-address;

  const name = await Name(url , token_address);
}
```

**This example returns name of the specified address.**


### Write Method

```
//import write function transfer from

import transferFromAmount from 'xdc-sdk-react-native/src/xrc20/transfer_from';

const transferFrom = async () => {
  const url = network-url ;
  const token_address = XRC20-token-address;
  const sender_address = sender-address;
  const receiver_address = receiver-address;
  const privateKey = sender-private-Key;
  const amount = transfered-amount;

  const transfer = await transferFromAmount(url ,token_address ,privateKey ,receiver_address ,sender_address ,amount);
}
```

**This example returns transfer object .**


## Transports

 - WebSockets transport
<!-- ## Types

- Types for U256,H256,Address(H160)
- Transaction type (Transaction from Parity) -->
