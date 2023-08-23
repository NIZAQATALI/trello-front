// Styled.js

import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

export const ModalHeader = styled.div`
  padding: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
`;

export const ModalBody = styled.div`
  padding: 20px;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-top: 1px solid #ccc;

  button {
    padding: 8px 15px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &.primary {
      background-color: #007bff;
      color: white;
    }

    &.secondary {
      background-color: #ccc;
    }
  }
`;
