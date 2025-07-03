import { prisma } from "@/libs/db";
import { Prisma } from "@/libs/db/generated/client";

type Props = { data: Prisma.FixtureCreateInput };

export async function createTournamentFixture({ data }: Props) {
  return await prisma.fixture.create({
    data: data,
  });
}
