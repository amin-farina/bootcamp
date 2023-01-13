import dotenv from 'dotenv';

dotenv.config();

export default {
    DB_NAME: process.env.DB_NAME || "bootcamp",
    DB_USER: process.env.DB_USER || "root",
    DB_PASSWORD: process.env.DB_PASSWORD || "",
    DB_DB_PORT: process.env.DB_PORT || 3306,
    SERVER_PORT: process.env.SERVER_PORT || 3000,

}