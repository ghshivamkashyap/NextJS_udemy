import React from "react";
import classes from "./page.module.css";

const sql = require("better-sqlite3");

const db = sql("meals.db");

const MealsPage = async () => {
  const data = db.prepare("SELECT * FROM meals").all();
  console.log(data);

  return <div className=" text-white">i am meal page</div>;
};

export default MealsPage;
