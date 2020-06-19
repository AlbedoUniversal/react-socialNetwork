const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"

let initialState = {
	friends: [
		{id: 1, fullName: 'Shlipa', status: 'I am a super', location: {city: 'Moscow', country: 'Russia'}, followed: false},
		{id: 2, fullName: 'Vova', status: 'I am a boss', location: {city: 'Rostov', country: 'Russia'}, followed: true},
		{id: 3, fullName: 'Misha', status: 'I am a ninja', location: {city: 'Azov', country: 'Russia'}, followed: false},
		{id: 4, fullName: 'Roma', status: 'I am a naruto', location: {city: 'Saratov', country: 'Russia'}, followed: true}
	]

};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
	  case FOLLOW: {
		return {
			...state,
			friends: state.friends.map( friend => {
				if(friend.id === action.friendId) {
					return {...friend, followed: true}
				}
				return friend;
			})
		};
	  }
	  case UNFOLLOW: {
		return {
			...state,
			friends: state.friends.map( friend => {
				if(friend.id === action.friendId) {
					return {...friend, followed: false}
				}
				return friend;
			})
		};
	  }
	  case SET_USERS: {
		  return {...state, friends: [...action.friends, ...action.friends]}
	  }
    default:
      return state;
  }
};

export const followAC = (friendId) => ({ type: FOLLOW, friendId }); // вместо action creatore - AC

export const unFollowAC = (friendId) => ({type: UNFOLLOW, friendId});

export const setFriendsAC = (friends) => ({type: SET_USERS, friends});

export default friendsReducer;
