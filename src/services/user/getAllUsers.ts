import { prisma } from "@/libs/db";
import { getPagination } from "@/utils/pagination";

type GetAllUsersProps = {
  page?: string | number;
};
export async function getAllUsers({ page }: GetAllUsersProps = {}) {
  const { skip, take } = getPagination({ page });
  return prisma.$transaction([
    prisma.user.findMany({
      skip,
      take,
    }),
    prisma.user.count(),
  ]);
}
