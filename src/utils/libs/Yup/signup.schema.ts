import * as Yup from "yup";
import { message } from "../../data/messages";

export const signupSchema = Yup.object({
  firstName: Yup.string().max(15, message.max(15)).required(message.isRequired('Email Address')),
  lastName: Yup.string().max(20, message.max(20)).required(message.isRequired('Last Name')),
  passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});
