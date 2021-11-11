import ErrorModal from "lib/components/error-modal";
import SupportedNetworks from "../../connected-wallet/components/supported-networks";

export enum WalletConnectionErrorType {
  NO_METAMASK = "NO_METAMASK",
  UNSUPPORTED_CHAIN_ID = "UNSUPPORTED_CHAIN_ID ",
  GENERIC = "GENERIC",
}

interface IProps {
  walletConnectionError: WalletConnectionErrorType;
  closeModal: () => void;
}

const WalletConnectionError = ({ walletConnectionError, closeModal }: IProps) => {
  function getErrorMessageBasedOnErrorType() {
    if (walletConnectionError === WalletConnectionErrorType.NO_METAMASK) {
      return (
        <div className="flex flex-col items-center">
          <span>
            Error connecting your wallet. Please install the metamask browser extension in order to
            use this application.
          </span>
          <a className="text-blue-600 mt-6" href="https://metamask.io" target="_blank">
            https://metamask.io
          </a>
        </div>
      );
    }
    if (walletConnectionError === WalletConnectionErrorType.UNSUPPORTED_CHAIN_ID) {
      return (
        <div className="flex flex-col items-center">
          <span className="mb-8">
            Please ensure your wallet is connected to one of the supported networks before trying to
            establish a connection:
          </span>
          <SupportedNetworks close={closeModal} />
        </div>
      );
    }
    return "Error connecting your wallet. Please try again.";
  }

  return <ErrorModal content={getErrorMessageBasedOnErrorType()} closeModal={closeModal} />;
};

export default WalletConnectionError;
