import UserInstance from "@/utils/axios";

export const LoginUserData = async (email:string,password:string) => {
console.log(email,password);

const bodyFormData = { email:email, password:password };
   return await UserInstance.post(`/auth/signin`,bodyFormData);

  };

