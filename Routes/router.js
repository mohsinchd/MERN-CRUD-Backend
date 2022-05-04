const express = require("express");
const users = require("../DB/Models/userSchema");
const router = express.Router();

// Post Data
router.post("/register", async (req, res) => {
  const { name, email, age, mobile, work, address, description } = req.body;
  if (!name || !email || !age || !mobile || !work || !address || !description) {
    res.status(422).json("Please Fill All Fields");
  }

  try {
    const preUser = await users.findOne({ email: email });

    if (preUser) {
      res.status(422).json("This user is already Present");
    } else {
      const newUser = new users({
        name,
        email,
        age,
        mobile,
        work,
        address,
        description,
      });

      const result = await newUser.save();

      res.status(201).json(result);
      console.log(result);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// Get User Data

router.get("/getData", async (req, res) => {
  try {
    const userData = await users.find();
    res.status(200).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Get single user

router.get("/singleUser/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const individualUser = await users.findById({ _id: id });
    res.status(200).json(individualUser);
    console.log(individualUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// update User Data

router.patch("/updateUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete user

router.delete("/deleteUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await users.findByIdAndDelete({ _id: id });
    res.status(201).json(deleteUser);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
