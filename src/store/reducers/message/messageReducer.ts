import {
  Message,
  MessageAction,
  MessageActionTypes,
  MessageState,
} from "./types";

const initState: MessageState = {
  message: [],
  loading: false,
  error: null,
};

export default function messageReducer(
  state = initState,
  action: MessageAction
): MessageState {
  {
    switch (action.type) {
      case MessageActionTypes.FETCH_MESSAGE:
        return { ...state, loading: true };
      case MessageActionTypes.FETCH_MESSAGE_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
        };
      case MessageActionTypes.FETCH_MESSAGE_ERROR:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  }
}
