const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();



async function main() {
  

    const result = await prisma.$queryRaw('SELECT * FROM "rules_aws_custodian";')
  
    console.dir(result, { depth: null })
  }
  
  main()
    .catch(e => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  