import { AccountState } from '../types/';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from '../actions/Account';
// import { UserInfo } from 'firebase';

const initialState: AccountState = {
  user: {
    displayName: null,
    email: null,
    phoneNumber: null,
    photoURL: null,
    providerId: '',
    uid: '',
  }
};

const setting = reducerWithInitialState(initialState)
  .case(actions.authStateChanged, (state, user) => {
    if (user) {
      const { displayName, email, phoneNumber, photoURL, providerId, uid } = user;
      let name;
      if (!displayName) {
        if (!email) {
          name = '名前未設定';
        } else {
          name = email;
        }
      } else {
        name = displayName;
      }
      return {
        ...state,
        user: {
          displayName: name, email, phoneNumber, photoURL, providerId, uid
        }
      };
    } else {
      return { ...state, user: { ...initialState.user } };
    }
  });

export default setting;