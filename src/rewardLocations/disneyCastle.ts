import { Rewards } from "../rewards";
import { formRewards } from "../rewards/form";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [
	Rewards.PROOF_OF_CONNECTION,
	Rewards.PROOF_OF_PEACE,
	...Object.values(formRewards),
	Rewards.THUNDER,
	Rewards.MAGNET,
	Rewards.TORN_PAGE,
];

export const disneyCastleRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9B2",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9BE",
		reward: Rewards.STAR_RECIPE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9CA",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9D6",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9E2",
		reward: Rewards.BLAZING_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9EE",
		reward: Rewards.BLAZING_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9FA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Disney Castle (Library)",
		value: "11CDFA06",
		reward: Rewards.TORN_PAGE,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Queen Minnie Escort",
		value: "21D10D28",
		reward: Rewards.AUTO_SUMMON,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Pete (Steamboat Fight)",
		value: "21D10988",
		reward: Rewards.DODGE_SLASH,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Pete (Timeless River)",
		value: "21D109B8",
		reward: Rewards.REFLECT,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Disney Castle Map",
		value: "11CE0756",
		reward: Rewards.DISNEY_CASTLE_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Proof of Connection",
		value: "11CE0B16",
		reward: Rewards.PROOF_OF_CONNECTION,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Manifest Illusion (Lingering Will)",
		value: "11CE0B22",
		reward: Rewards.MANIFEST_ILLUSION,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];
