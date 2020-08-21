import React, {useState} from 'react';
import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import Dropdown from './data';
import {useDispatch} from 'react-redux'
import { phone} from '../../../../store/authAction';

import { HeaderTextView, SubHeaderTextView, SubHeaderView, StyledView, HeaderView, TextView, InputTextComponent, InputComponent, SmallText } from './styles';

const login = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <StyledView style={{flexDirection: "column"}}>
      <HeaderView style={{flexDirection: "row" }}>
        <Image source={require('../../../../assets/logo.png')} />
      <HeaderTextView>Pickmeup</HeaderTextView>
      </HeaderView>
      <SubHeaderView>
        <SubHeaderTextView>Hey there!</SubHeaderTextView>
        <TextView>Type in your phone number to get started </TextView>
      </SubHeaderView>

      <InputTextComponent style={{flexDirection: "row", width: '100%', justifyContent: 'space-between'}}>
        <View style={{display: "flex", flexDirection: "row", width: '80%', height: 50}}>
          <View style={{width: '40%', flexDirection: 'row', backgroundColor: '#fff', height: '100%'}}>
            <View style={{width: '60%', alignItems: 'center', justifyContent: 'center'}}><Image source={require('../../../../assets/flag.png')} style={{width: 20, height: 20}} /></View>
            <View style={{width: '50%'}}><Dropdown /></View>
          </View>
          <View style={{width: '60%', borderLeftWidth: 2, borderLeftColor: '#333', paddingRight: 20}}>
            <View style={{width: '70%'}}>
            <TextInput placeholder="08031123456" onChangeText={(value ) => setPhoneNumber(value)} keyboardType="number-pad" />
            </View>
          </View>
        </View>
        <TouchableOpacity style={{height: 50,width: '20%',backgroundColor: '#2972cb',borderRadius: 5,borderColor: '#fff',borderWidth: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{color: '#fff', fontSize: 20, paddingHorizontal: 3, textAlign: "center"}} onPress={() => dispatch(phone(phoneNumber))}>OK</Text>
        </TouchableOpacity>
      </InputTextComponent>
      <SmallText>or you can sign in with </SmallText>

        <View style={{ paddingTop: 130, flexDirection: "row", justifyContent: "space-between", paddingLeft: 30}}>
        <TouchableOpacity style={{width: 100, height: 30, borderColor: '#2972cb', borderWidth: 1, flexDirection:"row", paddingHorizontal: 10, borderRadius: 6 }}>
          <View  style={{paddingTop: 4}}>
          <Image source={require('../../../../assets/facebook-square.png')} />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", }}>
              <Text style={{textAlign: "center", padding: 5}}>Facebook</Text>
        </View>

            </TouchableOpacity>
            <TouchableOpacity style={{width: 100, height: 30, borderColor: 'grey', borderWidth: 1, flexDirection:"row", paddingHorizontal: 10, borderRadius: 6 }}>
          <View  style={{paddingTop: 4}}>
          <Image source={require('../../../../assets/google.png')} />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", }}>
              <Text style={{textAlign: "center", padding: 5}}>Google</Text>
        </View>

            </TouchableOpacity>
        </View>
    </StyledView>
  );
};

export default login;
