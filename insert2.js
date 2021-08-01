const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();



async function main() {

    const email = {"navid":"navid" , "post":"engineer" , "hobby":"flirting"}
    const result = await prisma.$queryRaw('INSERT INTO ct_datatempstation(jsondata) VALUES (\'$email\');')
  
    console.dir(result, { depth: null })
  }
  
  main()
    .catch(e => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
  