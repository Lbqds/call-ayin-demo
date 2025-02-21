/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  SubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as FeeCollectorPerTokenPairImplContractJson } from "../examples/FeeCollectorPerTokenPairImpl.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace FeeCollectorPerTokenPairImplTypes {
  export type Fields = {
    tokenPairFactory: HexString;
    tokenPair: HexString;
  };

  export type State = ContractState<Fields>;
}

class Factory extends ContractFactory<
  FeeCollectorPerTokenPairImplInstance,
  FeeCollectorPerTokenPairImplTypes.Fields
> {
  consts = {
    ErrorCodes: {
      ReserveOverflow: BigInt(0),
      InsufficientInitLiquidity: BigInt(1),
      InsufficientLiquidityMinted: BigInt(2),
      InsufficientLiquidityBurned: BigInt(3),
      InvalidToAddress: BigInt(4),
      InsufficientLiquidity: BigInt(5),
      InvalidTokenInId: BigInt(6),
      InvalidCalleeId: BigInt(7),
      InvalidK: BigInt(8),
      InsufficientOutputAmount: BigInt(9),
      InsufficientInputAmount: BigInt(10),
      IdenticalTokenIds: BigInt(11),
      Expired: BigInt(12),
      InsufficientToken0Amount: BigInt(13),
      InsufficientToken1Amount: BigInt(14),
      TokenNotExist: BigInt(15),
      InvalidCaller: BigInt(16),
      FeeCollectorNotEnabled: BigInt(17),
    },
  };

  at(address: string): FeeCollectorPerTokenPairImplInstance {
    return new FeeCollectorPerTokenPairImplInstance(address);
  }

  tests = {
    collectFee: async (
      params: TestContractParams<
        FeeCollectorPerTokenPairImplTypes.Fields,
        { from: Address; amount: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "collectFee", params);
    },
    withdraw: async (
      params: TestContractParams<
        FeeCollectorPerTokenPairImplTypes.Fields,
        { to: Address; amount: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdraw", params);
    },
    destroy: async (
      params: TestContractParams<
        FeeCollectorPerTokenPairImplTypes.Fields,
        { to: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "destroy", params);
    },
    collectFeeManually: async (
      params: Omit<
        TestContractParams<FeeCollectorPerTokenPairImplTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "collectFeeManually", params);
    },
  };
}

// Use this object to test and deploy the contract
export const FeeCollectorPerTokenPairImpl = new Factory(
  Contract.fromJson(
    FeeCollectorPerTokenPairImplContractJson,
    "",
    "854934781b951bef0fe2035d06ef61bc11021157d31f464ac25364f5ef600c53"
  )
);

// Use this class to interact with the blockchain
export class FeeCollectorPerTokenPairImplInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FeeCollectorPerTokenPairImplTypes.State> {
    return fetchContractState(FeeCollectorPerTokenPairImpl, this);
  }
}
