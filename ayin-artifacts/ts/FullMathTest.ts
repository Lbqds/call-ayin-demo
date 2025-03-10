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
import { default as FullMathTestContractJson } from "../examples/FullMathTest.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";

// Custom types for the contract
export namespace FullMathTestTypes {
  export type State = Omit<ContractState<any>, "fields">;

  export interface CallMethodTable {
    fullMul: {
      params: CallContractParams<{ x: bigint; y: bigint }>;
      result: CallContractResult<[bigint, bigint]>;
    };
    mulDiv: {
      params: CallContractParams<{ a: bigint; b: bigint; denominator: bigint }>;
      result: CallContractResult<bigint>;
    };
    fraction: {
      params: CallContractParams<{ numerator: bigint; denominator: bigint }>;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<FullMathTestInstance, {}> {
  consts = {
    Resolution: BigInt(112),
    ErrorCodes: {
      FullDivOverflow: BigInt(0),
      DivByZero: BigInt(1),
      FractionOverflow: BigInt(2),
      PeriodNotElapsed: BigInt(3),
      InvalidToken: BigInt(4),
    },
  };

  at(address: string): FullMathTestInstance {
    return new FullMathTestInstance(address);
  }

  tests = {
    fullMul: async (
      params: Omit<
        TestContractParams<never, { x: bigint; y: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResult<[bigint, bigint]>> => {
      return testMethod(this, "fullMul", params, getContractByCodeHash);
    },
    mulDiv: async (
      params: Omit<
        TestContractParams<
          never,
          { a: bigint; b: bigint; denominator: bigint }
        >,
        "initialFields"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "mulDiv", params, getContractByCodeHash);
    },
    fraction: async (
      params: Omit<
        TestContractParams<never, { numerator: bigint; denominator: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "fraction", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const FullMathTest = new Factory(
  Contract.fromJson(
    FullMathTestContractJson,
    "",
    "d6834220b59d306adb6cd548433f9e1ab4f20c155cad9c80ef89be27cb82a286"
  )
);
registerContract(FullMathTest);

// Use this class to interact with the blockchain
export class FullMathTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FullMathTestTypes.State> {
    return fetchContractState(FullMathTest, this);
  }

  methods = {
    fullMul: async (
      params: FullMathTestTypes.CallMethodParams<"fullMul">
    ): Promise<FullMathTestTypes.CallMethodResult<"fullMul">> => {
      return callMethod(
        FullMathTest,
        this,
        "fullMul",
        params,
        getContractByCodeHash
      );
    },
    mulDiv: async (
      params: FullMathTestTypes.CallMethodParams<"mulDiv">
    ): Promise<FullMathTestTypes.CallMethodResult<"mulDiv">> => {
      return callMethod(
        FullMathTest,
        this,
        "mulDiv",
        params,
        getContractByCodeHash
      );
    },
    fraction: async (
      params: FullMathTestTypes.CallMethodParams<"fraction">
    ): Promise<FullMathTestTypes.CallMethodResult<"fraction">> => {
      return callMethod(
        FullMathTest,
        this,
        "fraction",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends FullMathTestTypes.MultiCallParams>(
    calls: Calls
  ): Promise<FullMathTestTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      FullMathTest,
      this,
      calls,
      getContractByCodeHash
    )) as FullMathTestTypes.MultiCallResults<Calls>;
  }
}
