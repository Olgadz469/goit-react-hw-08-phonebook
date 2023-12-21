import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  Button,
  Label,
  Form,
  Input,
} from '../../components/ContactForm/ContactForm.styled';
import { toast } from 'react-hot-toast';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(register({ name: name, email: email, password: password }))
      .unwrap()
      .then(() => {
        toast.success('Registration successfully');
      })
      .catch(() => {
        toast.error('Some error...');
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Username"
          pattern="^[^\d]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

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

      <Button type="submit">Sign in</Button>
    </Form>
  );
};
export default RegisterForm;
