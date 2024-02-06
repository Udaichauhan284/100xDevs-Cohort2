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
const client = new pg_1.Client({
    connectionString: "postgresql://Udaichauhan284:5zLFEGf6yBAP@ep-aged-block-a5jr99k0.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
function insertData(usernmae, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const values = [usernmae, email, password];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success ", res);
        }
        catch (err) {
            console.log("Error during insertion: ", err);
        }
        finally {
            yield client.end(); //close the client connection
        }
    });
}
//example usage
insertData('udai', 'udai@email.com', 'user_password').catch(console.error);
