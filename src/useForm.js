import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  // can return object with {}, here returns array
  return [
    values,
    e => {
      setValues({
        ...values,
        [e.target.name]: e.target.value //為何一定是 []
      });
    }
  ];
};