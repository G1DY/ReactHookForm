import { SubmitHandler, useForm } from "react-hook-form";
import "./AdvancedForm.css";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  completeLocation: string;
}

const AdvancedForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">FirstName: </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "firstName is required" })}
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">LastName: </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "lastName is required" })}
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email entry",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "city name is required" })}
          />
          {errors.city && <p>{errors.city.message}</p>}
        </div>
        <div>
          <label htmlFor="state">State: </label>
          <input
            type="text"
            id="state"
            {...register("city", { required: "state name is required" })}
          />
          {errors.state && <p>{errors.state.message}</p>}
        </div>
        <div>
          <label htmlFor="zip">ZIP: </label>
          <input
            type="text"
            id="zip"
            {...register("zip", { required: "zip number is required" })}
          />
          {errors.zip && <p>{errors.zip.message}</p>}
        </div>
        <div>
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            {...register("country", { required: "country name required" })}
          />
          {errors.country && <p>{errors.country.message}</p>}
        </div>
        <div>
          <label htmlFor="completeLocation">Complete Location</label>
          <input
            type="text"
            id="completeLocation"
            {...register("completeLocation", {
              required: "Complete Location required",
            })}
          />
          {errors.completeLocation && <p>{errors.completeLocation.message}</p>}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default AdvancedForm;
