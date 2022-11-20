const {Client } = require(pg);

const connectionString = 'postgres://yszxqttk:0Cpzie_WYakG9-WwuCPaoS4rmzZLax3R@heffalump.db.elephantsql.com/yszxqttk'

const client  = new Client({
    connectionString
})

console.log("testing commit from anurag b0225254 ");

module.export = client;
