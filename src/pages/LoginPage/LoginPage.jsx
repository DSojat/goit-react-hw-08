import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const emailId = nanoid();
  const pwdId = nanoid();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label htmlFor={emailId}>Email</label>
        <Field className={css.field} type="email" name="email" id={emailId} />
        <label htmlFor={pwdId}>Password</label>
        <Field
          className={css.field}
          type="password"
          name="password"
          id={pwdId}
        />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
