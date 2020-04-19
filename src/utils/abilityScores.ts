interface Player {
  STR: number;
  DEX: number;
  CON: number;
  INT: number;
  WIS: number;
  CHA: number;
}

const rolld20 = () => {
  return Math.floor(Math.random() * 20) + 1;
}

const sum = (numbers: number[]) => numbers.reduce((runSum, value) => runSum + value, 0);

type Ability = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA";

const abilityList: Ability[] = [ "STR", "DEX", "CON", "INT", "WIS", "CHA"]

const playerCount = 5;

const abilityValues = [15, 14, 13, 12, 8];
const averageAbilityValue = sum(abilityValues) / abilityValues.length;

const playerTotal = (player: Player) => {
  return sum(abilityList.map(ability => player[ability]))
}

const rankNumbers = (numbers: number[]) => {
  const sortedNumbers = [...numbers];
  sortedNumbers.sort();
  sortedNumbers.reverse();
  return numbers.map(number => sortedNumbers.indexOf(number));
}

const shuffle = <V extends Array<any> = any[]>(initialArray: V) => {
  const array = [...initialArray] as V;
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const generateAbilityScores = () => {
  const playerDefault = {
    STR: 10,
    DEX: 10,
    CON: 10,
    INT: 10,
    WIS: 10,
    CHA: 10,
  }
  const playersDefault = Array(5).fill(playerCount).map(() => ({
    ...playerDefault
  }));

  const abilities: Ability[] = shuffle<Ability[]>(Object.keys(playerDefault) as Ability[]);

  const assignValues = (initialPlayers: Player[]) => {
    return abilities.reduce((players, ability, abilityIndex) => {
      const isLastN = abilityIndex >= abilities.length - 1;
      if (isLastN) {
        console.log('abilities.length', abilities.length);
        console.log('ability', ability);
        console.log('abilityIndex', abilityIndex);
        return players.map((player) => {
          const abilityComputedValue = Math.round(averageAbilityValue - playerTotal(player) / 6 + 10);
          console.log(abilityComputedValue);
          const abilityValue = Math.max(Math.min(abilityComputedValue, 16), 8)
          return {
            ...player,
            [ability]: abilityValue,
          }
        })
      }
      const playerRolls = players.map((player) => {
        const total = playerTotal(player);
        const bonus = Math.ceil(total / 6 - averageAbilityValue);
        return rolld20() - bonus;
      });
      const playerRanks = rankNumbers(playerRolls);

      return players.map((player, playerIndex) => {
        return {
          ...player,
          [ability]: abilityValues[playerRanks[playerIndex]]
        }
      })
    }, initialPlayers);
  }

  console.log(rankNumbers([10, 20, 30]));
  console.log(rankNumbers([10, 20, 20, 30]));

  const players = assignValues(playersDefault);

  const playerTotals = players.map(player => {
    return abilities.map(ability => player[ability]).reduce((sum, value) => sum + value, 0)
  });

  console.log('playerTotals', playerTotals);;

  const playerTotalAverage = sum(playerTotals) / playerCount;

  console.log('playerTotalAverage', playerTotalAverage);;

  const variance = sum(playerTotals.map(total => Math.pow(total - playerTotalAverage, 2)));

  console.log('variance', variance);;

  const minMax = [Math.min(...playerTotals), Math.max(...playerTotals)];

  console.log('minMax', minMax);;

  console.log(minMax[1] - minMax[0]);

  console.log(players.map((player, playerIndex) => `player ${playerIndex+1}: ${JSON.stringify(player)}`).join("\n"))
}
