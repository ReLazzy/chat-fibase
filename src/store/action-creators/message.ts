import { AppDispatch } from "..";
import {
  Message,
  MessageAction,
  MessageActionTypes,
} from "../reducers/message/types";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { app, auth, db } from "../../config/fbConfig";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FirebaseError } from "firebase/app";

export const MessageActionCreators = {
  addMessage: (
    user: User | null | undefined,
    value: string,
    message: Message[]
  ) => {
    return async (dispatch: AppDispatch) => {
      try {
        if (user) {
          dispatch({ type: MessageActionTypes.FETCH_MESSAGE });

          await addDoc(collection(db, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp(),
          });
        }
      } catch (e) {
        dispatch({
          type: MessageActionTypes.FETCH_MESSAGE_ERROR,
          payload: "ОШИБКА отправки",
        });
      }
    };
  },
  fetchMessages: () => {
    const message = [] as Message[];
    return async (dispatch: AppDispatch) => {
      try {
        dispatch({ type: MessageActionTypes.FETCH_MESSAGE });
        // Create a reference to the cities collection
        const q = query(collection(db, "messages"), orderBy("createdAt"));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          message.push(doc.data() as Message);
        });

        // Create a query against the collection.

        dispatch({
          type: MessageActionTypes.FETCH_MESSAGE_SUCCESS,
          payload: message,
        });
      } catch (e) {
        dispatch({
          type: MessageActionTypes.FETCH_MESSAGE_ERROR,
          payload: "ОШИБКА получения",
        });
      }
    };
  },
};
