import { prisma } from "@/libs/db";
import { Role } from "@/libs/db/generated/client";

type Props = {
  data: {
    userId: string;
    role: Role;
  };
};

export async function updateUserRole({ data }: Props) {
  return await prisma.user.update({
    where: { id: data.userId },
    data: { role: data.role },
  });
}
