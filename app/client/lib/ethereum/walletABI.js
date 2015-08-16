var walletABI = [{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"removeOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"m_numOwners","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"resetSpentToday","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"addOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_required","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_h","type":"bytes32"}],"name":"confirm","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_newLimit","type":"uint256"}],"name":"setDailyLimit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"execute","outputs":[{"name":"_r","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_operation","type":"bytes32"}],"name":"revoke","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newRequired","type":"uint256"}],"name":"changeRequirement","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_operation","type":"bytes32"},{"name":"_owner","type":"address"}],"name":"hasConfirmed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"}],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"}],"name":"changeOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"m_dailyLimit","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_daylimit","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"}],"name":"Revoke","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"},{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newOwner","type":"address"}],"name":"OwnerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"oldOwner","type":"address"}],"name":"OwnerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newRequirement","type":"uint256"}],"name":"RequirementChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"SingleTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"MultiTransact","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"operation","type":"bytes32"},{"indexed":false,"name":"initiator","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"data","type":"bytes"}],"name":"ConfirmationNeeded","type":"event"}];

walletABICompiled = '60606040526040516110a03803806110a083398101604052805160805160a051919092019190808383815160019081018155600090600160a060020a0332169060029060038390559183525061010260205260408220555b82518110156100e257828181518110156100025790602001906020020151600160a060020a03166002600050826002016101008110156100025790900160005081905550806002016101026000506000858481518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060005081905550600101610057565b81600060005081905550505050806101056000508190555061010662015180420490565b6101075550505050610f838061011d6000396000f300606060405236156100b95760e060020a6000350463173825d9811461010b5780632f54bf6e146101665780634123cb6b1461018e5780635c52c2f5146101975780637065cb48146101c8578063746c9171146101fc578063797af62714610205578063b20d30a914610218578063b61d27f61461024c578063b75c7dc61461026d578063ba51a6df1461029c578063c2cf7326146102d0578063cbf0b0c01461030e578063f00d4b5d14610342578063f1736d861461037b575b61038560003411156101095760408051600160a060020a033216815234602082015281517fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c929181900390910190a15b565b6103856004356000600036436040518084848082843750505090910190815260405190819003602001902090506105e9815b600160a060020a03321660009081526101026020526040812054818082811415610c0357610d5b565b6103876004355b600160a060020a03811660009081526101026020526040812054115b919050565b61038760015481565b610385600036436040518084848082843750505090910190815260405190819003602001902090506103aa8161013d565b610385600435600036436040518084848082843750505090910190815260405190819003602001902090506103c98161013d565b61038760005481565b6103876004355b6000816109738161013d565b610385600435600036436040518084848082843750505090910190815260405190819003602001902090506103998161013d565b61038760048035906024803591604435918201910135600061072f3261016d565b610385600435600160a060020a03321660009081526101026020526040812054908082811415610564576105e3565b610385600435600036436040518084848082843750505090910190815260405190819003602001902090506106a98161013d565b610387600435602435600082815261010360209081526040808320600160a060020a0385168452610102909252822054828181141561070257610726565b610385600435600036436040518084848082843750505090910190815260405190819003602001902090506103b88161013d565b610385600435602435600060003643604051808484808284375050509091019081526040519081900360200190209050610b358161013d565b6103876101055481565b005b60408051918252519081900360200190f35b156103a5576101058290555b505b50565b156103a75760006101065550565b156103a55781600160a060020a0316ff5b156103a5576103d78261016d565b156103e257506103a7565b6104605b6101045460005b81811015610ea857610104805461010891600091849081101561000257600080516020610f6383398151915201548252506020918252604081208054600160a060020a0319168155600181018290556002810180548382559083528383209193610f2d92601f929092010481019061095b565b60015460fa90106104755761047361048a565b505b60015460fa90106104c757506103a7565b6106175b600060015b60015481101561096f575b600154811080156104ba5750600281610100811015610002570154600014155b15610d635760010161049a565b60018054810190819055600160a060020a038316906002906101008110156100025790900160005081905550600160005054610102600050600084600160a060020a03168152602001908152602001600020600050819055507f994a936646fe87ffe4f1e469d3d6aa417d6b855598397f323de5b449f765f0c3826040518082600160a060020a0316815260200191505060405180910390a15050565b50506000828152610103602052604081206001810154600284900a9290831611156105e35780546001828101805492909101835590839003905560408051600160a060020a03321681526020810186905281517fc7fb647e59b18047309aa15aad418e5d7ca96d173ad704f1031a2c3d7591734b929181900390910190a15b50505050565b1561065557600160a060020a03831660009081526101026020526040812054925082141561065a57506103a5565b5060408051600160a060020a038516815290517f58619076adf5bb0943d100ef88d52d7c3fd691b19d3a9071b555b651fbf418da9181900360200190a15b505050565b600160016000505403600060005054111561067557506103a5565b600060028361010081101561000257508301819055600160a060020a038416815261010260205260408120556104866103e6565b156103a5576001548211156106be57506103a7565b60008290556106cb6103e6565b6040805183815290517facbdb084c721332ac59f9b8e392196c9eb0e4932862da8eb9beaf0dad4f550da9181900360200190a15050565b506001820154600282900a908116600014156107215760009350610726565b600193505b50505092915050565b1561094b57610743846000610e3d3261016d565b156107ff577f92ca3a80853e6663fa31fa10b99225f18d4902939b4c53a9caae9043f6efd00432858786866040518086600160a060020a0316815260200185815260200184600160a060020a031681526020018060200182810382528484828181526020019250808284378201915050965050505050505060405180910390a184600160a060020a03168484846040518083838082843750505090810191506000908083038185876185025a03f1506000935061094b92505050565b6000364360405180848480828437505050909101908152604051908190036020019020915061082f90508161020c565b158015610852575060008181526101086020526040812054600160a060020a0316145b1561094b5760008181526101086020908152604082208054600160a060020a03191688178155600181018790556002018054858255818452928290209092601f01919091048101908490868215610953579182015b828111156109535782358260005055916020019190600101906108a7565b50507f1733cbb53659d713b79580f79f3f9ff215f78a7c7aa45890f3b89fc5cddfbf328132868887876040518087815260200186600160a060020a0316815260200185815260200184600160a060020a03168152602001806020018281038252848482818152602001925080828437820191505097505050505050505060405180910390a15b949350505050565b506108c59291505b8082111561096f576000815560010161095b565b5090565b15610b225760008381526101086020526040812054600160a060020a031614610b225760408051600091909120805460018201546002929092018054600160a060020a03929092169390918190839080156109f357820191906000526020600020905b8154815290600101906020018083116109d657829003601f168201915b505091505060006040518083038185876185025a03f150505060008481526101086020908152604080519281902080546001820154600160a060020a033281811688529587018b905293860181905292166060850181905260a06080860181815260029390930180549187018290527fe7c957c06e9a662c1a6c77366179f5b702b97651dc28eee7d5bf1dff6e40bb4a975094958a959293909160c083019084908015610ac557820191906000526020600020905b815481529060010190602001808311610aa857829003601f168201915b5050965050505050505060405180910390a160008381526101086020908152604082208054600160a060020a031916815560018101839055600281018054848255908452828420919392610b2892601f929092010481019061095b565b50919050565b5050506001915050610189565b156105e357610b438361016d565b15610b4e5750610655565b600160a060020a038416600090815261010260205260408120549250821415610b775750610655565b610b7f6103e6565b600160a060020a03831660028361010081101561000257508301819055600160a060020a03851660008181526101026020908152604080832083905584835291829020869055815192835282019290925281517fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c929181900390910190a150505050565b60008581526101036020526040812080549093501415610c8b576000805483556001838101919091556101048054918201808255828015829011610c5a57818360005260206000209182019101610c5a919061095b565b50505060028301819055610104805487929081101561000257600091909152600080516020610f6383398151915201555b506001810154600283900a90811660001415610d5b5760408051600160a060020a03321681526020810187905281517fe1c52dc63b719ade82e8bea94cc41a0d5d28e4aaf536adb5e9cccc9ff8c1aeda929181900390910190a1815460019011610d48576000858152610103602052604090206002015461010480549091908110156100025760406000908120600080516020610f638339815191529290920181905580825560018083018290556002909201559450610d5b9050565b8154600019018255600182018054821790555b505050919050565b5b60018054118015610d8657506001546002906101008110156100025701546000145b15610d9a5760018054600019019055610d64565b60015481108015610dbd5750600154600290610100811015610002570154600014155b8015610dd757506002816101008110156100025701546000145b15610e3857600154600290610100811015610002578101549082610100811015610002578101919091558190610102906000908361010081101561000257810154825260209290925260408120929092556001546101008110156100025701555b61048f565b156101895761010754610e535b62015180420490565b1115610e6c57600061010655610e67610e4a565b610107555b6101065480830110801590610e8a5750610106546101055490830111155b15610ea057506101068054820190556001610189565b506000610189565b6103a56101045460005b81811015610f385761010480548290811015610002576000918252600080516020610f63833981519152015414610f2557610104805461010391600091849081101561000257600080516020610f6383398151915201548252506020919091526040812081815560018101829055600201555b600101610eb2565b5050506001016103ed565b610104805460008083559190915261065590600080516020610f638339815191529081019061095b56004c0be60200faa20559308cb7b5a1bb3255c16cb1cab91f525b5ae7a03d02fabe';
// 0xa8b566789c430c906d0eb6b2916e550a9c493d8a // testnet
// code: 606060405260405161014938038061014983398101604052805160805160a051919092019190808383815160019081018155600090600160a060020a0333169060029060038390559183525061010260205260408220555b82518110156100e257828181518110156100025790602001906020020151600160a060020a03166002600050826002016101008110156100025790900160005081905550806002016101026000506000858481518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060005081905550600101610057565b81600060005081905550505050806101056000508190555061010662015180420490565b6101075550505050602d8061011c6000396000f3003660008037602060003660003473cafecafecafecafecafecafecafecafecafecafe61235a5a03f260206000f3
walletStubABICompiled = '606060405260405161014938038061014983398101604052805160805160a051919092019190808383815160019081018155600090600160a060020a0333169060029060038390559183525061010260205260408220555b82518110156100e257828181518110156100025790602001906020020151600160a060020a03166002600050826002016101008110156100025790900160005081905550806002016101026000506000858481518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060005081905550600101610057565b81600060005081905550505050806101056000508190555061010662015180420490565b6101075550505050602d8061011c6000396000f3003660008037602060003660003473a8b566789c430c906d0eb6b2916e550a9c493d8a61235a5a03f260206000f3';

WalletContract = web3.eth.contract(walletABI);

// // inherited
// walletABI = [   {      "anonymous" : false,      "inputs" : [],      "name" : "Created",      "type" : "event"   },   {      "anonymous" : false,      "inputs" : [         {            "indexed" : false,            "name" : "from",            "type" : "address"         },         {            "indexed" : false,            "name" : "value",            "type" : "uint256"         }      ],      "name" : "Deposit",      "type" : "event"   }];

// walletABICompiled = '5b7f9adeddf84386b336eb7b3e18e7a6099be08fd81ea5d5142f4d2b630f8d20cf016040604090036040a15b60578060386000396000f30060515b7fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60403373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001604090036040a15b565b60006000f3';
// WalletContract = web3.eth.contract(walletABI);

// simple
// walletABI = [   {      "anonymous" : false,      "inputs" : [         {            "indexed" : false,            "name" : "from",            "type" : "address"         },         {            "indexed" : false,            "name" : "value",            "type" : "uint256"         }      ],      "name" : "Deposit",      "type" : "event"   },   {      "anonymous" : false,      "inputs" : [],      "name" : "Created",      "type" : "event"   }];

// walletABICompiled = '5b7f9adeddf84386b336eb7b3e18e7a6099be08fd81ea5d5142f4d2b630f8d20cf016040604090036040a15b60578060386000396000f30060515b7fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c60403373ffffffffffffffffffffffffffffffffffffffff168152602001348152602001604090036040a15b565b60006000f3';
// WalletContract = web3.eth.contract(walletABI);
