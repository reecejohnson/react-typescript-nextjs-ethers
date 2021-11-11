import { formatEthAddress } from "eth-address";
import { Image as AccountImage } from "@davatar/react";
import { getNetwork, supportedChainIds } from "lib/chains";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { useState } from "react";
import SelectNetworks from "./components/select-networks";
import EthIcon from "../eth-icon";
import ErrorIcon from "./components/error-icon";

const DownIcon = styled.div`
  width: 14px;
  margin-left: 5px;
`;

const Outline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(247, 248, 250);
  border-radius: 12px;
  padding: 0 15px;
  height: 45px;
  color: grey;
  margin-right: 10px;
`;

const Icon = styled.div`
  margin-left: 5px;
`;

const ConnectedWallet = () => {
  const { account, chainId } = useWeb3React<Web3Provider>();
  const [showSupportedNetworks, setShowSupportedNetworks] = useState<boolean>(false);

  const isSupportedNetwork = supportedChainIds.includes(chainId);

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Outline>
          <button
            className="flex items-center"
            onClick={() => setShowSupportedNetworks(!showSupportedNetworks)}
          >
            {isSupportedNetwork ? <EthIcon /> : <ErrorIcon />}
            <span className="font-semibold">{getNetwork(chainId)}</span>
            <DownIcon />
          </button>
        </Outline>
        <Outline>
          <span className="font-semibold">{formatEthAddress(account)}</span>
          <Icon>
            <AccountImage size={18} address={account} />
          </Icon>
        </Outline>
      </div>
      {showSupportedNetworks && (
        <SelectNetworks hideSelectNetwork={() => setShowSupportedNetworks(false)} />
      )}
    </div>
  );
};

export default ConnectedWallet;
