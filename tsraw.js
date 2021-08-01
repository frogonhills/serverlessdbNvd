const { Client } = require('pg');

const client = new Client({
    user: 'dataapp',
    host: 'ec2-54-210-169-181.compute-1.amazonaws.com',
    database: 'cockpit_ml',
    password: '@Wsxzaq1',
    port: 5432,
});

client.connect();

// global.data;

const query = ` SELECT * FROM "rules_aws_custodian";`;



// client
//     .query(query)
//     .then(res => {
//         console.log('Table is successfully created');
//     })
//     .catch(err => {
//         console.error(err);
//     })
//     .finally(() => {
//         client.end();
//     });


// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     for (let row of res.rows) {
//         console.log(row);
//     }
//     client.end();
// });




// client.query(query, (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
   


    
//     //   myFunction( JSON.stringify(res));   
  
//     client.end();
// });




async function main () {
    try {
    const { rows } = await client.query(query)
    console.log(JSON.stringify(rows))
    } catch (err) {
    console.log('Database ' + err)
    }
    client.end();
    }
    main()