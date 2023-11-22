import { connectToDB } from "@/lib/mongodb";
import User from "@/models/user";
import { IUser } from "@/types";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   connectToDB().catch((err) => res.json(err));

//   if (req.method === "POST") {
//     if (!req.body) return res.status(400).json({ error: "Data is required" });

//     const { fullName, email, password } = req.body;

//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(409).json({ error: "User already exists" });
//     } else {
//       if (password.length > 6)
//         return res
//           .status(409)
//           .json({ error: "Password is less than 6 characters" });

//       const hashPassword = await hash(password, 12);

//       User.create(
//         {
//           fullName,
//           email,
//           password: hashPassword,
//         },
//         (error: unknown, data: IUser) => {
//           if (error && error instanceof mongoose.Error.ValidationError) {
//             for (let field in error.errors) {
//               const msg = error.errors[field].message;
//               return res.status(200).json({ error: msg });
//             }
//           }

//           const user = {
//             email: data.email,
//             fullname: data.fullName,
//             _id: data._id,
//           };

//           return res.status(201).json({
//             success: true,
//             // user,
//           });
//         }
//       );
//     }
//   } else {
//     res.status(405).json({ error: "Method not allowed" });
//   }
// };

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB().catch(err => res.json(err))

  if (req.method === "POST") {
      if (!req.body) return res.status(400).json({ error: "Data is missing" })

      const { fullName, email, password } = req.body

      const userExists = await User.findOne({ email })

      if (userExists) {
          return res.status(409).json({ error: "User Already exists" })
      }
      else {
          if (password.length < 6)
              return res.status(409).json({ error: "Password should be 6 characters long" })

          try {
              const hashedPassword = await hash(password, 12)

              const user = new User({
                  fullName,
                  email,
                  password: hashedPassword
              })

              const savedUser = await user.save();

              const newUser = {
                  email: savedUser.email,
                  fullName: savedUser.fullName,
                  _id: savedUser._id
              }

              return res.status(201).json({
                  success: true,
                  user: newUser
              })
          } catch (error) {
              if (error instanceof mongoose.Error.ValidationError) {
                  //mongo db will return array
                  // but we only want to show one error at a time

                  for (let field in error.errors) {
                      const msg = error.errors[field].message
                      return res.status(409).json({ error: msg })
                  }
              } else {
                  console.error(error)
                  return res.status(500).json({ error: "Server Error" })
              }
          }
      }
  }
  else {
      res.status(405).json({ error: "Method Not Allowed" })
  }
}

export default handler;
