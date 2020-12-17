import { PROFILE_ACTION } from '../actions'
const initialProfile = {
    email: '',
    familyName: '',
    givenName: '',
    googleId: '',
    imageUrl: '',
    name: ''
}

const profileReducer = (state, action) => {
    state = state || initialProfile;
    switch (action.type) {
        case PROFILE_ACTION.SET :
            return { ...action.payload }
        case PROFILE_ACTION.RESET: 
            return { ...initialProfile }
        default:
            return state
    }
}

export default profileReducer