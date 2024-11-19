// import sql from "better-sqlite3";

const sql = require("better-sqlite3");
const db = sql("meals.db");

export function GetMeals() {
  const data = db.prepare("SELECT * FROM meals").all();
  console.log(data);
}
// getMeals();
