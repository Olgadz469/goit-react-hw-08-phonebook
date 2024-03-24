import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import formSchema from '../../../schemas/formSchema';
import Calendar from './Calendar/Calendar';
import toast from 'react-hot-toast';
import { bookCamper } from '../../../redux/slice';
import sprite from 'assets/icons/sprite.svg';
import { ErrorMsg, Form, Label, SubmitBtn, TitleBlock } from './Form.styled';

const BookForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    date: Date.now(),
    comment: '',
  };

  const handleFormSubmit = async ({ name, email, date, comment }) => {
    const formData = {
      name,
      email,
      date,
      comment,
    };

    const isValid = await formSchema.isValid(formData);

    if (!isValid) {
      return;
    }

    dispatch(bookCamper(formData));
    toast.success('Success!');

    setTimeout(() => window.location.reload(), 500);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={formSchema}
    >
      {({ touched, errors, handleSubmit, getFieldProps }) => (
        <Form onSubmit={handleSubmit}>
          <TitleBlock>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </TitleBlock>

          <Label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...getFieldProps('name')}
            />
            {errors.name && touched.name && <ErrorMsg>{errors.name}</ErrorMsg>}
          </Label>

          <Label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...getFieldProps('email')}
            />
            {errors.email && touched.email && (
              <ErrorMsg>{errors.email}</ErrorMsg>
            )}
          </Label>

          <Label>
            {<Calendar />}
            <svg id="calendar" width={20} height={20}>
              <use href={`${sprite}#icon-calendar`}></use>
            </svg>

            {errors.date && touched.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </Label>

          <Label>
            <textarea
              name="comment"
              placeholder="Comment"
              {...getFieldProps('comment')}
            />
            {errors.comment && touched.comment && (
              <ErrorMsg>{errors.comment}</ErrorMsg>
            )}
          </Label>

          <SubmitBtn type="submit" disabled={Object.keys(errors).length > 0}>
            Send
          </SubmitBtn>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
