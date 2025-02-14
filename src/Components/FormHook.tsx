import { SubmitHandler, useForm } from "react-hook-form";

interface formData {
  name: string;
  email: string;
  password: string;
}
const FormHook = () => {
  const {
    register, // connects input fields to the form
    handleSubmit, // function to handle form submission
    formState: { errors, isSubmitting }, //validates errors on the form
  } = useForm<formData>();

  const onSubmit: SubmitHandler<formData> = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="name"
          id="name"
          placeholder="enter name"
          {...register("name", { required: "name is reuired" })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          placeholder="enter email"
          id="email"
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          placeholder="enter password"
          {...register("password", {
            minLength: {
              value: 8,
              message: "Password must be 8 characters",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>
      <button disabled={isSubmitting}>
        {isSubmitting ? "loading..." : "Submit"}
      </button>
    </form>
  );
};
export default FormHook;
