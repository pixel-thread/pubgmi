/**
 * Creates balanced team fixtures from a list of player stats.
 * Each team will have one high KD+WIN and one low KD+WIN player.
 * The unpaired player (if any) will be the one with highest KD+WIN combined.
 *
 * @param playerStats - Array of player stats with {id, kd, win}
 * @returns Object containing teams and unpaired player (if exists)
 */

interface PlayerStats {
  id: string;
  kd: number;
  win: number;
}

export function createFixtures(playerStats: PlayerStats[]): {
  teams: PlayerStats[][];
  unpairedPlayer?: PlayerStats;
} {
  if (playerStats.length < 2) {
    throw new Error("At least two players are required to form teams.");
  }

  // Calculate average KD and WIN
  const avgKD =
    playerStats.reduce((sum, p) => sum + p.kd, 0) / playerStats.length;
  const avgWin =
    playerStats.reduce((sum, p) => sum + p.win, 0) / playerStats.length;

  // Sort players descending by combined kd + win to easily pick highest KD+WIN later
  const sortedByKDWin = [...playerStats].sort(
    (a, b) => b.kd + b.win - (a.kd + a.win),
  );

  // Split into low and high KD+WIN players
  const highPlayers = playerStats.filter(
    (p) => p.kd >= avgKD && p.win >= avgWin,
  );
  const lowPlayers = playerStats.filter((p) => p.kd < avgKD && p.win < avgWin);

  // Remaining players who are mixed category
  const mixedPlayers = playerStats.filter(
    (p) =>
      (p.kd >= avgKD && p.win < avgWin) || (p.kd < avgKD && p.win >= avgWin),
  );

  // Sort for balanced pairing within groups
  highPlayers.sort((a, b) => b.kd + b.win - (a.kd + a.win));
  lowPlayers.sort((a, b) => a.kd + a.win - (b.kd + b.win));
  mixedPlayers.sort((a, b) => b.kd + b.win - (a.kd + a.win));

  const teams: PlayerStats[][] = [];

  // Pair high and low KD+WIN players
  while (highPlayers.length && lowPlayers.length) {
    const high = highPlayers.shift()!;
    const low = lowPlayers.shift()!;
    teams.push([low, high]);
  }

  // Pair mixed players among themselves
  while (mixedPlayers.length >= 2) {
    const p1 = mixedPlayers.shift()!;
    const p2 = mixedPlayers.shift()!;
    teams.push([p1, p2]);
  }

  // If remaining high/low/mixed players are left, combine them into a single list
  const remainingPlayers = [...highPlayers, ...lowPlayers, ...mixedPlayers];

  // Pair any remaining players arbitrarily
  while (remainingPlayers.length >= 2) {
    const p1 = remainingPlayers.shift()!;
    const p2 = remainingPlayers.shift()!;
    teams.push([p1, p2]);
  }

  let unpairedPlayer: PlayerStats | undefined;

  // If one player remains unpaired, it should be the highest KD+WIN player overall
  if (remainingPlayers.length === 1) {
    const remaining = remainingPlayers[0];
    const highestKDWinPlayer = sortedByKDWin[0];

    if (remaining.id !== highestKDWinPlayer.id) {
      // Swap highest KD+WIN player into unpaired slot
      for (const team of teams) {
        const index = team.findIndex((p) => p.id === highestKDWinPlayer.id);
        if (index !== -1) {
          team[index] = remaining;
          break;
        }
      }
      unpairedPlayer = highestKDWinPlayer;
    } else {
      unpairedPlayer = remaining;
    }
  }

  return { teams, unpairedPlayer };
}
