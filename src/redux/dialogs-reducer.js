const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Hola" },
    { id: 4, message: "Ariva" },
    { id: 5, message: "Salam" },
    { id: 6, message: "Privki" }
  ],
  newMessageText: "",

  dialogs: [
    { id: 1, name: "Albert" },
    { id: 2, name: "Natasha" },
    { id: 3, name: "Roma" },
    { id: 4, name: "Eugene" },
    { id: 5, name: "Valera" },
    { id: 6, name: "Vova" }
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
		let newMessage = {
		  id: 7,
		  message: state.newMessageText
		};
		let stateCopy = {...state};
		stateCopy.messages = [...state.messages];
		stateCopy.messages.push(newMessage);

		stateCopy.newMessageText = "";
		return stateCopy;
	}

    case UPDATE_NEW_MESSAGE_TEXT: {
		let stateCopy = {...state};
		stateCopy.newMessageText = action.newMessageText;
		return stateCopy;
	}

    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessageText: text
});

export default dialogsReducer;
