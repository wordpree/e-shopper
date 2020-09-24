import { useState } from "react";
import { ILogin, TChangeEvent } from "../type";

const useFormLogin = (
  cb: () => void,
  eVandilation: (email: string) => string | null
) => {
  const [input, setInput] = useState<ILogin>({
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
    e.preventDefault();
    cb();
  };
  return { input, handleChange, handleSubmit };
};

export default useFormLogin;
