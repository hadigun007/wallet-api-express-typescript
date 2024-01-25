
// import {mnemonicToSeedSync} from 'bip39';
// import ecc from 'tiny-secp256k1'
// import { BIP32Factory } from 'bip32'
// import bitcoin from 'bitcoinjs-lib';

// const bip32 = BIP32Factory(ecc);

// // function getAddress (node, network) {
// //     return bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network }).address
// // }

// const mnemonic = `fsome mnemonic`;

// const seed = mnemonicToSeedSync(mnemonic);

// const root = bip32.fromSeed(seed, bitcoin.networks.bitcoin);

// const child1 = root.derivePath("m/84'/0'/0'/0/0");
// const child2 = root.deriveHardened(84).deriveHardened(0).deriveHardened(0).derive(0).derive(0);

// console.log(child1);
// console.log(child2);

// // const bitcoin = require('bitcoinjs-lib');
// // import {mnemonicToSeedSync} from 'bip39';
// // const bip32 = require('bip32');

// // // class BitcoinWallet {

// // // }

// // function main(){

// // }

// // main()