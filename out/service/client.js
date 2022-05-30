"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
//postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName
// string
let olimtoyURL = 'postgres://postgres:1234@127.0.0.1:5432/javohir';
let client = new pg_1.Pool({
    connectionString: olimtoyURL
});
client.connect((err) => {
    console.log(err ? err : 'Database `olimtoy` is connected.');
});
exports.default = client;
