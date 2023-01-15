import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { MessageActionCreators } from "../store/action-creators/message";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(MessageActionCreators, dispatch);
};
