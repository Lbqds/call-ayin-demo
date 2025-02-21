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
import { default as StakingAccountContractJson } from "../ayin/StakingAccount.ral.json";
import { getContractByCodeHash, registerContract } from "./contracts";

// Custom types for the contract
export namespace StakingAccountTypes {
  export type Fields = {
    tokenId: HexString;
    rewardsTokenId: HexString;
    staker: Address;
    parentContractAddress: Address;
    amountStaked: bigint;
    rewardPerTokenPaid: bigint;
    rewards: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getTokenId: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getRewardsTokenId: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getStaker: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<Address>;
    };
    getAmountStaked: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewardPerTokenPaid: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getRewards: {
      params: Omit<CallContractParams<{}>, "args">;
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

class Factory extends ContractFactory<
  StakingAccountInstance,
  StakingAccountTypes.Fields
> {
  consts = {
    ErrorCodes: {
      UnauthorizedAccess: BigInt(0),
      InsufficientBalance: BigInt(1),
    },
  };

  at(address: string): StakingAccountInstance {
    return new StakingAccountInstance(address);
  }

  tests = {
    getTokenId: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getTokenId", params, getContractByCodeHash);
    },
    getRewardsTokenId: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<HexString>> => {
      return testMethod(this, "getRewardsTokenId", params, getContractByCodeHash);
    },
    getStaker: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<Address>> => {
      return testMethod(this, "getStaker", params, getContractByCodeHash);
    },
    getAmountStaked: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getAmountStaked", params, getContractByCodeHash);
    },
    getRewardPerTokenPaid: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getRewardPerTokenPaid", params, getContractByCodeHash);
    },
    getRewards: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getRewards", params, getContractByCodeHash);
    },
    setRewards: async (
      params: TestContractParams<
        StakingAccountTypes.Fields,
        { newRewards: bigint; newRewardPerToken: bigint }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setRewards", params, getContractByCodeHash);
    },
    stake: async (
      params: TestContractParams<StakingAccountTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "stake", params, getContractByCodeHash);
    },
    unstake: async (
      params: TestContractParams<StakingAccountTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "unstake", params, getContractByCodeHash);
    },
    claimRewards: async (
      params: Omit<
        TestContractParams<StakingAccountTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "claimRewards", params, getContractByCodeHash);
    },
  };
}

// Use this object to test and deploy the contract
export const StakingAccount = new Factory(
  Contract.fromJson(
    StakingAccountContractJson,
    "",
    "fcc04774d79eddbeb3fa437b898b159e647b8eca0c95510b98f64320d19ca707"
  )
);
registerContract(StakingAccount);

// Use this class to interact with the blockchain
export class StakingAccountInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<StakingAccountTypes.State> {
    return fetchContractState(StakingAccount, this);
  }

  methods = {
    getTokenId: async (
      params?: StakingAccountTypes.CallMethodParams<"getTokenId">
    ): Promise<StakingAccountTypes.CallMethodResult<"getTokenId">> => {
      return callMethod(
        StakingAccount,
        this,
        "getTokenId",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardsTokenId: async (
      params?: StakingAccountTypes.CallMethodParams<"getRewardsTokenId">
    ): Promise<StakingAccountTypes.CallMethodResult<"getRewardsTokenId">> => {
      return callMethod(
        StakingAccount,
        this,
        "getRewardsTokenId",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getStaker: async (
      params?: StakingAccountTypes.CallMethodParams<"getStaker">
    ): Promise<StakingAccountTypes.CallMethodResult<"getStaker">> => {
      return callMethod(
        StakingAccount,
        this,
        "getStaker",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getAmountStaked: async (
      params?: StakingAccountTypes.CallMethodParams<"getAmountStaked">
    ): Promise<StakingAccountTypes.CallMethodResult<"getAmountStaked">> => {
      return callMethod(
        StakingAccount,
        this,
        "getAmountStaked",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewardPerTokenPaid: async (
      params?: StakingAccountTypes.CallMethodParams<"getRewardPerTokenPaid">
    ): Promise<
      StakingAccountTypes.CallMethodResult<"getRewardPerTokenPaid">
    > => {
      return callMethod(
        StakingAccount,
        this,
        "getRewardPerTokenPaid",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getRewards: async (
      params?: StakingAccountTypes.CallMethodParams<"getRewards">
    ): Promise<StakingAccountTypes.CallMethodResult<"getRewards">> => {
      return callMethod(
        StakingAccount,
        this,
        "getRewards",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends StakingAccountTypes.MultiCallParams>(
    calls: Calls
  ): Promise<StakingAccountTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      StakingAccount,
      this,
      calls,
      getContractByCodeHash
    )) as StakingAccountTypes.MultiCallResults<Calls>;
  }
}
