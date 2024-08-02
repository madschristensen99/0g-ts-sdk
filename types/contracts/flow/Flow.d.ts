import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "./common.js";
export type SubmissionNodeStruct = {
    root: BytesLike;
    height: BigNumberish;
};
export type SubmissionNodeStructOutput = [root: string, height: bigint] & {
    root: string;
    height: bigint;
};
export type SubmissionStruct = {
    length: BigNumberish;
    tags: BytesLike;
    nodes: SubmissionNodeStruct[];
};
export type SubmissionStructOutput = [
    length: bigint,
    tags: string,
    nodes: SubmissionNodeStructOutput[]
] & {
    length: bigint;
    tags: string;
    nodes: SubmissionNodeStructOutput[];
};
export type MineContextStruct = {
    epoch: BigNumberish;
    mineStart: BigNumberish;
    flowRoot: BytesLike;
    flowLength: BigNumberish;
    blockDigest: BytesLike;
    digest: BytesLike;
};
export type MineContextStructOutput = [
    epoch: bigint,
    mineStart: bigint,
    flowRoot: string,
    flowLength: bigint,
    blockDigest: string,
    digest: string
] & {
    epoch: bigint;
    mineStart: bigint;
    flowRoot: string;
    flowLength: bigint;
    blockDigest: string;
    digest: string;
};
export type EpochRangeStruct = {
    start: BigNumberish;
    end: BigNumberish;
};
export type EpochRangeStructOutput = [start: bigint, end: bigint] & {
    start: bigint;
    end: bigint;
};
export type EpochRangeWithContextDigestStruct = {
    start: BigNumberish;
    end: BigNumberish;
    digest: BytesLike;
};
export type EpochRangeWithContextDigestStructOutput = [
    start: bigint,
    end: bigint,
    digest: string
] & {
    start: bigint;
    end: bigint;
    digest: string;
};
export interface FlowInterface extends Interface {
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE" | "PAUSER_ROLE" | "batchSubmit" | "blocksPerEpoch" | "epoch" | "epochStartPosition" | "firstBlock" | "getContext" | "getEpochRange" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "initialize" | "initialized" | "makeContext" | "makeContextFixedTimes" | "makeContextWithResult" | "market" | "numSubmissions" | "pause" | "paused" | "queryContextAtPosition" | "renounceRole" | "revokeRole" | "rootHistory" | "submissionIndex" | "submit" | "supportsInterface" | "tree" | "unpause"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "NewEpoch" | "Paused" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked" | "Submit" | "Unpaused"): EventFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PAUSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "batchSubmit", values: [SubmissionStruct[]]): string;
    encodeFunctionData(functionFragment: "blocksPerEpoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "epochStartPosition", values?: undefined): string;
    encodeFunctionData(functionFragment: "firstBlock", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContext", values?: undefined): string;
    encodeFunctionData(functionFragment: "getEpochRange", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "initialized", values?: undefined): string;
    encodeFunctionData(functionFragment: "makeContext", values?: undefined): string;
    encodeFunctionData(functionFragment: "makeContextFixedTimes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "makeContextWithResult", values?: undefined): string;
    encodeFunctionData(functionFragment: "market", values?: undefined): string;
    encodeFunctionData(functionFragment: "numSubmissions", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "queryContextAtPosition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "rootHistory", values?: undefined): string;
    encodeFunctionData(functionFragment: "submissionIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "submit", values: [SubmissionStruct]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tree", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PAUSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "batchSubmit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blocksPerEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epochStartPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "firstBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getEpochRange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeContext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeContextFixedTimes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeContextWithResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numSubmissions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queryContextAtPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rootHistory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submissionIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tree", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
}
export declare namespace NewEpochEvent {
    type InputTuple = [
        sender: AddressLike,
        index: BigNumberish,
        startMerkleRoot: BytesLike,
        submissionIndex: BigNumberish,
        flowLength: BigNumberish,
        context: BytesLike
    ];
    type OutputTuple = [
        sender: string,
        index: bigint,
        startMerkleRoot: string,
        submissionIndex: bigint,
        flowLength: bigint,
        context: string
    ];
    interface OutputObject {
        sender: string;
        index: bigint;
        startMerkleRoot: string;
        submissionIndex: bigint;
        flowLength: bigint;
        context: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SubmitEvent {
    type InputTuple = [
        sender: AddressLike,
        identity: BytesLike,
        submissionIndex: BigNumberish,
        startPos: BigNumberish,
        length: BigNumberish,
        submission: SubmissionStruct
    ];
    type OutputTuple = [
        sender: string,
        identity: string,
        submissionIndex: bigint,
        startPos: bigint,
        length: bigint,
        submission: SubmissionStructOutput
    ];
    interface OutputObject {
        sender: string;
        identity: string;
        submissionIndex: bigint;
        startPos: bigint;
        length: bigint;
        submission: SubmissionStructOutput;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Flow extends BaseContract {
    connect(runner?: ContractRunner | null): Flow;
    waitForDeployment(): Promise<this>;
    interface: FlowInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    PAUSER_ROLE: TypedContractMethod<[], [string], "view">;
    batchSubmit: TypedContractMethod<[
        submissions: SubmissionStruct[]
    ], [
        [
            bigint[],
            string[],
            bigint[],
            bigint[]
        ] & {
            indexes: bigint[];
            digests: string[];
            startIndexes: bigint[];
            lengths: bigint[];
        }
    ], "payable">;
    blocksPerEpoch: TypedContractMethod<[], [bigint], "view">;
    epoch: TypedContractMethod<[], [bigint], "view">;
    epochStartPosition: TypedContractMethod<[], [bigint], "view">;
    firstBlock: TypedContractMethod<[], [bigint], "view">;
    getContext: TypedContractMethod<[], [MineContextStructOutput], "view">;
    getEpochRange: TypedContractMethod<[
        digest: BytesLike
    ], [
        EpochRangeStructOutput
    ], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getRoleMember: TypedContractMethod<[
        role: BytesLike,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getRoleMemberCount: TypedContractMethod<[role: BytesLike], [bigint], "view">;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    initialize: TypedContractMethod<[market_: AddressLike], [void], "nonpayable">;
    initialized: TypedContractMethod<[], [boolean], "view">;
    makeContext: TypedContractMethod<[], [void], "nonpayable">;
    makeContextFixedTimes: TypedContractMethod<[
        cnt: BigNumberish
    ], [
        void
    ], "nonpayable">;
    makeContextWithResult: TypedContractMethod<[
    ], [
        MineContextStructOutput
    ], "nonpayable">;
    market: TypedContractMethod<[], [string], "view">;
    numSubmissions: TypedContractMethod<[], [bigint], "view">;
    pause: TypedContractMethod<[], [void], "nonpayable">;
    paused: TypedContractMethod<[], [boolean], "view">;
    queryContextAtPosition: TypedContractMethod<[
        targetPosition: BigNumberish
    ], [
        EpochRangeWithContextDigestStructOutput
    ], "nonpayable">;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    rootHistory: TypedContractMethod<[], [string], "view">;
    submissionIndex: TypedContractMethod<[], [bigint], "view">;
    submit: TypedContractMethod<[
        submission: SubmissionStruct
    ], [
        [bigint, string, bigint, bigint]
    ], "payable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    tree: TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            currentLength: bigint;
            unstagedHeight: bigint;
        }
    ], "view">;
    unpause: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "PAUSER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "batchSubmit"): TypedContractMethod<[
        submissions: SubmissionStruct[]
    ], [
        [
            bigint[],
            string[],
            bigint[],
            bigint[]
        ] & {
            indexes: bigint[];
            digests: string[];
            startIndexes: bigint[];
            lengths: bigint[];
        }
    ], "payable">;
    getFunction(nameOrSignature: "blocksPerEpoch"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "epoch"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "epochStartPosition"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "firstBlock"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getContext"): TypedContractMethod<[], [MineContextStructOutput], "view">;
    getFunction(nameOrSignature: "getEpochRange"): TypedContractMethod<[digest: BytesLike], [EpochRangeStructOutput], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getRoleMember"): TypedContractMethod<[
        role: BytesLike,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getRoleMemberCount"): TypedContractMethod<[role: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[market_: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "initialized"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "makeContext"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "makeContextFixedTimes"): TypedContractMethod<[cnt: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "makeContextWithResult"): TypedContractMethod<[], [MineContextStructOutput], "nonpayable">;
    getFunction(nameOrSignature: "market"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "numSubmissions"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "pause"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "queryContextAtPosition"): TypedContractMethod<[
        targetPosition: BigNumberish
    ], [
        EpochRangeWithContextDigestStructOutput
    ], "nonpayable">;
    getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "rootHistory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "submissionIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "submit"): TypedContractMethod<[
        submission: SubmissionStruct
    ], [
        [bigint, string, bigint, bigint]
    ], "payable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "tree"): TypedContractMethod<[
    ], [
        [bigint, bigint] & {
            currentLength: bigint;
            unstagedHeight: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "unpause"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "NewEpoch"): TypedContractEvent<NewEpochEvent.InputTuple, NewEpochEvent.OutputTuple, NewEpochEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    getEvent(key: "Submit"): TypedContractEvent<SubmitEvent.InputTuple, SubmitEvent.OutputTuple, SubmitEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    filters: {
        "NewEpoch(address,uint256,bytes32,uint256,uint256,bytes32)": TypedContractEvent<NewEpochEvent.InputTuple, NewEpochEvent.OutputTuple, NewEpochEvent.OutputObject>;
        NewEpoch: TypedContractEvent<NewEpochEvent.InputTuple, NewEpochEvent.OutputTuple, NewEpochEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        "Submit(address,bytes32,uint256,uint256,uint256,tuple)": TypedContractEvent<SubmitEvent.InputTuple, SubmitEvent.OutputTuple, SubmitEvent.OutputObject>;
        Submit: TypedContractEvent<SubmitEvent.InputTuple, SubmitEvent.OutputTuple, SubmitEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    };
}
//# sourceMappingURL=Flow.d.ts.map