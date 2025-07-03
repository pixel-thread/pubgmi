import { prisma } from "@/libs/db";

type DataType = {
  name: string;
  phone: string;
  email: string;
};

type Props = {
  data: DataType;
};

/**
 * Creates a user along with associated Player, Wallet, and PlayerStats within a transaction.
 *
 * Assumptions:
 * - `prisma` is correctly configured and imported.
 * - Called in a route or service with proper error handling upstream.
 */
export async function createUser({ data }: Props) {
  return await prisma.$transaction(async (tx) => {
    // 1. Create user
    const user = await tx.user.create({
      data: {
        phone: data.phone,
        email: data.email,
        name: data.name,
        isInternal: false, // explicitly set default if needed
      },
    });

    // 2. Create player linked to user
    const player = await tx.player.create({
      data: {
        name: data.name,
        userId: user.id,
        balance: 0,
      },
    });

    // 3. Create wallet linked to player and user
    await tx.wallet.create({
      data: {
        playerId: player.id,
        userId: user.id,
        amount: 0,
      },
    });

    // 4. Create player stats linked to player
    await tx.playerStats.create({
      data: {
        playerId: player.id,
        matches: 0,
        wins: 0,
        deaths: 0,
        kills: 0,
        kd: 0,
      },
    });

    // Return the created user with relational data if needed
    return user;
  });
}
