import Alert from "react-bootstrap/Alert";
import { MessageContainer } from "./message.styles.jsx";

/**
 * Message
 * It is responsible for message component
 * @param {Object} props
 * @returns
 */
const Message = (props) => {
  return (
    <MessageContainer>
      <Alert variant={props.variant}>{props.error}</Alert>;
    </MessageContainer>
  );
};
export default Message;
