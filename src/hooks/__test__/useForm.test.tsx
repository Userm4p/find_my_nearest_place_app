import React from "react";
import { act, renderHook } from "@testing-library/react";
import { useForm } from "../useForm";

describe("Tests in useForm", () => {
  test('name should change on handleChange is called with name "name" ', async () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues: { name: "", email: "" },
      }),
    );

    const { handleChange } = result.current;

    act(() => {
      handleChange({
        target: { name: "name", value: "Juan" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    const { values } = result.current;

    expect(values).toEqual({ name: "Juan", email: "" });
  });

  test('reset should reset values to initialValues', async () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues: { name: "", email: "" },
      }),
    );

    const { handleChange, reset } = result.current;

    act(() => {
      handleChange({
        target: { name: "name", value: "Juan" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      reset();
    });

    const { values } = result.current;

    expect(values).toEqual({ name: "", email: "" });
  });
});
