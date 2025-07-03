const { ethers } = require("ethers");

function verifySignature(message, signature, address) {
  const signer = ethers.utils.verifyMessage(message, signature);
  return signer.toLowerCase() === address.toLowerCase();
}
