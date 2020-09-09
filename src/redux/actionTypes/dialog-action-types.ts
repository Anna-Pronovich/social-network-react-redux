import { SEND_MESSAGE } from "../constants";

export type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE
  newMessageBody: string
}
