import styled from 'styled-components';

// export const ContactsWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

export const ContactItem = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: calc(50% - 5px);
  `;

  export const ContactName = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #37474F;
    margin-right: 10px;
  `;

  export const ContactNumber = styled.p`
    font-size: 16px;
    color: #757575;
  `;

  export const DeleteButton = styled.button`
    background-color: #1E88E5;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      background-color: #1565C0;
      border-color: #0D47A1;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `;