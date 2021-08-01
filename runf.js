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

const run = async (event) => {
  console.log('Event:', event)
  const  apikey  = await getSecrets();
  
  console.log(JSON.stringify(apikey));
}


run("dhaka");


