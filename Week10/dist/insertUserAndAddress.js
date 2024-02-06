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
function insertUserAndAddress(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            yield client.query("BEGIN");
            //insert user
            const insertUserText = `
    INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
            const userRes = yield client.query(insertUserText, [username, email, password]);
            const userId = userRes.rows[0].id;
            //insert address
            const insertAddressText = `
      INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);
    `;
            yield client.query(insertAddressText, [userId, city, country, street, pincode]);
            yield client.query('COMMIT');
            console.log("User and address inserted successfully");
        }
        catch (err) {
            yield client.query('ROLLBACK');
            console.error("Error during transaction, rollback ", err);
            throw err;
        }
        finally {
            yield client.end();
        }
    });
}
insertUserAndAddress('John Doe', 'John@example.com', "securepassword", "New York", "USA", "123 Brooklen", "12001");
