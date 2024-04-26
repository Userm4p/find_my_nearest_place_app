import { useState } from "react";


interface Props<T>{
    initialValues: T;
}

export const useForm = <T,>({
    initialValues
}:Props<T>) => {
    
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const reset = () => {
        setValues(initialValues);
    };

  return ({
    values,
    handleChange,
    reset
  })
}
