import { BigNumber } from "@ethersproject/bignumber";
import { hexStripZeros } from "@ethersproject/bytes";
import { Web3Provider } from "@ethersproject/providers";
import { SupportedChainId } from "../chains";

interface SwitchNetworkArguments {
  library: Web3Provider;
  chainId?: SupportedChainId;
}

export async function switchToNetwork({
  library,
  chainId,
}: SwitchNetworkArguments): Promise<null | void> {
  if (!library?.provider?.request || !library) {
    return;
  }

  if (!chainId && library?.getNetwork) {
    ({ chainId } = await library.getNetwork());
  }

  const formattedChainId = hexStripZeros(BigNumber.from(chainId).toHexString());

  await library.provider.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: formattedChainId }],
  });
}
