import { useEffect } from "react";
import { Contract } from "@ethersproject/contracts";

export function useEventListener(contract: Contract, eventName: string, callback: any) {
  useEffect(() => {
    if (!contract) return;
    contract.on(eventName, callback);
    return () => {
      contract.off(eventName, callback);
    };
  }, []);
}