import styled from "styled-components";
import { md } from "lib/constants/screen-sizes";
import { useClickAway } from "react-use";
import { ReactNode, useRef } from "react";
import ErrorIcon from "../connected-wallet/components/error-icon";

const Root = styled.div`
  all: unset;
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(19, 18, 34, 0.8);
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  z-index: 100;
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  margin-top: 20vh;

  ${md} {
    margin-top: 5vh;
  }
`;

const Content = styled.div`
  padding: 44px;
  background: white;
  backdrop-filter: blur(90px);
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease;

  ${md} {
    padding: 32px;
  }
`;

const Message = styled.span`
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
  text-align: center;
`;

interface IProps {
  content: ReactNode | string;
  closeModal: () => void;
}

const ErrorModal = ({ content, closeModal }: IProps) => {
  const ref = useRef(null);
  useClickAway(ref, closeModal);
  return (
    <Root>
      <Container>
        <Content ref={ref}>
          <ErrorIcon sizeInPx={100} />
          <Message className="text-gray-600">{content}</Message>
        </Content>
      </Container>
    </Root>
  );
};

export default ErrorModal;
