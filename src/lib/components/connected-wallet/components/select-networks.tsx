import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { getNetwork, supportedChainIds } from "lib/chains";
import SupportedNetworks from "./supported-networks";
import ErrorIcon from "./error-icon";
import { useRef } from "react";
import { useClickAway } from "react-use";

const Root = styled.div`
  position: fixed;
  top: 80px;
  min-width: 250px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(247, 248, 250);
  border-radius: 12px;
  color: grey;
  padding: 20px;
  z-index: 1;
`;

interface IProps {
  hideSelectNetwork: () => void;
}

const SelectNetworks = ({ hideSelectNetwork }: IProps) => {
  const { chainId } = useWeb3React<Web3Provider>();
  const isUnsupportedNetwork = !supportedChainIds.includes(chainId);
  const ref = useRef(null);
  useClickAway(ref, hideSelectNetwork);

  return (
    <Root>
      <div ref={ref} className="flex flex-col">
        {isUnsupportedNetwork && chainId && (
          <div className="flex items-center pl-2 mb-4 justify-between">
            <div className="flex items-center mb-1">
              <ErrorIcon />
              <span className="font-semibold">{getNetwork(chainId)} is not supported</span>
            </div>
          </div>
        )}
        <span>Supported Networks</span>
        <SupportedNetworks close={hideSelectNetwork} />
      </div>
    </Root>
  );
};

export default SelectNetworks;
