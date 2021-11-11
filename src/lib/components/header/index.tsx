import { useEffect, useState } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { NoEthereumProviderError } from "@web3-react/injected-connector";
import { Web3Provider } from "@ethersproject/providers";
import { ConnectorNames, connectorsByName } from "lib/connectors";
import { md } from "lib/constants/screen-sizes";
import ErrorIcon from "../connected-wallet/components/error-icon";
import { getNetwork, supportedChainIds } from "../../chains";
import { formatEthAddress } from "eth-address";
import { Image as AccountImage } from "@davatar/react";
import SelectNetworks from "../connected-wallet/components/select-networks";
import WalletConnectionError, {
  WalletConnectionErrorType,
} from "./components/wallet-connection-error";
import { useEagerConnect } from "../../hooks/useEagerConnect";
import { useInactiveListener } from "../../hooks/useInactiveLisenter";
import DownIcon from "../connected-wallet/components/down-icon";
import EthIcon from "../eth-icon";

const Root = styled.div`
  position: fixed;
  max-width: 1650px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  padding: 20px 0;
  z-index: 100;
`;

const Title = styled.div`
  color: #4b5563;
  margin-left: 10px;

  ${md} {
    margin-left: 25px;
  }
`;

const DownIconContainer = styled.div`
  width: 14px;
  margin-left: 5px;
`;

const Outline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  border: 1px solid;
  border-radius: 12px;
  padding: 0 15px;
  height: 45px;
  color: grey;
  margin-right: 10px;
`;

const Icon = styled.div`
  margin-left: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 15px;
  border-radius: 12px;
  padding: 0 20px;
  border: 1px solid;
  color: grey;
  font-weight: 600;
`;


const Header = () => {
  const { activate, account, chainId, connector } = useWeb3React<Web3Provider>();
  const [showSupportedNetworks, setShowSupportedNetworks] = useState<boolean>(false);
  const [walletConnectionError, setWalletConnectionError] =
    useState<WalletConnectionErrorType>(undefined);

  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const triedEager = useEagerConnect();

  useInactiveListener(!triedEager || !!activatingConnector);
  const isSupportedNetwork = supportedChainIds.includes(chainId);

  async function connectWallet(connectorName: ConnectorNames) {
    try {
      await activate(connectorsByName[connectorName], undefined, true);
    } catch (e) {
      console.log(e);
      if (e instanceof NoEthereumProviderError) {
        setWalletConnectionError(WalletConnectionErrorType.NO_METAMASK);
        return;
      }
      if (e.name === "UnsupportedChainIdError") {
        setWalletConnectionError(WalletConnectionErrorType.UNSUPPORTED_CHAIN_ID);
        return;
      }
      setWalletConnectionError(WalletConnectionErrorType.GENERIC);
    }
  }

  function getNetworkText() {
    if (chainId === undefined) {
      return "Ethereum";
    }
    return getNetwork(chainId);
  }

  function NetworkIcon() {
    if (isSupportedNetwork || !chainId) {
      return <EthIcon />;
    }
    return <ErrorIcon />;
  }

  return (
    <div className="flex justify-center w-full">
      <Root>
        <div className="flex items-center">
          <Title className="text-2xl md:text-3xl font-bold tracking-tight gradient-text  mx-auto">
            dApp Starter
          </Title>
        </div>

        <div className="flex items-center">
          <div className="flex flex-col">
            <div className="flex items-center">
              <Outline>
                <button
                  className="flex items-center"
                  onClick={() => setShowSupportedNetworks(!showSupportedNetworks)}
                >
                  <NetworkIcon />
                  <span className="font-semibold">{getNetworkText()}</span>
                  <DownIconContainer>
                    <DownIcon />
                  </DownIconContainer>
                </button>
              </Outline>
            </div>
            {showSupportedNetworks && (
              <SelectNetworks hideSelectNetwork={() => setShowSupportedNetworks(false)} />
            )}
          </div>

          {!account ? (
            <div className="flex items-center">
              <Button
                className="border-2 p-2 gray-600"
                onClick={() => {
                  setActivatingConnector(connectorsByName[ConnectorNames.Injected]);
                  return connectWallet(ConnectorNames.Injected);
                }}
              >
                <span>Connect with Metamask</span>
              </Button>
            </div>
          ) : (
            <>
              <Outline>
                <span className="font-semibold">{formatEthAddress(account)}</span>
                <Icon>
                  <AccountImage size={18} address={account} />
                </Icon>
              </Outline>
            </>
          )}
        </div>
      </Root>
      {walletConnectionError && (
        <WalletConnectionError
          walletConnectionError={walletConnectionError}
          closeModal={() => setWalletConnectionError(undefined)}
        />
      )}
    </div>
  );
};

export default Header;
