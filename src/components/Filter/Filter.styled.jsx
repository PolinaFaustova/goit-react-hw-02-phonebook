import styled from 'styled-components';

export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  width: 50%;
  background-color: #E3F2FD;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: #BBDEFB;
    border-color: #1E88E5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.p`
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #37474F;
  margin-bottom: 20px;  
`