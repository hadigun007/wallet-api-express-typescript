import { Keypair } from "@solana/web3.js";
import { HDKey } from "micro-ed25519-hdkey";
import * as bip39 from "bip39";
const bs58 = require('bs58');

(async () => {
  const mnemonic =
    "neither lonely flavor argue grass remind eye tag avocado spot unusual intact";
  const seed = bip39.mnemonicToSeedSync(mnemonic, ""); // (mnemonic, password)
  const hd = HDKey.fromMasterSeed(seed.toString("hex"));
  for (let i = 0; i < 10; i++) {
    const path = `m/44'/501'/${i}'/0'`;
    const keypair = Keypair.fromSeed(hd.derive(path).privateKey);

    console.log(keypair);
    console.log(`${path} => ${keypair.publicKey.toBase58()}`);
    console.log(hd.derive(path).privateKey); // 6frdqXQAgJ MyKwmZxkLY bdGjnYTvUc eh6LNhkQt2 siQp

    console.log(bs58.encode(hd.derive(path).privateKey)) // 6jywDRohk2 QQEHfVBzH3 z367Msd8oh qce94niArW efAr
    let secretKey = bs58.decode("6jywDRohk2QQEHfVBzH3z367Msd8ohqce94niArWefAr");
    console.log(secretKey);
    
  }
})();
