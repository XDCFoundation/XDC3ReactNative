import React, { Component } from 'react';
import {
  Text, StyleSheet, TextInput, Alert, View, Pressable, ScrollView
} from 'react-native';
import Name from 'xdc3-react-native/src/xrc20/name';
import Symbol from 'xdc3-react-native/src/xrc20/symbol';
import Decimals from 'xdc3-react-native/src/xrc20/decimals';
import TotalSupply from 'xdc3-react-native/src/xrc20/total_supply';
import Allowance from 'xdc3-react-native/src/xrc20/allowance';
import BalanceOf from 'xdc3-react-native/src/xrc20/balanceOf';
import TransferXdc from 'xdc3-react-native/src/xrc20/transfer_xdc';
import TransferToken from 'xdc3-react-native/src/xrc20/transfer_token';
import Approve from 'xdc3-react-native/src/xrc20/approve';
import IncreaseAllowance from 'xdc3-react-native/src/xrc20/increase_allowance';
import DecreaseAllowance from 'xdc3-react-native/src/xrc20/decrease_allowance';
import TransferFromAmount from 'xdc3-react-native/src/xrc20/transfer_from';
import _createAccount from 'xdc3-react-native/src/owner/xdc_account';
import _Name from 'xdc3-react-native/src/xrc721/name';
import _Symbol from 'xdc3-react-native/src/xrc721/symbol';
import _TotalSupply from 'xdc3-react-native/src/xrc721/total_supply';
import _BalanceOf from 'xdc3-react-native/src/xrc721/balance_of';
import OwnerOf from 'xdc3-react-native/src/xrc721/ownerof';
import TokenUri from 'xdc3-react-native/src/xrc721/token_uri';
import TokenByIndex from 'xdc3-react-native/src/xrc721/tokenByIndex';
import TokenByOwnerIndex from 'xdc3-react-native/src/xrc721/tokenOfOwnerByIndex';
import SupportInterface from 'xdc3-react-native/src/xrc721/supportInterface';
import GetApproved from 'xdc3-react-native/src/xrc721/getApproved';
import ApprovalAll from 'xdc3-react-native/src/xrc721/isApprovedForAll';
import setApprovalAll from 'xdc3-react-native/src/xrc721/setApprovalAll';
import _Approve from 'xdc3-react-native/src/xrc721/approve';
import _TransferFrom from 'xdc3-react-native/src/xrc721/transferFrom';
import _safeTransferFrom from 'xdc3-react-native/src/xrc721/transferFrom';
import { Dropdown } from 'react-native-element-dropdown';
import { url } from './env';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      store: {},
      value: null,
      data: [
        { label: 'Name', value: '1' },
        { label: 'Symbol', value: '2' },
        { label: 'Decimal', value: '3' },
        { label: 'TotalSupply', value: '4' },
        { label: 'BalanceOf', value: '5' },
        { label: 'Allowance', value: '6' },
        { label: 'Approve', value: '7' },
        { label: 'TransferXdc', value: '8' },
        { label: 'TransferToken', value: '9' },
        { label: 'TransferFrom', value: '10' },
        { label: 'IncreaseAllowance', value: '11' },
        { label: 'DecreaseAllowance', value: '12' },
      ],
      storeValue: '',
      token_address: '',
      finalValue: {},
      ismodalOpen: false,
      owner_address: '',
      receiver_Address: '',
      amount: '',
      send_token_amount: '',
      private_Key: '',
      send_amount: '',

      data1: [
        { label: 'Name', value: '1' },
        { label: 'Symbol', value: '2' },
        { label: 'TotalSupply', value: '3' },
        { label: 'BalanceOf', value: '4' },
        { label: 'OwnerOf', value: '5' },
        { label: 'TokenURI', value: '6' },
        { label: 'TokenByIndex', value: '7' },
        { label: 'TokenOfOwnerByIndex', value: '8' },
        { label: 'SupportInterface', value: '9' },
        { label: 'GetApproved', value: '10' },
        { label: 'IsApprovedForAll', value: '11' },
        { label: 'SetApprovalForAll', value: '12' },
        { label: 'Approve', value: '13' },
        { label: 'TransferFrom', value: '14' },
        { label: 'SafeTransferFrom', value: '15' },
      ],
      value1: null,
      storeValue1: '',
      erc721_token_address: '',
      erc721_owner_address: '',
      tokenId: '',
      tokenIndex: '',
      interFaceId: '',
      boolenValue: '',
      spendar_address: '',
      erc721_private_Key: '',
      erc721_receiver_address: '',
      erc721_spendar_address: '',

      data2: [
        { label: 'XDC_Account', value: '1' }
      ],
      value2: null,
      storeValue2: ''
    }
  }

  submitValue = async () => {
    if (this.state.storeValue === 'Name') {
      var newValue = await Name(url, this.state.token_address);
      Alert.alert('Name is', newValue)
    }
    if (this.state.storeValue === 'Symbol') {
      var newValue1 = await Symbol(url, this.state.token_address);
      Alert.alert('Symbol is', newValue1)
    }
    if (this.state.storeValue === 'Decimal') {
      var newValue3 = await Decimals(url, this.state.token_address);
      Alert.alert('Decimals is', JSON.stringify(newValue3))
    }
    if (this.state.storeValue === 'TotalSupply') {
      var newValue2 = await TotalSupply(url, this.state.token_address);
      Alert.alert('TotalSupply is', newValue2)
    }
    if (this.state.storeValue === 'BalanceOf') {
      var newValue5 = await BalanceOf(url, this.state.token_address, this.state.owner_address);
      Alert.alert('BalanceOf is', newValue5)
    }

    if (this.state.storeValue === 'Allowance') {
      var newValue4 = await Allowance(url, this.state.token_address, this.state.owner_address, this.state.spendar_address);
      Alert.alert('Allowance is', newValue4)
    }

    if (this.state.storeValue === 'Approve') {
      var newValue7 = await Approve(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_amount);
      Alert.alert('Approve is', JSON.stringify(newValue7))
    }

    if (this.state.storeValue === 'TransferXdc') {
      var newValue6 = await TransferXdc(url, this.state.private_Key, this.state.owner_address, this.state.receiver_Address, this.state.send_amount);
      Alert.alert('Transfer XDC is', JSON.stringify(newValue6))
    }

    if (this.state.storeValue === 'TransferToken') {
      var newValue8 = await TransferToken(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_amount);
      Alert.alert('Transfer Token is', JSON.stringify(newValue8))
    }

    if (this.state.storeValue === 'TransferFrom') {
      var newValue9 = await TransferFromAmount(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.spendar_address, this.state.owner_address, this.state.send_amount);
      Alert.alert('Transfer Amount is', JSON.stringify(newValue9))
    }

    if (this.state.storeValue === 'IncreaseAllowance') {
      var increasevalue = await IncreaseAllowance(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_token_amount);
      Alert.alert('Increase Allowance is', JSON.stringify(increasevalue))
    }

    if (this.state.storeValue === 'DecreaseAllowance') {
      var decreasevalue = await DecreaseAllowance(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_token_amount);
      Alert.alert('Decrease Allowance is', JSON.stringify(decreasevalue))
    }
  }

  submitValue2 = async () => {
    if (this.state.storeValue2 === 'XDC_Account') {
      var newValue = await _createAccount();
      Alert.alert('Private Key is', newValue)
    }
  }

  submitValue1 = async () => {
    if (this.state.storeValue1 === 'Name') {
      var newValue = await _Name(url, this.state.erc721_token_address);
      Alert.alert('Name is', newValue)
    }
    if (this.state.storeValue1 === 'Symbol') {
      var newValue1 = await _Symbol(url, this.state.erc721_token_address);
      Alert.alert('Symbol is', newValue1)
    }
    if (this.state.storeValue1 === 'TotalSupply') {
      var newValue2 = await _TotalSupply(url, this.state.erc721_token_address);
      Alert.alert('TotalSupply is', newValue2)
    }
    if (this.state.storeValue1 === 'BalanceOf') {
      var newValue5 = await _BalanceOf(url, this.state.erc721_token_address, this.state.erc721_owner_address);
      Alert.alert('BalanceOf is', newValue5)
    }

    if (this.state.storeValue1 === 'OwnerOf') {
      var newValue4 = await OwnerOf(url, this.state.erc721_token_address, this.state.tokenId);
      Alert.alert('OwnerOf is', newValue4)
    }

    if (this.state.storeValue1 === 'TokenURI') {
      var newValue4 = await TokenUri(url, this.state.erc721_token_address, this.state.tokenId);
      Alert.alert('Token URI is', newValue4)
    }

    if (this.state.storeValue1 === 'TokenByIndex') {
      var newValue4 = await TokenByIndex(url, this.state.erc721_token_address, this.state.tokenIndex);
      Alert.alert('Token By Index is', newValue4)
    }

    if (this.state.storeValue1 === 'TokenOfOwnerByIndex') {
      var newValue5 = await TokenByOwnerIndex(url, this.state.erc721_token_address, this.state.erc721_owner_address, this.state.tokenIndex);
      Alert.alert('Token By Owner Index is', newValue5)
    }

    if (this.state.storeValue1 === 'SupportInterface') {
      var newValue4 = await SupportInterface(url, this.state.erc721_token_address, this.state.interFaceId);
      Alert.alert('Support Interface is', newValue4)
    }

    if (this.state.storeValue1 === 'GetApproved') {
      var newValue4 = await GetApproved(url, this.state.erc721_token_address, this.state.tokenId);
      Alert.alert('Get Approved is', newValue4)
    }

    if (this.state.storeValue1 === 'IsApprovedForAll') {
      var newValue4 = await ApprovalAll(url, this.state.erc721_token_address, this.state.erc721_owner_address, this.state.erc721_receiver_address);
      Alert.alert('Approval for all is', newValue4)
    }

    if (this.state.storeValue1 === 'SetApprovalForAll') {
      var newValue7 = await setApprovalAll(url, this.state.erc721_token_address, this.state.erc721_private_Key, this.state.erc721_spendar_address, this.state.erc721_owner_address, this.state.boolenValue);
      Alert.alert('Set Approve for All is', JSON.stringify(newValue7))
    }

    if (this.state.storeValue1 === 'Approve') {
      var newValue7 = await _Approve(url, this.state.erc721_token_address, this.state.erc721_private_Key, this.state.erc721_spendar_address, this.state.erc721_owner_address, this.state.tokenId);
      Alert.alert('Approve is', JSON.stringify(newValue7))
    }

    if (this.state.storeValue1 === 'TransferFrom') {
      var newValue9 = await _TransferFrom(url, this.state.erc721_token_address, this.state.erc721_private_Key, this.state.erc721_receiver_address, this.state.erc721_spendar_address, this.state.erc721_owner_address, this.state.tokenId);
      Alert.alert('Transfer Token id is', JSON.stringify(newValue9))
    }

    if (this.state.storeValue1 === 'SafeTransferFrom') {
      var newValue9 = await _safeTransferFrom(url, this.state.erc721_token_address, this.state.erc721_private_Key, this.state.erc721_receiver_address, this.state.erc721_spendar_address, this.state.erc721_owner_address, this.state.tokenId);
      Alert.alert('Safe Transfer Token id is', JSON.stringify(newValue9))
    }
  }

  render() {

    return (
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.textContainer}>XRC20</Text>
            {this.state.storeValue === 'TransferXdc' ? null :
              <TextInput placeholder='Enter Token Addess' value={this.state.token_address} onChangeText={(text) => this.setState({ token_address: text })}
                style={styles.inputfield} />
            }
            {
              (this.state.storeValue === 'BalanceOf'
                || this.state.storeValue === 'Allowance'
                || this.state.storeValue === 'Approve' || this.state.storeValue === 'TransferXdc' ||
                this.state.storeValue === 'TransferToken' || this.state.storeValue === 'IncreaseAllowance' || this.state.storeValue === 'DecreaseAllowance' || this.state.storeValue === 'TransferFrom')
              &&
              <TextInput placeholder='Enter Owner Address' value={this.state.owner_address} onChangeText={(text) => this.setState({ owner_address: text })}
                style={styles.inputfield} />
            }

            {(
              this.state.storeValue === 'TransferXdc' || this.state.storeValue === 'TransferToken' || this.state.storeValue === 'IncreaseAllowance' || this.state.storeValue === 'DecreaseAllowance' || this.state.storeValue === 'TransferFrom') &&
              <TextInput placeholder='Enter Receiver Address' value={this.state.receiver_Address} onChangeText={(text) => this.setState({ receiver_Address: text })}
                style={styles.inputfield} />
            }

            {(
              this.state.storeValue === 'Allowance' || this.state.storeValue === 'Approve' || this.state.storeValue === 'TransferFrom') &&
              <TextInput placeholder='Enter Spendar Address' value={this.state.spendar_address} onChangeText={(text) => this.setState({ spendar_address: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue === 'Approve' || this.state.storeValue === 'TransferXdc' || this.state.storeValue === 'TransferToken' || this.state.storeValue === 'IncreaseAllowance' || this.state.storeValue === 'DecreaseAllowance' || this.state.storeValue === 'TransferFrom')
              &&
              <TextInput placeholder='Enter PrivateKey' value={this.state.private_Key} onChangeText={(text) => this.setState({ private_Key: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue === 'TransferXdc' || this.state.storeValue === 'TransferToken' || this.state.storeValue === 'TransferFrom' || this.state.storeValue === 'Approve') &&
              <TextInput placeholder='Enter Token Amount' value={this.state.send_amount} onChangeText={(text) => this.setState({ send_amount: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue === 'IncreaseAllowance' || this.state.storeValue === 'DecreaseAllowance') &&
              <TextInput placeholder='Enter Amount' value={this.state.send_token_amount} onChangeText={(text) => this.setState({ send_token_amount: text })}
                style={styles.inputfield} />
            }

            <Dropdown
              style={[styles.dropdown, { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={this.state.data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select item'}
              searchPlaceholder="Search..."
              value={this.state.value}
              onChange={item => {
                this.setState({ value: item.value, storeValue: item.label });
              }}
            />

            <Pressable style={styles.buttonContainer} onPress={() => this.submitValue()}>
              <Text style={styles.text}>Submit</Text>
            </Pressable>
          </View>


          <View style={styles.innerContainer}>
            <Text style={styles.textContainer}>XRC721</Text>
            {
              <TextInput placeholder='Enter Token Addess' value={this.state.erc721_token_address} onChangeText={(text) => this.setState({ erc721_token_address: text })}
                style={styles.inputfield} />
            }
            {
              (this.state.storeValue1 === 'BalanceOf'
                || this.state.storeValue1 === 'IsApprovedForAll'
                || this.state.storeValue1 === 'SetApprovalForAll' || this.state.storeValue1 === 'Approve' || this.state.storeValue1 === 'SafeTransferFrom' || this.state.storeValue1 === 'TransferFrom' || this.state.storeValue1 === 'TokenOfOwnerByIndex')
              &&
              <TextInput placeholder='Enter Owner Address' value={this.state.erc721_owner_address} onChangeText={(text) => this.setState({ erc721_owner_address: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'IsApprovedForAll' ||
              this.state.storeValue1 === 'TransferFrom' || this.state.storeValue1 === 'SafeTransferFrom') &&
              <TextInput placeholder='Enter Receiver Address' value={this.state.erc721_receiver_address} onChangeText={(text) => this.setState({ erc721_receiver_address: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'SetApprovalForAll' ||
              this.state.storeValue1 === 'Approve' || this.state.storeValue1 === 'TransferFrom' || this.state.storeValue1 === 'SafeTransferFrom') &&
              <TextInput placeholder='Enter Spendar Address' value={this.state.erc721_spendar_address} onChangeText={(text) => this.setState({ erc721_spendar_address: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'SetApprovalForAll' || this.state.storeValue1 === 'Approve' || this.state.storeValue1 === 'TransferFrom' || this.state.storeValue1 === 'SafeTransferFrom')
              &&
              <TextInput placeholder='Enter PrivateKey' value={this.state.erc721_private_Key} onChangeText={(text) => this.setState({ erc721_private_Key: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'OwnerOf' || this.state.storeValue1 === 'TokenURI' || this.state.storeValue1 === 'GetApproved' || this.state.storeValue1 === 'Approve' || this.state.storeValue1 === 'TransferFrom' || this.state.storeValue1 === 'SafeTransferFrom') &&
              <TextInput placeholder='Enter Token Id' value={this.state.tokenId} onChangeText={(text) => this.setState({ tokenId: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'TokenByIndex' || this.state.storeValue1 === 'TokenOfOwnerByIndex') &&
              <TextInput placeholder='Enter Token Index' value={this.state.tokenIndex} onChangeText={(text) => this.setState({ tokenIndex: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'SupportInterface') &&
              <TextInput placeholder='Enter Interface Id' value={this.state.interFaceId} onChangeText={(text) => this.setState({ interFaceId: text })}
                style={styles.inputfield} />
            }

            {(this.state.storeValue1 === 'SetApprovalForAll') &&
              <TextInput placeholder='Enter Boolean Value' value={this.state.boolenValue} onChangeText={(text) => this.setState({ boolenValue: text })}
                style={styles.inputfield} />
            }


            <Dropdown
              style={[styles.dropdown, { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={this.state.data1}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select item'}
              searchPlaceholder="Search..."
              value={this.state.value1}
              onChange={item => {
                this.setState({ value1: item.value, storeValue1: item.label });
              }}
            />

            <Pressable style={styles.buttonContainer} onPress={() => this.submitValue1()}>
              <Text style={styles.text}>Submit</Text>
            </Pressable>
          </View>

          <View style={styles.innerContainer}>
            <Text style={styles.textContainer}>Owner</Text>

            <Dropdown
              style={[styles.dropdown, { borderColor: 'blue' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={this.state.data2}
              search
              maxHeight={100}
              labelField="label"
              valueField="value"
              placeholder={'Select item'}
              searchPlaceholder="Search..."
              value={this.state.value2}
              onChange={item => {
                this.setState({ value2: item.value, storeValue2: item.label });
              }}
            />

            <Pressable style={styles.buttonContainer} onPress={() => this.submitValue2()}>
              <Text style={styles.text}>Submit</Text>
            </Pressable>

          </View>
        </View>
      </ScrollView>
    )
  }
};


export default App;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20
  },

  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  inputfield: {
    width: '90%',
    height: 50,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: 'blue'
  },
  modalcontainer: {
    width: '90%',
    height: '70%',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  buttonContainer: {
    width: '50%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 20,
    marginTop: 30
  },
  mainContainer: {
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  innerContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 50
  },
  textContainer: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
});