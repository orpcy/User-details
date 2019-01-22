import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "Orpcy",
  password: "sophew",
  database: "testing"
});

global.con = con;

con.connect(err => {
  //handling connection to database
  if (err) throw err;
  console.log("db connected!");

  // //creating database
  // con.query(`CREATE DATABASE IF NOT EXISTS testing`, (err, res) => {
  //   if (err) throw err;
  //   console.log("Database created!");
  // });

  //creating table
  con.query(
    `CREATE TABLE IF NOT EXISTS people(
    id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    age INT(11) NOT NULL,
    sex VARCHAR(200) NOT NULL,
    date DATETIME NOT NULL DEFAULT NOW()
  )`,
    (err, res) => {
      if (err) {
        throw err;
      } else {
        console.log("Table created successfully!");
      }
    }
  );

  // con.query(`INSERT INTO people (name, age, sex) VALUES('mosh', 15, 'male')`, (err, result) => {
  //   if(err){
  //     throw err;
  //   }else{
  //     console.log('row created!');
  //   }
  // })
});

export default con;
