export interface IDnDHitPoints {
  maximum: number;
  current?: number;
  temporary?: number;
}

export type Ability = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";
export const abilityList: Ability[] = [
  "STR",
  "DEX",
  "CON",
  "INT",
  "WIS",
  "CHA"
];

export type SkillName =
  | "Acrobatics"
  | "Animal Handling"
  | "Arcana"
  | "Athletics"
  | "Deception"
  | "History"
  | "Insight"
  | "Intimidation"
  | "Investigation"
  | "Medicine"
  | "Nature"
  | "Perception"
  | "Performance"
  | "Persuasion"
  | "Religion"
  | "Sleight of Hand"
  | "Stealth"
  | "Survival";

export interface IAction {
  type: string;
  time: string;
  name: string;
  range?: string;
  hitBonus?: number;
  dc?: number;
  damage?: string;
  damageType?: string;
  notes?: string;
}

export const skillList: SkillName[] = [
  "Acrobatics",
  "Animal Handling",
  "Arcana",
  "Athletics",
  "Deception",
  "History",
  "Insight",
  "Intimidation",
  "Investigation",
  "Medicine",
  "Nature",
  "Perception",
  "Performance",
  "Persuasion",
  "Religion",
  "Sleight of Hand",
  "Stealth",
  "Survival"
];

export interface ISkill {
  name: string;
  bonus: number;
  mod: string;
  proficiency?: "proficient" | "expert";
}

export interface IDnDCharacter {
  name: string;
  race: string;
  classes: {
    name: string;
    levels: number;
  }[];
  abilities: {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
  };
  proficiencyBonus: number;
  initiative: number;
  armorClass: number;
  speed?: number;
  speedType?: string;
  hp: IDnDHitPoints;
  skills: ISkill[];
  actions: IAction[];
}

export const mockDnDCharacter: IDnDCharacter = {
  name: "Kněžka Jediné Bohyně",
  race: "Human",
  classes: [
    {
      name: "Cleric",
      levels: 5
    }
  ],
  abilities: {
    STR: -1,
    DEX: 2,
    CON: 1,
    INT: 2,
    WIS: 4,
    CHA: 2
  },
  proficiencyBonus: 3,
  initiative: 2,
  armorClass: 20,
  speed: 30,
  speedType: "walking",
  hp: {
    current: 33,
    maximum: 33,
    temporary: 0
  },
  skills: [
    { name: "Acrobatics", bonus: +2, mod: "DEX" },
    { name: "Animal Handling", bonus: +4, mod: "WIS" },
    { name: "Arcana", bonus: +2, mod: "INT" },
    { name: "Athletics", bonus: -1, mod: "STR" },
    { name: "Deception", bonus: +2, mod: "CHA" },
    { name: "History", bonus: +2, mod: "INT" },
    { name: "Insight", bonus: +7, mod: "WIS", proficiency: "expert" },
    { name: "Intimidation", bonus: +2, mod: "CHA" },
    { name: "Investigation", bonus: +5, mod: "INT", proficiency: "proficient" },
    { name: "Medicine", bonus: +7, mod: "WIS", proficiency: "proficient" },
    { name: "Nature", bonus: +2, mod: "INT" },
    { name: "Perception", bonus: +4, mod: "WIS" },
    { name: "Performance", bonus: +2, mod: "CHA" },
    { name: "Persuasion", bonus: +2, mod: "CHA" },
    { name: "Religion", bonus: +5, mod: "INT", proficiency: "proficient" },
    { name: "Sleight of Hand", bonus: +2, mod: "DEX" },
    { name: "Stealth", bonus: +5, mod: "DEX", proficiency: "proficient" },
    { name: "Survival", bonus: +4, mod: "WIS" }
  ],
  actions: [
    {
      type: "ranged_spell_attack",
      time: "1SA",
      name: "Guiding bolt",
      range: "120ft",
      hitBonus: 7,
      damage: "4d6",
      damageType: "radiant",
      notes: "D: 1rnd, V/S"
    },
    {
      type: "spell_effect",
      time: "1BA",
      name: "Spiritual Weapon",
      range: "60ft",
      hitBonus: 7,
      damage: "1d8+4",
      damageType: "force",
      notes: "D: 1m, V/S"
    }
  ]
};

export const formatBonus = (bonusNumber: number): string => {
  return `${bonusNumber >= 0 ? "+" : ""}${bonusNumber.toString()}`;
};

export const calculateAttributeValue = (bonusNumber: number): number => {
  return bonusNumber * 2 + 10;
};
