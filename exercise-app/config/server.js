// enviroment variable
const dev = process.env.NODE_ENV !== 'production'

// change to website to website domain name 

export const server = dev ? "http://localhost:3000" : 'https://yourwebsite.com'