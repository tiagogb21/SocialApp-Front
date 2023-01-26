import * as Yup from "yup";
import { message } from "../../data/messages";

export const signinSchema = Yup.object({
  email: Yup.string().email(message.invalid('Email Address')).required(message.isRequired('Email Address')),
  password: Yup.string().required(message.isRequired('Password')).min(6, message.min(6)),
});
