import mongoose from "mongoose";
import Account from "../models/accountModels.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import generateToken from "../utilities/genToken.js";

export const registerAccount = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const accountExist = await Account.findOne({ email });

  if (accountExist) {
    return res.status(409).json({
      message: "Account is already exist!",
    });
    // throw new Error("Account is already exist!");
  }

  try {
    const account = await Account.create({
      name,
      email,
      password,
    });

    if (account) {
      res.status(201).json({
        _id: account._id,
        name: account.name,
        email: account.email,
        isAdmin: account.isAdmin,
        token: generateToken(account._id),
      });
    }
  } catch (error) {
    res.status(500).json({
      // message: "Invalid account data!!!",
      message: error.message,
    });
    // throw new Error("Invalid account data!");
  }
});

export const loginAccount = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const account = await Account.findOne({ email });

  if (account && (await account.matchPassword(password))) {
    res.status(200).json({
      _id: account._id,
      name: account.name,
      email: account.email,
      token: generateToken(account._id),
    });
  } else {
    res.status(401).json({
      message: "Invalid email or password!",
    });
  }
});
