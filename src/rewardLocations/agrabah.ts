import { Rewards } from "../rewards";
import { Reward } from "../rewards/Reward";
import { GameMode } from "../settings/enums";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

const exclude: Reward[] = [Rewards.FIRE, Rewards.BLIZZARD, Rewards.THUNDER];

export const agrabahRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF826",
		reward: Rewards.DARK_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF832",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF83E",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF84A",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF856",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF862",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Agrabah)",
		value: "11CDF86E",
		reward: Rewards.SERENITY_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Bazaar)",
		value: "11CDF87A",
		reward: Rewards.MYTHRIL_GEM,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Bazaar)",
		value: "11CDF886",
		reward: Rewards.POWER_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Bazaar)",
		value: "11CDF892",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Bazaar)",
		value: "11CDF89E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Bazaar)",
		value: "11CDF8AA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Agrabah (Palace Walls)",
		value: "11CDF8B6",
		reward: Rewards.SKILL_RING,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Palace Walls)",
		value: "11CDF8C2",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (The Cave of Wonders Entrance)",
		value: "11CDF8CE",
		reward: Rewards.POWER_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (The Caver of Wonders Entrance)",
		value: "11CDF8DA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Valley of Stone)",
		value: "11CDF8E6",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Valley of Stone)",
		value: "11CDF8F2",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Valley of Stone)",
		value: "11CDF8FE",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Valley of Stone)",
		value: "11CDF90A",
		reward: Rewards.HI_POTION,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Agrabah (Chasm of Challenges)",
		value: "11CDF916",
		reward: Rewards.CAVE_OF_WONDERS_MAP,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Chasm of Challenges)",
		value: "11CDF922",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Treasure Room)",
		value: "11CDF92E",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Agrabah (Treasure Room)",
		value: "11CDF93A",
		reward: Rewards.SERENITY_GEM,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Agrabah (Ruined Chamber)",
		value: "11CDF946",
		reward: Rewards.TORN_PAGE,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Agrabah (Ruined Chamber)",
		value: "11CDF952",
		reward: Rewards.RUINS_MAP,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
	{
		type: RewardLocationType.BONUS,
		description: "Abu Escort",
		value: "21D10DB8",
		reward: Rewards.SUMMON_BOOST,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Volcanic Lord & Blizzard Lord",
		value: "21D10CE8",
		reward: Rewards.FINISHING_LEAP,
	},
	{
		type: RewardLocationType.BONUS,
		description: "Genie Jafar",
		value: "21D10978",
		reward: Rewards.FIRE,
		gameMode: {
			[GameMode.GOA_MOD]: {
				exclude: [Rewards.FIRE, Rewards.BLIZZARD, Rewards.THUNDER],
			},
		},
	},
	{
		type: RewardLocationType.POPUP,
		description: "Agrabah Map",
		value: "11CE0792",
		reward: Rewards.AGRABAH_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Lamp Charm",
		value: "11CE079E",
		reward: Rewards.LAMP_CHARM,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Wishing Lamp",
		value: "11CE08B2",
		reward: Rewards.WISHING_LAMP,
		gameMode: {
			[GameMode.GOA_MOD]: { exclude },
		},
	},
];
