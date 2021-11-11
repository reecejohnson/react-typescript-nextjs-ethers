import styled from "styled-components";

const Root = styled.div<{ size: number }>`
  position: relative;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  margin-right: 7.5px;
`;

interface IProps {
  sizeInPx?: number;
}

const ErrorIcon = ({ sizeInPx }: IProps) => {
  const size = sizeInPx ?? 20;
  return (
    <Root size={size}>
      <svg
        height={size}
        width={size}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9703 17.6563C10.0166 18.1146 7.9834 18.1146 6.02975 17.6563C3.20841 16.9945 1.00549 14.7916 0.343698 11.9702C-0.114566 10.0166 -0.114566 7.9834 0.343698 6.02975C1.00549 3.20841 3.20841 1.00549 6.02975 0.343697C7.9834 -0.114568 10.0166 -0.114566 11.9703 0.343699C14.7916 1.00549 16.9945 3.20841 17.6563 6.02974C18.1146 7.9834 18.1146 10.0166 17.6563 11.9703C16.9945 14.7916 14.7916 16.9945 11.9703 17.6563ZM9.00003 10.9146C8.47133 10.9146 8.04274 11.3432 8.04274 11.8719C8.04274 12.4006 8.47133 12.8292 9.00003 12.8292C9.52872 12.8292 9.95731 12.4006 9.95731 11.8719C9.95731 11.3432 9.52872 10.9146 9.00003 10.9146ZM9.00003 10.1966C8.60351 10.1966 8.28206 9.87519 8.28206 9.47867L8.28206 5.64952C8.28206 5.253 8.60351 4.93156 9.00003 4.93156C9.39655 4.93156 9.71799 5.253 9.71799 5.64952L9.71799 9.47867C9.71799 9.87519 9.39655 10.1966 9.00003 10.1966Z"
          fill="#EF4444"
        />
      </svg>
    </Root>
  );
};

export default ErrorIcon;
