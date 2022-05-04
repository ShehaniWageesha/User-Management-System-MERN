const UserService = require("../services/user.service");
const { validationResult } = require("express-validator");
const httpStatus = require("http-status");

// Create and Save a new todo exercise
const create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(httpStatus.UNPROCESSABLE_ENTITY)
        .json({ message: "Invalid request", errors: errors.array() });
    }

    const { username, gender, city, dob, photo } = req.body;

    const result = await UserService.createUsers({
      username,
      gender,
      city,
      dob,
      photo,
    });
    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Find all users
const findAll = async function (req, res) {
  try {
    var users = await UserService.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single user with an id
const findOne = async (req, res) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update a user by the id in the request
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { username, gender, city, dob, photo } = req.body;

    const result = await UserService.updateUser({
      id,
      username,
      gender,
      city,
      dob,
      photo,
    });

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

// Delete a user with the specified id in the request
const userDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserService.deleteUser(id);

    return res.status(httpStatus.OK).json({ result });
  } catch (error) {
    return res.status(httpStatus[400]).json({ error });
  }
};

module.exports = {
  create,
  findOne,
  findAll,
  update,
  userDelete,
};
