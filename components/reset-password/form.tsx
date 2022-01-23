import { Formik } from "formik";
import { Input } from "../ui";

interface IForm {
  value: string;
}

const ResetPasswordForm = () => {
  const onSubmit = ({ value }: IForm) => {
    console.log(value);
  };

  return (
    <Formik initialValues={{ value: "" }} onSubmit={onSubmit}>
      {({
        errors,
        values,
        handleChange,
        handleBlur,
        touched,
        isValid,
        dirty,
      }) => {
        console.log(dirty);

        return (
          <form>
            <div className="mx-11 mb-4">
              <Input
                name="value"
                label="Email, Phone or Username"
                aria-label="Email, Phone or Username"
                value={values.value}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.value}
                valid={!errors.value}
                styles={{ root: { borderRadius: "0.375rem" } }}
              />
            </div>
            <div className="mx-11 mb-3.5">
              <button
                type="submit"
                className="btn-primary block w-full disabled:bg-accent/30"
                disabled={!dirty}
              >
                Send Login Link
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default ResetPasswordForm;
