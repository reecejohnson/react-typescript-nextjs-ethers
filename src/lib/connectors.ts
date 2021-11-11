import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { CHAIN_INFORMATION, SupportedChainId, supportedChainIds } from "./chains";

export const injected = new InjectedConnector({ supportedChainIds });

export const walletconnect = new WalletConnectConnector({
  rpc: { [SupportedChainId.ROPSTEN]: CHAIN_INFORMATION[SupportedChainId.ROPSTEN].rpcUrl },
  qrcode: true,
});

export enum ConnectorNames {
  Injected = "Injected",
  WalletConnect = "WalletConnect",
}

export const connectorsByName: {
  [connectorName in ConnectorNames]: InjectedConnector | WalletConnectConnector;
} = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};
