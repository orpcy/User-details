export const getUsers = (req, res) => {
  con.query("SELECT * FROM people ORDER BY id", (err, result) => {
    if (err) {
      res.send({
        success: false,
        msg: "unable to get users",
        reason: err
      })
    } else {
      res.send(result);
    }
  });
};

export const singleUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  con.query(`SELECT * FROM people WHERE id = ${id}`, (err, result) => {
    if (err) {
      res.send({
        success: false,
        msg: "unable to get user",
        reason: err
      })
    } else {
      res.send(result);
    }
  });
};

export const addUser = (req, res) => {
  const { name, age, sex } = req.body;
  con.query(`INSERT INTO people SET ?`, { name, age, sex }, (err, result) => {
    if (err) {
      res.send({
        success: false,
        msg: "unable to add user",
        reason: err
      });
    } else {
      res.send({
        success: true,
        msg: "user added successfully",
        data: result
      });
    }
  });
};
