const httpStatus = require("http-status");
const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const APIError = require("../helpers/api-error");
const logger = require("../helpers/logger");

const createUsers = async ({ username, gender, city, dob, photo }) => {
  let session = null;
  try {
    session = await mongoose.startSession();
    session.startTransaction();

    const user = new UserModel({
      username,
      gender,
      city,
      dob,
      photo,
    });

    const createUsers = await user.save({ session });

    if (!createUsers) {
      throw new APIError({
        message: "Error occured while creating a user",
        status: httpStatus.INTERNAL_SERVER_ERROR,
        isPublic: false,
      });
    }

    await session.commitTransaction();

    return {
      message: "User created",
      data: user.id,
    };
  } catch (error) {
    logger.error("Error occured while creating a user", error);
    if (session) {
      await session.abortTransaction();
    }
    throw new APIError(error);
  } finally {
    if (session) {
      session.endSession();
    }
  }
};

const getUsers = async function (data) {
  try {
    const allUsers = await UserModel.find(data);
    return {
      message: "Listing all users",
      data: allUsers,
    };
  } catch (e) {
    // Log Errors
    throw Error("Error while getting users");
  }
};

const getUserById = async (id) => {
  try {
    const foundUser = await UserModel.findById(id);
    console.log("Users : ", foundUser);
    return {
      message: "Listing a single user",
      data: foundUser,
    };
  } catch (error) {
    logger.error("Error occured while reading the user", error);
    throw new APIError(error);
  }
};

const updateUser = async ({ id, username, gender, city, dob, photo }) => {
  try {
    const user = await UserModel.findById(id);

    user.overwrite({ username, gender, city, dob, photo });
    await user.save();

    return {
      message: "User updated successfully",
      data: user,
    };
  } catch (error) {
    logger.error("Error occured while updating the user", error);
  }
};

const deleteUser = async (id) => {
  try {
    const user = await UserModel.deleteOne({ _id: id });
    console.log(user);
    return {
      message: "User deleted successfully",
    };
  } catch (error) {
    logger.error("Error occured while deleting the user", error);
  }
};

module.exports = {
  createUsers,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
