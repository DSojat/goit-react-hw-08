import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.field} type="text" name="username" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.field} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.field} type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
