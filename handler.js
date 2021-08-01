'use strict';


const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

const { Client } = require('pg');
const { secretManager } = require("./secretManager");

const client = new Client({
    user: 'dataapp',
    host: 'ec2-54-210-169-181.compute-1.amazonaws.com',
    database: 'cockpit_ml',
    password: '@Wsxzaq1',
    port: 5432,
});







module.exports.get_custodian = async (event , contex , callback) => {

  try {
    
    const result = await prisma.$queryRaw('SELECT * FROM "rules_aws_custodian";')

    return {
      statusCode: 200,
      headers:  { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    }

  } catch(error){
    console.error(error)
    return{

      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)


    }

  }
};




module.exports.get_guardd = async (event , contex , callback) => {

  try {
    
    const result = await prisma.$queryRaw('SELECT * FROM "rules_aws_guardd";')

    return {
      statusCode: 200,
      headers:  { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
      
    }

  } catch(error){
    console.error(error)
    return{

      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)


    }

  }
};








module.exports.get_custodian_ts = async (event , contex , callback) => {

  try {
    
    client.connect();
    const query = ` SELECT * FROM "rules_aws_custodian";`;
    const { rows } = await client.query(query);

    return {
      statusCode: 200,
      headers:  { 'Content-Type': 'application/json' },
      body: JSON.stringify(rows)
    }
    

    

  } catch(error){
    console.error(error)
    return{

      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)


    }

  }
  client.end();
};





module.exports.insertAmeer = async (event , contex , callback) => {

  try {
    
    const result = await prisma.$queryRaw`INSERT INTO ct_datatempstation(jsondata) VALUES(${event} );`

    return {
      statusCode: 200,
      headers:  { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    }

  } catch(error){
    console.error(error)
    return{

      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)


    }

  }
};









module.exports.getSecretCog = async(event , contex , callback) =>{


  







  try {



    const AWS = require('aws-sdk')
    const sm = new AWS.SecretsManager({ region: 'us-east-1' })
  
    const getSecrets = async () => {
      return await new Promise((resolve, reject) => {
        sm.getSecretValue({SecretId: 'dev_sec'}, (err, result) => {
          if (err) reject(err)
          else{
    
    
           
    
            resolve(JSON.parse(result.SecretString))
    
          } 
        })
      })
    }
  




    console.log('Event:', event)
    const  apikey  = await getSecrets('dev_sec');
    
  


    

    return {
      statusCode: 200,
      headers:  { 'Content-Type': 'application/json' },
      body: JSON.stringify(apikey)
    }
  }catch(error){
    console.error(error)
    return{

      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(error)


    }

  }

  
};




// const AWS = require('aws-sdk')
// const sm = new AWS.SecretsManager({ region: 'us-east-1' })

// const getSecrets = async (SecretId) => {
//   return await new Promise((resolve, reject) => {
//     sm.getSecretValue({ SecretId }, (err, result) => {
//       if (err) reject(err)
//       else resolve(JSON.parse(result.SecretString))
//     })
//   })
// }



