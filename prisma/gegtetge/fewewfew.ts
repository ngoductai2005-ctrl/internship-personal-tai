import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: "Học tập" },
      { name: "Dự án" },
      { name: "Cá nhân" },
    ],
  });

  await prisma.priority.createMany({
    data: [
      { name: "Thấp" },
      { name: "Trung bình" },
      { name: "Cao" },
    ],
  });

  console.log("Seed thành công");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });