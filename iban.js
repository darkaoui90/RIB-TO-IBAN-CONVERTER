
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Dkhel RIB dyalek (24 chiffres): ", (rib) => {
  if (!/^\d{24}$/.test(rib)) {
    console.log("RIB khasso ykoun fih 24 chiffres.");
  } else {
    const check = String(
      98n - (BigInt(rib + "221000") % 97n)
    ).padStart(2, "0");

    console.log("IBAN dyalek: MA" + check + rib);
  }
  rl.close();
});
