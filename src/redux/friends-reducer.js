const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 23 },
    { id: 2, message: "What are you doing", likesCount: 2 },
    { id: 3, message: "What are you doing", likesCount: 2 }
  ],
  newPostText: ""
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
		let newPost = {
		  id: 7,
		  message: state.newPostText,
		  likesCount: 0
		};
		return {
			...state,
			newPostText: "",
			posts: [...state.posts, newPost] //вместо пуша, просто через запятую пишем, то , что в конец массива нужно добавить

		};
	}

	case UPDATE_NEW_POST_TEXT: {
		return {
			...state,
			newPostText: action.newText // у каждого экшена (объекта) есть свои свойства, в данном случае если мы оставим просто newText, то не понятно, а что это такое, поэтому мы написали action.newText, чтобы у него был такой метод
		};
	}
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default friendsReducer;
