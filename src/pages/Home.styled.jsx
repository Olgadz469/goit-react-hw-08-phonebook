import styled from 'styled-components';
import Image from '../assets/milky-way-2x.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  color: #ffffff;
  text-align: left;
  width: 50%;
  margin-top: 60px;
  margin-left: 60px;
  margin-right: auto;
`;
