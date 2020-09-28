import { useState } from "react";
import { ILogin, TChangeEvent } from "../type";

const useFormLogin = (
  cb: (username: string, password: string, email: string) => void,
  eVandilation: (email: string) => string | null
) => {
  const [input, setInput] = useState<ILogin>({
    username: "",
    email: "",
    password: "",
    checkbox: false,
    error: null,
  });
  const handleChange = (e: TChangeEvent) => {
    let err = null;
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (typeof value === "string" && name === "email") {
      err = eVandilation(value);
    }
    setInput({
      ...input,
      [name]: value,
      error: err,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { username, password, email, error } = input;
    e.preventDefault();
    if (!error && username && password) {
      cb(username, password, email);
    }
  };
  return { input, setInput, handleChange, handleSubmit };
};

export default useFormLogin;
