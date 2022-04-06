require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name rate rural home grace hidden suspect gesture'; 
let testAccounts = [
"0xb1a21c6c0e19ec89597b874af73aa8a0b69011c4dd6601a95532603b9540951a",
"0xa215ede06208c01ebc85730c5e7ad3e7c67129cf28dfaf5aeb72e0be6d2d997a",
"0x9cfbe96ceee5673a0c6224b312be36dccb537a5880dafeb7c09003908c1dc0db",
"0x9ca997f08ff55c3ed4bea7c42663cce2ad943cd5060cd28c3574f30be24595c1",
"0x2f28d178f7c4b4b3449920643e3764939821c91ba8d37cb30ecf8bc814b38cb5",
"0x6681903d1036f247559ae2e3d027c03b1fca61b35c5e1ed1e4cffcc9189c10a3",
"0x829db94a5a6771df72b96085b321381608cdedc69a025ae39ffd013fd685d0af",
"0x78dad8152d8396e02a689c2f0ee8963499983c15bec9a71713786a3cf217ee2e",
"0xc857123077d297e4e5097e11f027bca2c8ec48af492c27cc0254d540a4e14218",
"0xf48ff0f6ca2c12dff7efd9913b244cb6565f3b1843afa421561b248267a49516"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


