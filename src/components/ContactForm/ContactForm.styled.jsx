import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;

`;


export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  width: 100%;
  background-color: #E3F2FD;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: #BBDEFB;
    border-color: #1E88E5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  background-color: #1E88E5;
  margin-top: 30px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: #1565C0;
    border-color: #0D47A1;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #37474F;
  margin-bottom: 20px;  
`



