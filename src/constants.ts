export const PROD_URL = "https://const-server.onrender.com/"
export const DEV_URL = "http://localhost:4000/"
export const ENV = import.meta.env.PROD;
export const API_URL = ENV ? PROD_URL : DEV_URL