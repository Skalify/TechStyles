import styled from 'styled-components';

const ButtonFloatRight = styled.button`
  float: right;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  z-index: 2;
  color: purple;
`;

const ComparaisonModal = styled.div`
  display:  ${(props) => props.displayModal ? 'block' : 'none'};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0, 0);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  paddding: 5em;
  border: 1em solid #888;
  width: 35%;
`;

// const Div = styled.div`
//   background: whitesmoke;
//   margin: 0.25em;
//   padding: 0.25em;
//   border: 2px solid black;
// `;

const ImageRelatedProduct = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
`;

const RelatedProductContainer = styled.section`
  display: flex
`;

const CloseModalButton = styled.button`
  color: #aaa;
  float: right;
  font-size: 2em;
  font-weight: bold;
`;

const Table = styled.table`
border-collapse: collapse;
border-spacing: 0;
width: 100%;
border: 1px solid #ddd;
`;

const TableText = styled.td`
text-align: center;
`;

const ButtonAddItem = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export {
  ButtonAddItem,
  ButtonFloatRight,
  CloseModalButton,
  ComparaisonModal,
  ImageRelatedProduct,
  RelatedProductContainer,
  ModalContent,
  Table,
  TableText,
};