const express = require("express");
require("dotenv").config();
const { sequelize, UUIDV4 } = require("./models/index");
const app = require("./server");
const PORT = process.env.PORT || 8000;
const db = require("./models/");
const Role = db.role;


async function testSequelizeConnection() {
  try {
    await sequelize.authenticate();
    console.log();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testSequelizeConnection();
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

function initial() {
  Role.create({
    id: UUIDV4,
    name: "user",
  });

  Role.create({
    id: UUIDV4,
    name: "moderator",
  });

  Role.create({
    id: UUIDV4,
    name: "admin",
  });
}
