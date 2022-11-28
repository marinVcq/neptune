import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"xgP23UzmEVf5R52i",
    database:"blog",
})