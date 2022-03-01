const express = require("express");
const app = express();
const port = 8000;
const fs = require("fs");

const { Payouts } = require("@cashfreepayments/cashfree-sdk");

// Instantiate Cashfree Payouts
const payoutsInstance = new Payouts({
  env: "TEST",
  clientId: "CF182797C8BHOLNGPCB67J9FRRHG",
  clientSecret: "557d8d6994bb1327795bcf0feb1963482a3a9918",
  pathToPublicKey: `./file.pem`,
});
console.log(payoutsInstance.beneficiary);
async function addBeneficiary() {
  try {
    const response = await payoutsInstance.beneficiary.add({
      beneId: "JOHN18012",
      name: "john doe",
      email: "johndoe@cashfree.com",
      phone: "9876543210",
      bankAccount: "00001111222233",
      ifsc: "HDFC0000001",
      address1: "ABC Street",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "560001",
    });

    console.log(response);
  } catch (e) {
    console.error(e);
  }
}

app.get("/", (req, res) => {
  addBeneficiary();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// var NodeRSA = require("node-rsa");

// var key = new NodeRSA();

// const keyData = `-----BEGIN PUBLIC KEY-----
//   MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvTF9U4d2s8pKZYSxIS6l
//   PInDdXKaILV/addPxU7WRAddDXL1VuhtLRWhHJxioSGzm5wEYjDuwijXG0bkba4P
//   8Oxieg+B+xpzDM1LNSsA7irOXj5EeLqprMjWP9Vwezr6fnHX4VwnRQM5A1DR8twR
//   t3UkwHrjJvSIa59RndUXfknFRmbZ7HfnZu0XPqPJiTuw/UQ0DGaNL6dOFK+IkjQO
//   zR3s4QNhfZDai6wY6qrDt4whMlE9wou2vNrffG/AqTievAYf9Mm5N7GH91kuHGtM
//   ojRc8U8wSRKuKmXmanBoUvcjMM/V9Bh9ecmU3fXdWJr35y5HTpxB6KvV+glQhMWh
//   PQIDAQAB
//   -----END PUBLIC KEY-----`;

// //setOptions ecryptionScheme is default to pkcs1_oaep by setting this to pkcs1. I could able to solve my problem

// key.setOptions({
//   encryptionScheme: "pkcs1",
// });

// key.importKey(keyData, "pkcs8-public");
// const encrypted = key.encrypt("Test@1234", "base64");
// console.log(encrypted, "dfdff");
