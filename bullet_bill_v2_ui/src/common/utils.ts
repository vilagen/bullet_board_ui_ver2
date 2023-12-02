import bcrypt from "bcryptjs-react";

export const hashValue = ( (value:string, saltRounds:string = bcrypt.genSaltSync(10)):string => {
  const encryptedPassword:string = bcrypt.hashSync(value, saltRounds);
  return encryptedPassword
})