import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

import {
  Button,
  Label,
  Form,
  Input,
} from '../../components/ContactForm/ContactForm.styled';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email: email, password: password }))
      .unwrap()
      .then(() => {
        toast.success('Login successfully');
      })
      .catch(() => {
        toast.error('Some error...');
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Email"
          required
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
        />
      </Label>

      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Password"
          required
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
        />
      </Label>

      <Button type="submit">Login</Button>
    </Form>
  );
};
export default LoginForm;
