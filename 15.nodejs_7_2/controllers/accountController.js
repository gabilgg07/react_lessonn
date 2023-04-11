import mongoose from "mongoose";
import Account from "../models/accountModels.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import generateToken from "../utilities/genToken.js";

export const registerAccount = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const accountExist = await Account.findOne({ email });

  if (accountExist) {
    res.status(409);
    throw new Error("Account is already exist!");
  }

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
  } else {
    res.status(400);
    throw new Error("Invalid account data!");
  }
});
