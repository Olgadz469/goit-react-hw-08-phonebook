import styled, { css } from 'styled-components';

const commonInputStyles = css`
  width: 100%;
  padding: 18px;
  background-color: #f7f7f7;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  border-radius: 10px;
  border: none;

  transition: outline rgba(71, 84, 103, 0.2);

  &:hover,
  &:focus {
    outline: 1px solid #101828;
  }

  &::placeholder {
    color: rgba(16, 24, 40, 0.6);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-self: flex-start;
  border-radius: 10px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  padding: 24px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const TitleBlock = styled.div`
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    color: #101828;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 16px;
    color: rgba(16, 24, 40, 0.6);
    margin: 8px 0 14px 0;
  }
`;

export const Label = styled.label`
  position: relative;

  input {
    ${commonInputStyles}
  }

  textarea {
    ${commonInputStyles}
    resize: none;
  }

  svg#calendar {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }
`;

export const ErrorMsg = styled.p`
  position: absolute;
  font-size: 12px;
  color: #e44848;
`;

export const SubmitBtn = styled.button`
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  width: 150px;
  max-height: 60px;
  padding: 16px;
  border-radius: 200px;
  color: #fff;
  background-color: #e44848;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      background-color: #e44848;
    }
  }
`;
