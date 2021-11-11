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

const DownIcon = ({ sizeInPx }: IProps) => {
  const size = sizeInPx ?? 20;
  return (
    <Root size={size}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </Root>
  );
};

export default DownIcon;
