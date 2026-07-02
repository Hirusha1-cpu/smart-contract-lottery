import RaffleABI from '../contracts/Raffle.json';

// ⚠️ මෙතන ඔබගේ CONTRACT ADDRESS එක දාන්න!
// ඔබ තවම Contract එක Deploy කරලා නැති නිසා, දැනට මෙහෙම තියන්න
const SEPOLIA_RAFFLE_ADDRESS = "0x8103b0a8a00be2ddc778e6e7eaa21791cd364625" as `0x${string}`;

export const CONTRACTS = {
  11155111: {
    raffle: SEPOLIA_RAFFLE_ADDRESS, // ⬅️ පසුව Update කරන්න
  },
  31337: {
    raffle: "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`,
  }
};

export const RAFFLE_ADDRESS = (chainId: number): `0x${string}` => {
  const address = CONTRACTS[chainId as keyof typeof CONTRACTS]?.raffle;
  if (!address) {
    throw new Error(`No contract address for chainId: ${chainId}`);
  }
  return address;
};

export const RAFFLE_ABI = RaffleABI.abi;