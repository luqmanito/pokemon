import axiosClient from "../axiosClient";

interface loginProps {
  email: string | undefined;
  password: string | undefined;
}
interface registerProps {
  email: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined;
}

const Transaction = {
  login( data : loginProps) {
    return axiosClient.post("login", data);
  },
  register( data : registerProps) {
    return axiosClient.post("register", data);
  },
};

export default Transaction;
