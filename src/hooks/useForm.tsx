import { useCallback, useState } from "react";

interface Props<T> {
  initialValues: T;
}

export const useForm = <T,>({ initialValues }: Props<T>) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    },
    [values],
  );

  const reset = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    reset,
  };
};
