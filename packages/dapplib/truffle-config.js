require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope area off tragic educate ranch remember mistake idea clinic off ghost'; 
let testAccounts = [
"0x50f6ccd26cac5c2605848ce7ef89c49342a2bdc7e0af99924d63bad0aad2616d",
"0xaaf714cc73d41580b2e680eb5dbca927838e5cfcc7fbe479e34e8803a168310f",
"0x5f59e6059da5f239fc6345a11c542714dfb14ad5ef75a3a12179bde5f04ca008",
"0xa9f285c8d85e48e151e617a4158735c972c13fa41b14dc5c06de56a289e4bf61",
"0x82480649acb757d2ef422b924c4c5e39164b3db77e74ed32e4b91e1a23a57855",
"0x41898ce646e361af8a60abf66ea5a86ac13991280a3520fa7cdc53119ab1105c",
"0xaf597aa67d747f7817a64f7b7306673b56ccdc4e43ec143d804cb4fa4c28493f",
"0xf4a5fb707da409818ec507f9ccdd31b893dca51cbba8ec8dd4df7e9d40022195",
"0xb0f0444858015c010f9b6f3f384edda0f89fce00af5a8cd99a4effbde3f4fdbc",
"0x4949e74203760726929ce1cb98fdb226592ad1ee1a840d67abcde3e93f2f7a0d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

