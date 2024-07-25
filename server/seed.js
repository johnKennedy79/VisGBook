import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DBMESSAGES });

db.query(`
CREATE TABLE IF NOT EXISTS messages (
id SERIAL PRIMARY KEY,
name VARCHAR(64) NOT NULL,
message TEXT NOT NULL,
emoji VARCHAR(10)
);

INSERT INTO messages (name, message, emoji) VALUES
('IFC', 'This is a test message', ''),
('IFC', 'Here at IFC we would love to here from you so please leave a meassage', '&#128077');
`);
