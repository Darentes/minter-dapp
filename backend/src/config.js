require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Mynies";
const description = "We want to be the cutest collection in the blockchain and we want to find our friends.🍬 -Mynies is a hand-drawn collection with 10.000 unique collectibles.-";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 7000,
    layersOrder: [
      { name: "Background" },
      { name: "Background effect" },
      { name: "Body" },
      { name: "Outfit" },
      { name: "Face" },
      { name: "Mask" },
      { name: "Hair" },
      { name: "Head" },
      { name: "Hand" },
    ],
  },{   
    growEditionSizeTo: 8000,
   layersOrder: [
     { name: "Background" },
     { name: "Background effect" },
     { name: "Body" },
     { name: "Outfit" },
     { name: "Face" },
     { name: "Hair" },
     { name: "Hand" },
   ],
 },{
  growEditionSizeTo: 9987,
  layersOrder: [
    { name: "Background" },
    { name: "Background effect" },
    { name: "Body" },
    { name: "Outfit" },
    { name: "Face" },
    { name: "Hair" },
    { name: "Head" },
    { name: "Hand" },
  ],
},{
  growEditionSizeTo: 9988,
  layersOrder: [
    { name: "Background 39" },
    { name: "Background effect 39" },
    { name: "Body 39" },
    { name: "Outfit 39" },
    { name: "Face 39" },
    { name: "Mask 39" },
    { name: "Hair 39" },
    { name: "Head 39" },
    { name: "Hand 39" },
  ],
},{
  growEditionSizeTo: 9989,
  layersOrder: [
    { name: "Background Astro" },
    { name: "Background effect Astro" },
    { name: "Body Astro" },
    { name: "Outfit Astro" },
    { name: "Face Astro" },
    { name: "Hair Astro" },
    { name: "Hand Astro" },
  ],
},{
  growEditionSizeTo: 9990,
  layersOrder: [
    { name: "Background Candy" },
    { name: "Background effect Candy" },
    { name: "Body Candy" },
    { name: "Outfit Candy" },
    { name: "Face Candy" },
    { name: "Mask Candy" },
    { name: "Hair Candy" },
    { name: "Head Candy" },
    { name: "Hand Candy" },
  ],
},{
  growEditionSizeTo: 9991,
  layersOrder: [
    { name: "Background Cookie" },
    { name: "Background effect Cookie" },
    { name: "Body Cookie" },
    { name: "Outfit Cookie" },
    { name: "Face Cookie" },
    { name: "Mask Cookie" },
    { name: "Hair Cookie" },
    { name: "Hand Cookie" },
  ],
},{
  growEditionSizeTo: 9992,
  layersOrder: [
    { name: "Background Cute" },
    { name: "Background effect Cute" },
    { name: "Body Cute" },
    { name: "Outfit Cute" },
    { name: "Face Cute" },
    { name: "Mask Cute" },
    { name: "Hair Cute" },
    { name: "Head Cute" },
    { name: "Hand Cute" },
  ],
},{
  growEditionSizeTo: 9993,
  layersOrder: [
    { name: "Background Cute Devil" },
    { name: "Background effect Cute Devil" },
    { name: "Body Cute Devil" },
    { name: "Outfit Cute Devil" },
    { name: "Face Cute Devil" },
    { name: "Mask Cute Devil" },
    { name: "Hair Cute Devil" },
    { name: "Head Cute Devil" },
    { name: "Hand Cute Devil" },
  ],
},{
  growEditionSizeTo: 9994,
  layersOrder: [
    { name: "Background Cute Paw" },
    { name: "Background effect Cute Paw" },
    { name: "Body Cute Paw" },
    { name: "Outfit Cute Paw" },
    { name: "Face Cute Paw" },
    { name: "Mask Cute Paw" },
    { name: "Hair Cute Paw" },
    { name: "Head Cute Paw" },
    { name: "Hand Cute Paw" },
  ],
},{
  growEditionSizeTo: 9995,
  layersOrder: [
    { name: "Background Kimono Boy" },
    { name: "Background effect Kimono Boy" },
    { name: "Body Kimono Boy" },
    { name: "Outfit Kimono Boy" },
    { name: "Face Kimono Boy" },
    { name: "Mask Kimono Boy" },
    { name: "Hair Kimono Boy" },
    { name: "Head Kimono Boy" },
    { name: "Hand Kimono Boy" },
  ],
},{
  growEditionSizeTo: 9996,
  layersOrder: [
    { name: "Background Kimono Girl" },
    { name: "Background effect Kimono Girl" },
    { name: "Body Kimono Girl" },
    { name: "Outfit Kimono Girl" },
    { name: "Face Kimono Girl" },
    { name: "Mask Kimono Girl" },
    { name: "Hair Kimono Girl" },
    { name: "Head Kimono Girl" },
    { name: "Hand Kimono Girl" },
  ],
},{
  growEditionSizeTo: 9997,
  layersOrder: [
    { name: "Background Megu" },
    { name: "Background effect Megu" },
    { name: "Body Megu" },
    { name: "Outfit Megu" },
    { name: "Face Megu" },
    { name: "Mask Megu" },
    { name: "Hair Megu" },
    { name: "Head Megu" },
    { name: "Hand Megu" },
  ],
},{
  growEditionSizeTo: 9998,
  layersOrder: [
    { name: "Background Purple" },
    { name: "Background effect Purple" },
    { name: "Body Purple" },
    { name: "Outfit Purple" },
    { name: "Face Purple" },
    { name: "Mask Purple" },
    { name: "Hair Purple" },
    { name: "Head Purple" },
    { name: "Hand Purple" },
  ],
},{
  growEditionSizeTo: 9999,
  layersOrder: [
    { name: "Background Tuxedo" },
    { name: "Background effect Tuxedo" },
    { name: "Body Tuxedo" },
    { name: "Outfit Tuxedo" },
    { name: "Face Tuxedo" },
    { name: "Mask Tuxedo" },
    { name: "Hair Tuxedo" },
    { name: "Head Tuxedo" },
    { name: "Hand Tuxedo" },
  ],
},{
  growEditionSizeTo: 10000,
  layersOrder: [
    { name: "Background Vamp" },
    { name: "Background effect Vamp" },
    { name: "Body Vamp" },
    { name: "Outfit Vamp" },
    { name: "Face Vamp" },
    { name: "Mask Vamp" },
    { name: "Hair Vamp" },
    { name: "Head Vamp" },
    { name: "Hand Vamp" },
  ],
},
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1500,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://mynies.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Mynies';
const CONTRACT_SYMBOL = 'MYS';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0xb9cc8b48E13a68C26C52c619433Ca2a90dd08a0A';
const TREASURY_ADDRESS = '0xb9cc8b48E13a68C26C52c619433Ca2a90dd08a0A';
const MAX_SUPPLY = 10000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 6; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-05-15T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-05-12T11:30:48+00:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xb9cc8b48E13a68C26C52c619433Ca2a90dd08a0A"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x656f5A2B404C12eebE3bA02C187640AF6E87D7E9","0xb9cc8b48E13a68C26C52c619433Ca2a90dd08a0A"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x4044b48ed66F47Cf7855a77C852B8CaeB20d7f72"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Which one you will get? >.<"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io//ipfs/QmPQfRKM9wmUmJd7U5HKe2vzzUcBJLdMQMWNtWYgZtdg7q?filename=Mynies%20Mint.png"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "MY",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://twitter.com/Mynies_Official",
  creators: [
    {
      address: "0xb9cc8b48E13a68C26C52c619433Ca2a90dd08a0A",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};
