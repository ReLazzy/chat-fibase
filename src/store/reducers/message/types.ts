import { FieldValue } from "firebase/firestore";

export interface Message {
  uid: string;
  displayName: string;
  photoURL: string;
  text: string;
  createdAt: FieldValue;
}

export interface MessageState {
  message: Message[];
  loading: boolean;
  error: null | string;
}

export enum MessageActionTypes {
  FETCH_MESSAGE = "FETCH_MESSAGE",
  FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS",
  FETCH_MESSAGE_ERROR = "FETCH_MESSAGE_ERROR",
}

interface FetchMessageAction {
  type: MessageActionTypes.FETCH_MESSAGE;
}
interface FetchMessageSuccessAction {
  type: MessageActionTypes.FETCH_MESSAGE_SUCCESS;
  payload: Message[];
}
interface FetchMessageErrorAction {
  type: MessageActionTypes.FETCH_MESSAGE_ERROR;
  payload: string;
}

export type MessageAction =
  | FetchMessageAction
  | FetchMessageSuccessAction
  | FetchMessageErrorAction;
