const express = require("express");
const router = express.Router();
const userData = require("../models/schema");

router.post("/insert", async (req, res) => {
  try {
    const { Name, Mobile, Email, Password, City } = req.body;
    if (!Name || !Mobile || !Email || !Password || !City) {
      res.status(400).json({ message: " please enter properly" });
    }

    const document = await userData.findOne({ Mobile: Mobile });
    if (document) {
      res.status(422).json({ error: "phone number should be uniqe" });
    } else if (Name && Mobile && Email && Password && City) {
      res.status(201).json({ message: "data send sucessfully" });
      const userdata = new userData({
        Name,
        Mobile,
        Email,
        Password,
        City,
      });

      await userdata.save();
      res.send("Inserted data");
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/read", async (req, res) => {
  try {
    userData.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  } catch (error) {}
});

router.get("/find/:id", async (req, res) => {
  try {
    {
      userData.find({}, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
    }
  } catch (error) {}
});

router.put("/update/:id", async (req, res) => {
  try {
    const { Name, Mobile, Email, Password, City } = req.body;

    const updatedItem = {
      Name,
      Mobile,
      Email,
      Password,
      City,
    };

    userData.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: updatedItem },
      (req, res, err) => {
        if (!err) {
          console.log(updatedItem);
        } else {
          console.log(err);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await userData.findByIdAndRemove(id).exec();
  res.send("deleted");
});

module.exports = router;
