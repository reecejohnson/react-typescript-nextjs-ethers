import { useState } from "react";
import { switchToNetwork } from "lib/utils/switchNetwork";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { getNetwork, supportedChainIds } from "lib/chains";
import ErrorModal from "lib/components/error-modal";
import EthIcon from "lib/components/eth-icon";

interface IProps {
  close: () => void;
}

const SupportedNetworks = ({ close }: IProps) => {
  const { library } = useWeb3React<Web3Provider>();
  const [walletNotConnectedError, setWalletNotConnectedError] = useState<boolean>(false);
  const [networkSwitchError, setNetworkSwitchError] = useState<boolean>(false);

  async function handleNetworkSwitch(supportedChainId: number) {
    if (!library) {
      setWalletNotConnectedError(true);
      return;
    }
    try {
      await switchToNetwork({ library, chainId: supportedChainId });
      close();
    } catch (error) {
      console.log(error);
      setNetworkSwitchError(true);
    }
  }

  return (
    <>
      {supportedChainIds.map((supportedChainId: number) => {
        return (
          <button
            className="flex items-center pl-2 mt-3 justify-between"
            onClick={() => handleNetworkSwitch(supportedChainId)}
          >
            <div className="flex items-center mb-1">
              <EthIcon />
              <span className="font-semibold">{getNetwork(supportedChainId)}</span>
            </div>
          </button>
        );
      })}
      {walletNotConnectedError && (
        <p className="text-red-500 font-medium font-base mt-6 max-w-sm">
          You must connect your wallet before you can switch network.
        </p>
      )}
      {networkSwitchError && (
        <ErrorModal
          content="The selected network is either not installed or not supported"
          closeModal={() => setNetworkSwitchError(false)}
        />
      )}
    </>
  );
};

export default SupportedNetworks;
