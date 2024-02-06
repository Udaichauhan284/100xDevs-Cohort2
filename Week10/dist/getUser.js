"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const config_1 = require("./config");
const client = new pg_1.Client({
    connectionString: config_1.DB_LINK
});
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const query = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const result = yield client.query(query, values);
            if (result.rows.length > 0) {
                console.log('User found ', result.rows[0]);
                return result.rows[0]; //retrun the user data
            }
            else {
                console.log("No user found with that email");
                return null;
            }
        }
        catch (err) {
            console.log("Error while fetching user ", err);
            throw err; //rethrow or handle error appropriately
        }
        finally {
            yield client.end();
        }
    });
}
getUser('udai@email.com').catch(console.error);
