import dotenv from 'dotenv'
dotenv.config()

export const ENV = {
    PORT: process.env.PORT,
    PROXY: process.env.PROXY
}