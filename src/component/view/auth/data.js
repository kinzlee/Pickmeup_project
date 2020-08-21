import React, {useState} from 'react'
import {Picker} from '@react-native-community/picker';
import {useSelector, useDispatch } from 'react-redux';
import { country} from '../../../../store/authAction';

const Dropdown = () => {

    const [selectPhoneCode, setSelectedPhoneCode] = useState()
    const arrCountries = [{name: 'Nig', code: +234}, {name: 'Gh', code: '+244'}, {name: 'cam', code: '+234'}]
    const countries = useSelector(state => state.auth.country);
    const dispatch = useDispatch();
    console.log(countries, '///////////////')
    return (
    <Picker
            selectedValue={''}
            style={{height: 50, width: 120, backgroundColor: '#fff'}}
            onValueChange={(itemValue, itemIndex) => dispatch(country(itemValue))}>
                {arrCountries.map(code => {
                    return <Picker.Item label={code.name} value={code.code} />
                })}
    </Picker>
    );
};

export default Dropdown;