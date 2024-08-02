import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common.js";
import type { FixedPrice, FixedPriceInterface } from "../FixedPrice.js";
type FixedPriceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class FixedPrice__factory extends ContractFactory {
    constructor(...args: FixedPriceConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<FixedPrice & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): FixedPrice__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610fca806100206000396000f3fe6080604052600436106101025760003560e01c806361ec508211610095578063b15d20da11610064578063b15d20da146102c1578063b4988fd0146102f5578063ca15c87314610315578063d547741f14610335578063da6eb36a1461035557600080fd5b806361ec5082146102565780639010d07c1461026c57806391d148541461028c578063a217fddf146102ac57600080fd5b8063248a9ca3116100d1578063248a9ca3146101b75780632f2ff15d146101f6578063343aad821461021657806336568abe1461023657600080fd5b806301ffc9a71461010e57806314aa90a114610143578063158ef93e14610165578063228cb7331461017f57600080fd5b3661010957005b600080fd5b34801561011a57600080fd5b5061012e610129366004610cdd565b610375565b60405190151581526020015b60405180910390f35b34801561014f57600080fd5b5061016361015e366004610d07565b6103a0565b005b34801561017157600080fd5b5060005461012e9060ff1681565b34801561018b57600080fd5b5060375461019f906001600160a01b031681565b6040516001600160a01b03909116815260200161013a565b3480156101c357600080fd5b506101e86101d2366004610d07565b6000908152600160208190526040909120015490565b60405190815260200161013a565b34801561020257600080fd5b50610163610211366004610d3c565b6103d0565b34801561022257600080fd5b5060365461019f906001600160a01b031681565b34801561024257600080fd5b50610163610251366004610d3c565b6103fb565b34801561026257600080fd5b506101e860355481565b34801561027857600080fd5b5061019f610287366004610d68565b61047e565b34801561029857600080fd5b5061012e6102a7366004610d3c565b61049d565b3480156102b857600080fd5b506101e8600081565b3480156102cd57600080fd5b506101e87fb9d69e0ca90be54a40811e436234a7f7908b87ff2bec27e64f878b166da8e8e581565b34801561030157600080fd5b50610163610310366004610d8a565b6104c8565b34801561032157600080fd5b506101e8610330366004610d07565b6105a2565b34801561034157600080fd5b50610163610350366004610d3c565b6105b9565b34801561036157600080fd5b50610163610370366004610dc6565b6105df565b60006001600160e01b03198216635a05180f60e01b148061039a575061039a826107d2565b92915050565b7fb9d69e0ca90be54a40811e436234a7f7908b87ff2bec27e64f878b166da8e8e56103ca81610807565b50603555565b600082815260016020819052604090912001546103ec81610807565b6103f68383610814565b505050565b6001600160a01b03811633146104705760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61047a8282610836565b5050565b60008281526002602052604081206104969083610858565b9392505050565b60009182526001602090815260408084206001600160a01b0393909316845291905290205460ff1690565b60005460ff16156105275760405162461bcd60e51b8152602060048201526024808201527f5a67496e697469616c697a61626c653a20616c726561647920696e697469616c6044820152631a5e995960e21b6064820152608401610467565b6000805460ff191660011781556105449061053f3390565b610814565b61056e7fb9d69e0ca90be54a40811e436234a7f7908b87ff2bec27e64f878b166da8e8e533610814565b603592909255603680546001600160a01b039283166001600160a01b03199182161790915560378054929093169116179055565b600081815260026020526040812061039a90610864565b600082815260016020819052604090912001546105d581610807565b6103f68383610836565b6036546001600160a01b0316336001600160a01b0316146106425760405162461bcd60e51b815260206004820152601f60248201527f53656e64657220646f6573206e6f742068617665207065726d697373696f6e006044820152606401610467565b600061064e8284610e08565b90506000836035546106609190610e1b565b9050478111156106a85760405162461bcd60e51b81526020600482015260136024820152724e6f7420656e6f75676820706169642066656560681b6044820152606401610467565b60006106b48247610e3a565b90506000836106c38685610e1b565b6106cd9190610e4d565b905060006106db8285610e3a565b9050851561074a576037546040516259e96760e81b8152600481018a9052602481018890526001600160a01b03909116906359e967009084906044016000604051808303818588803b15801561073057600080fd5b505af1158015610744573d6000803e3d6000fd5b50505050505b6037546001600160a01b03166359e967006107658386610e08565b61076f898c610e08565b8a6040518463ffffffff1660e01b8152600401610796929190918252602082015260400190565b6000604051808303818588803b1580156107af57600080fd5b505af11580156107c3573d6000803e3d6000fd5b50505050505050505050505050565b60006001600160e01b03198216637965db0b60e01b148061039a57506301ffc9a760e01b6001600160e01b031983161461039a565b610811813361086e565b50565b61081e82826108c7565b60008281526002602052604090206103f69082610932565b6108408282610947565b60008281526002602052604090206103f690826109ae565b600061049683836109c3565b600061039a825490565b610878828261049d565b61047a57610885816109ed565b6108908360206109ff565b6040516020016108a1929190610e93565b60408051601f198184030181529082905262461bcd60e51b825261046791600401610f08565b6108d1828261049d565b61047a5760008281526001602081815260408084206001600160a01b0386168086529252808420805460ff19169093179092559051339285917f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9190a45050565b6000610496836001600160a01b038416610b9b565b610951828261049d565b1561047a5760008281526001602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610496836001600160a01b038416610bea565b60008260000182815481106109da576109da610f3b565b9060005260206000200154905092915050565b606061039a6001600160a01b03831660145b60606000610a0e836002610e1b565b610a19906002610e08565b67ffffffffffffffff811115610a3157610a31610f51565b6040519080825280601f01601f191660200182016040528015610a5b576020820181803683370190505b509050600360fc1b81600081518110610a7657610a76610f3b565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610aa557610aa5610f3b565b60200101906001600160f81b031916908160001a9053506000610ac9846002610e1b565b610ad4906001610e08565b90505b6001811115610b4c576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110610b0857610b08610f3b565b1a60f81b828281518110610b1e57610b1e610f3b565b60200101906001600160f81b031916908160001a90535060049490941c93610b4581610f67565b9050610ad7565b5083156104965760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610467565b6000818152600183016020526040812054610be25750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561039a565b50600061039a565b60008181526001830160205260408120548015610cd3576000610c0e600183610e3a565b8554909150600090610c2290600190610e3a565b9050818114610c87576000866000018281548110610c4257610c42610f3b565b9060005260206000200154905080876000018481548110610c6557610c65610f3b565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610c9857610c98610f7e565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061039a565b600091505061039a565b600060208284031215610cef57600080fd5b81356001600160e01b03198116811461049657600080fd5b600060208284031215610d1957600080fd5b5035919050565b80356001600160a01b0381168114610d3757600080fd5b919050565b60008060408385031215610d4f57600080fd5b82359150610d5f60208401610d20565b90509250929050565b60008060408385031215610d7b57600080fd5b50508035926020909101359150565b600080600060608486031215610d9f57600080fd5b83359250610daf60208501610d20565b9150610dbd60408501610d20565b90509250925092565b600080600060608486031215610ddb57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561039a5761039a610df2565b6000816000190483118215151615610e3557610e35610df2565b500290565b8181038181111561039a5761039a610df2565b600082610e6a57634e487b7160e01b600052601260045260246000fd5b500490565b60005b83811015610e8a578181015183820152602001610e72565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351610ecb816017850160208801610e6f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351610efc816028840160208801610e6f565b01602801949350505050565b6020815260008251806020840152610f27816040850160208701610e6f565b601f01601f19169190910160400192915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600081610f7657610f76610df2565b506000190190565b634e487b7160e01b600052603160045260246000fdfea26469706673582212206c18e30f17a0145ebc7fa4f6e736d2773235480154bb1e2086402acd2b9bf91b64736f6c63430008100033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PARAMS_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "beforeLength";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "uploadSectors";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "paddingSectors";
            readonly type: "uint256";
        }];
        readonly name: "chargeFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "flow";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getRoleMember";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleMemberCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pricePerSector_";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "flow_";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "reward_";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "initialized";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "pricePerSector";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "reward";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "pricePerSector_";
            readonly type: "uint256";
        }];
        readonly name: "setPricePerSector";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): FixedPriceInterface;
    static connect(address: string, runner?: ContractRunner | null): FixedPrice;
}
export {};
//# sourceMappingURL=FixedPrice__factory.d.ts.map