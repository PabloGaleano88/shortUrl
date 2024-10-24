import mysql from "mysql2/promise";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

const MYSQL_CONFIG = {
  host: process.env.DBHOST,
  user: process.env.DBUSER,
  port: process.env.DBPORT,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
};

let connection;

try {
  connection = await mysql.createConnection(MYSQL_CONFIG);
  console.log(`DB connection success on port ${MYSQL_CONFIG.port}`);
} catch (error) {
  console.error("An error occurred while trying to connect to the DB");
}

export class LinkModel {
  async getLink(url) {
    if (url) {
      const urlLowerCase = url.toLowerCase();
      try {
        const [oUrl] = await connection.query(
          "SELECT original_url FROM links WHERE short_url = LOWER(?);",
          [urlLowerCase]
        );

        return oUrl[0]?.original_url ?? "URL not found";
      } catch (e) {
        console.log("An error occurs when trying to connect to the DB");
      }
    }
  }

  async addLink(original_url, expired_at, user_address) {
    if (original_url && expired_at && user_address) {
      const short_url = uuidv4().slice(0, 6);
      try {
        await connection.query(
          "INSERT INTO links (original_url, expires_at, short_url, user_ip) VALUES (?, ?, ?, ?)",
          [original_url, expired_at, short_url, user_address]
        );
        return short_url;
      } catch (e) {
        return "something went wrong";
      }
    } else {
      return "some values are not present";
    }
  }
}
