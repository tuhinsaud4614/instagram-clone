import { Formik } from "formik";
import { Input } from "../ui";

interface IForm {
  newPassword: string;
  confirmPassword: string;
}

const RecoveryLanding = () => {
  const onSubmit = (values: IForm) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={{ newPassword: "", confirmPassword: "" }}
      onSubmit={onSubmit}
    >
      {({
        errors,
        values,
        handleChange,
        handleBlur,
        touched,
        isValid,
        dirty,
      }) => {
        return (
          <form>
            <div className="mb-4">
              <Input
                type="password"
                name="newPassword"
                label="New Password"
                aria-label="New Password"
                value={values.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.newPassword}
                valid={!errors.newPassword}
              />
            </div>
            <div className="mb-5">
              <Input
                type="password"
                name="confirmPassword"
                label="Confirm New Password"
                aria-label="Confirm New Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.confirmPassword}
                valid={!errors.confirmPassword}
              />
            </div>
            <button
              type="submit"
              className="btn-primary block w-full py-3 px-4.5"
              disabled={!dirty}
            >
              Change Password
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default RecoveryLanding;
