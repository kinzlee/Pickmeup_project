import { COUNTRY, PHONE} from './authAction';

const initialState = {
   country: '',
   phone: {}
};

export default (state=initialState, action) => {

    switch(action.type) {
        case COUNTRY:
        return {
            country: action.country
        }
        case PHONE: 
        return {
            phone: action.phone
        }
        default: 
        return state
    }
}