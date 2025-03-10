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
import { default as VestingScheduleFactoryContractJson } from "../ayin/VestingScheduleFactory.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";

// Custom types for the contract
export namespace VestingScheduleFactoryTypes {
  export type Fields = {
    vestingScheduleTemplateId: HexString;
    owner_: Address;
  };

  export type State = ContractState<Fields>;

  export type VestingScheduleCreatedEvent = ContractEvent<{
    schedule: HexString;
    token: HexString;
    beneiciary: Address;
    amount: bigint;
    start: bigint;
    duration: bigint;
  }>;

  export interface CallMethodTable {
    getVestingScheduleByAddress: {
      params: CallContractParams<{ address: Address }>;
      result: CallContractResult<HexString>;
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

class Factory extends ContractFactory<
  VestingScheduleFactoryInstance,
  VestingScheduleFactoryTypes.Fields
> {
  consts = {
    PermissionsErrorCodes: { Forbidden: BigInt(0) },
    ErrorCodes: { InvalidDuration: BigInt(0), InvalidAmount: BigInt(1) },
  };

  at(address: string): VestingScheduleFactoryInstance {
    return new VestingScheduleFactoryInstance(address);
  }

  tests = {
    onlyOwner: async (
      params: TestContractParams<
        VestingScheduleFactoryTypes.Fields,
        { caller: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "onlyOwner", params, getContractByCodeHash);
    },
    changeOwner: async (
      params: TestContractParams<
        VestingScheduleFactoryTypes.Fields,
        { newOwner: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "changeOwner", params, getContractByCodeHash);
    },
    createSchedule: async (
      params: TestContractParams<
        VestingScheduleFactoryTypes.Fields,
        {
          tokenId: HexString;
          amount: bigint;
          beneficiary: Address;
          duration: bigint;
        }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "createSchedule", params, getContractByCodeHash);
    },
    getVestingScheduleByAddress: async (
      params: TestContractParams<
        VestingScheduleFactoryTypes.Fields,
        { address: Address }
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getVestingScheduleByAddress", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const VestingScheduleFactory = new Factory(
  Contract.fromJson(
    VestingScheduleFactoryContractJson,
    "",
    "e81f54e3e8c5776aad49ff648c69d78fb1df48f7fe14e7c3b3abf922121b49c4"
  )
);
registerContract(VestingScheduleFactory);

// Use this class to interact with the blockchain
export class VestingScheduleFactoryInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<VestingScheduleFactoryTypes.State> {
    return fetchContractState(VestingScheduleFactory, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeVestingScheduleCreatedEvent(
    options: SubscribeOptions<VestingScheduleFactoryTypes.VestingScheduleCreatedEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      VestingScheduleFactory.contract,
      this,
      options,
      "VestingScheduleCreated",
      fromCount
    );
  }

  methods = {
    getVestingScheduleByAddress: async (
      params: VestingScheduleFactoryTypes.CallMethodParams<"getVestingScheduleByAddress">
    ): Promise<
      VestingScheduleFactoryTypes.CallMethodResult<"getVestingScheduleByAddress">
    > => {
      return callMethod(
        VestingScheduleFactory,
        this,
        "getVestingScheduleByAddress",
        params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends VestingScheduleFactoryTypes.MultiCallParams>(
    calls: Calls
  ): Promise<VestingScheduleFactoryTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      VestingScheduleFactory,
      this,
      calls,
      getContractByCodeHash
    )) as VestingScheduleFactoryTypes.MultiCallResults<Calls>;
  }
}
