import {Knex, knex} from "knex";
import dotenv from "dotenv"

dotenv.config()


export abstract class BaseDatabase {

    private static connection: Knex 

    protected getConnection(): Knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                  host: process.env.DB_HOST,
                  port: 3306,
                  user: process.env.DB_USER,
                  password: process.env.DB_PASSWORD,
                  database: process.env.DB_DATABASE_NAME,
                },
              });        
        }

        return BaseDatabase.connection;
    }


}