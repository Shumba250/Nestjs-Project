# Nestjs-Project

## Installation & required steps

1. Make sure you have Node.js and mySQL installed/running on your computer, If you don't have Postgres installed locally, you can use cloud database service to create the databases
2. Clone this repository using the command : `git clone  `
3. Navigate to the project directory using the command ` cd Nestjs-Project`
4. Install dependencies by running : `npm install --legacy-peer-deps`
5. Create a mySQL database and update the `app.nodule.ts` file with your database credentials.
6. Start the application by running: `npm run start:dev`

## Environment Variables

Before running the application using docker , make sure to set the following environment variables:
1. DB_HOST: Database Host
2. DB_PORT: Database Port
2. DB_USERNAME: The username for your mySQL database
3. DB_PASSWORD: The password for your mySQL database
4. DB_DATABASE: The name of your mySQL database
5. PORT: The port number that the application will run on

