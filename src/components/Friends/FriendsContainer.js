import React from 'react';

import {
	followAC,
	unFollowAC,
	setFriendsAC 
  } from "../../redux/friends-reducer";

import { connect } from 'react-redux';

import Friends from '../Friends/Friends';


const mapStateToProps = (state) => {

	return {
		friends: state.friendsPage.friends
	}	
}

const mapDispatchToProps = (dispatch) => {
	return {

		follow: (friendId) => {
			dispatch(followAC(friendId))
		},

		unFollow: (friendId) => {
			dispatch(unFollowAC(friendId))
		},

		setFriends: (friends) => {
			dispatch(setFriendsAC(friends))
		}
	}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;