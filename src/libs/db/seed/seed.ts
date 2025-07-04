/**
 * Seed script to create 20 players with wallets and player stats.
 * Location: src/libs/db/seed/seed.ts
 */

import { PrismaClient, Category } from "@prisma/client";

const prisma = new PrismaClient();

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomCategory = (): Category => {
  const categories: Category[] = ["NOOB", "PRO", "ULTRA_NOOB", "ULTRA_PRO"];
  return categories[getRandomInt(0, categories.length - 1)];
};

async function main() {
  console.log(
    "🌱 Seeding database with 20 players, wallets, and player stats...",
  );

  for (let i = 1; i <= 10; i++) {
    // Create a user for each player
    const user = await prisma.user.create({
      data: {
        email: `player${i * getRandomInt(0, 1000)}@example.com`,
        phone: `+1234567890${i * getRandomInt(0, 1000)}`,
        name: `Player ${i}`,
      },
    });

    // Create player with linked playerStats
    const player = await prisma.player.create({
      data: {
        name: `Player ${i}`,
        category: getRandomCategory(),
        user: {
          connect: { id: user.id }, // ✅ explicitly connect user
        },
        playerStats: {
          create: {
            deaths: getRandomInt(0, 100),
            kills: getRandomInt(0, 100),
            kd: getRandomInt(0, 100),
            matches: getRandomInt(0, 100),
            wins: getRandomInt(0, 100),
          },
        },
      },
      include: {
        playerStats: true,
      },
    });
    // Create wallet for the player
    await prisma.wallet.create({
      data: {
        amount: getRandomInt(500, 5000),
        user: {
          connect: { id: user.id },
        },
        player: {
          connect: { id: player.id },
        },
      },
    });

    console.log(`✅ Created Player ${i} with user, playerStats, and wallet.`);
  }

  console.log("🌱 Database seeding complete.");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
