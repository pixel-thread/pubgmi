import { prisma } from "@/libs/db";

type Team = {
  id: string;
};
type Props = { tournament: { id: string }; createdTeams: Team[] };

export async function createTournamentFixture({
  tournament,
  createdTeams,
}: Props) {
  return await prisma.fixture.create({
    data: {
      tournament: {
        connect: { id: tournament.id },
      },
      teams: { connect: createdTeams.map((team) => ({ id: team.id })) },
    },
  });
}
