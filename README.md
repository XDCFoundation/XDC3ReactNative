
# xdc3-react-native

xdc3-react-native SDK with support for smart contracts, XRC20 and XRC721.




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

  |    **XRC20 Token: Read methods**                    |   **XRC20 Token: Write methods**                          |
  |     ---                                         |   ---                                                 | 
  |     name(url , token_address)                                      |   approve(url , token_address ,privateKey , receiverAddress , owneraddress)                   |
  |     symbol(url , token_address)                                    |   transferToken(url , token_address , privateKey , receiverAddress , owneraddress , amount)                         |
  |     decimal(url , token_address)                                   |   transferFrom(url , token_address , privateKey , receiverAddress , owneraddress , amount)             |
  |     totalSupply(url , token_address)                               |   increaseAllowance(url , token_address , privateKey , receiverAddress , owneraddress , value )             |
  |     balanceOf(url , token_address , owneraddress)                          |   decreaseAllowance(url , token_address , privateKey , receiverAddress , owneraddress , value)         |
  |     allowance(url , token_address , owneraddress , receiverAddress)                  |   transferXDC(url , privateKey , owneraddress , receiverAddress , send_token_amount)  |
  |                                               |                                                       |
  |                                               |                                                       |
  |                                               |                                                       |
  | **XRC721 Token: Read methods** | **XRC721 Token: Write methods** |
  |_Name(url,token_address)|setApprovalAll(url,token_address,ownerPrivateKey,spenderAddress,owneraddress,booleanValue)|
  |_Symbol(url,token_address)|_Approve(url,token_address,ownerPrivateKey,spenderAddress,owneraddress,tokenId)|
  | _TotalSupply(url,token_address)|_TransferFrom(url,token_address,spendarprivateKey,receiverAddress,spenderAddress,tokenId)|
  |_BalanceOf(url,token_address,owneraddress)|_safeTransferFrom(url,token_address,spendarprivateKey,receiverAddress,spenderAddress,tokenId)|
  |OwnerOf(url,token_address,tokenId)||
  |TokenUri(url,token_address,tokenId)||
  |TokenByIndex(url,token_address,tokenIndex)||
  |TokenByOwnerIndex(url,token_address,owneraddress,tokenIndex)||
  |SupportInterface(url,token_address,interfaceId)||
  |GetApproved(url,token_address,tokenId)||
  |ApprovalAll(url,token_address,owneraddress,receiverAddress)||
  |||
  
 

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


## Example for XRC721

### Read Method
```
//write read method of XRC721
```
**This example returns transfer object .**

### Write Method
```
//write write method of XRC721
```
**This example returns transfer object .**


## Transports

 - WebSockets transport
<!-- ## Types

- Types for U256,H256,Address(H160)
- Transaction type (Transaction from Parity) -->
