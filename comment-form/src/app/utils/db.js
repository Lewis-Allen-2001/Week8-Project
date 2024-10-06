import pg from 'pg'

    let conn = null;
    export function db() {
        if (conn == null) {
            conn = new pg.Pool({
                connectionString: process.env.DB_URL,
            })
        }
        return conn;
    }
 
