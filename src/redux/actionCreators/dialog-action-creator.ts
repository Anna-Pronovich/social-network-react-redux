import { SEND_MESSAGE } from "../constants";
import { SendMessageCreatorActionType } from "../actionTypes/dialog-action-types";

export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody });
