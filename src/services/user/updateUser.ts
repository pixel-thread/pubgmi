import { prisma } from "@/libs/db";

type Props = {
  data: { name: string };
  id: string;
};

export async function updateUser({ id, data }: Props) {
  return await prisma.user.update({
    where: { id },
    data: { name: data.name },
  });
}
