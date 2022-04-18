import React, { Component, useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text, StyleSheet, TextInput, Button, Alert, View, Pressable
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
import { Dropdown } from 'react-native-element-dropdown';
import {url} from './env';

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
      send_amount: ''
    }
  }

  submitValue = async () => {
    if (this.state.storeValue === 'Name') {
      var newValue = await Name(url, this.state.token_address);
      Alert.alert('Name is',newValue)
    }
    if (this.state.storeValue === 'Symbol') {
      var newValue1 = await Symbol(url, this.state.token_address);
      Alert.alert('Symbol is',newValue1)
    }
    if (this.state.storeValue === 'Decimal') {
      var newValue3 = await Decimals(url, this.state.token_address);
      Alert.alert('Decimals is',JSON.stringify(newValue3))
    }
    if (this.state.storeValue === 'TotalSupply') {
      var newValue2 = await TotalSupply(url, this.state.token_address);
      Alert.alert('TotalSupply is',newValue2)
    }
    if (this.state.storeValue === 'BalanceOf') {
      var newValue5 = await BalanceOf(url, this.state.token_address, this.state.owner_address);
      Alert.alert('BalanceOf is',newValue5)
    }

    if (this.state.storeValue === 'Allowance') {
      var newValue4 = await Allowance(url, this.state.token_address, this.state.owner_address, this.state.receiver_Address);
      Alert.alert('Allowance is',newValue4)
    }

    if (this.state.storeValue === 'Approve') {
      var newValue7 = await Approve(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address);
      Alert.alert('Approve is',JSON.stringify(newValue7))
    }

    if (this.state.storeValue === 'TransferXdc') {
      var newValue6 = await TransferXdc(url, this.state.private_Key,this.state.owner_address,this.state.receiver_Address,this.state.send_amount);
      Alert.alert('Transfer XDC is',JSON.stringify(newValue6))
    }

    if (this.state.storeValue === 'TransferToken') {
      var newValue8 = await TransferToken(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_amount);
      Alert.alert('Transfer Token is',JSON.stringify(newValue8))
    }

    if (this.state.storeValue === 'TransferFrom') {
      var newValue9 = await TransferFromAmount(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_amount);
      Alert.alert('Transfer Amount is',JSON.stringify(newValue9))
    }

    if (this.state.storeValue === 'IncreaseAllowance') {
      var increasevalue = await IncreaseAllowance(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_token_amount);
      Alert.alert('Increase Allowance is',JSON.stringify(increasevalue))
    }

    if (this.state.storeValue === 'DecreaseAllowance') {
      var decreasevalue = await DecreaseAllowance(url, this.state.token_address, this.state.private_Key, this.state.receiver_Address, this.state.owner_address, this.state.send_token_amount);
      Alert.alert('Decrease Allowance is',JSON.stringify(decreasevalue))
    }
  }

  render() {

    return (
      <View style={styles.mainContainer}>
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

        {(this.state.storeValue === 'Allowance' || this.state.storeValue === 'Approve' ||
          this.state.storeValue === 'TransferXdc' || this.state.storeValue === 'TransferToken' || this.state.storeValue === 'IncreaseAllowance' || this.state.storeValue === 'DecreaseAllowance'|| this.state.storeValue === 'TransferFrom') &&
          <TextInput placeholder='Enter Receiver Address' value={this.state.receiver_Address} onChangeText={(text) => this.setState({ receiver_Address: text })}
            style={styles.inputfield} />
        }

        {(this.state.storeValue === 'Approve' || this.state.storeValue === 'TransferXdc' || this.state.storeValue === 'TransferToken' || this.state.storeValue === 'IncreaseAllowance' || this.state.storeValue === 'DecreaseAllowance' || this.state.storeValue === 'TransferFrom')
          &&
          <TextInput placeholder='Enter PrivateKey' value={this.state.private_Key} onChangeText={(text) => this.setState({ private_Key: text })}
            style={styles.inputfield} />
        }

        {(this.state.storeValue === 'TransferXdc' || this.state.storeValue === 'TransferToken' || this.state.storeValue === 'TransferFrom' )&&
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
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: 18
  }
});