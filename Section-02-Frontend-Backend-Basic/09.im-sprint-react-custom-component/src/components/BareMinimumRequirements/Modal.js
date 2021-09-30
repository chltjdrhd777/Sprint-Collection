import { useState } from 'react';
import styled from 'styled-components';


export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  position: relative;
  
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: #999;
  width: 100%;
  height: 322px;
`;

export const ModalBtn = styled.button`
  margin-top: 135px;
  z-index: 0;
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  background-color: white;
  width: 200px;
  height: 100px;
  border-radius: 20px;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    if (isOpen) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeModalHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}
        // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
        >
          {isOpen ? 'Opened!' : 'Open Modal'}

          {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때는 ModalBtn의 내부 텍스트가 'Opened!' 로 Modal이 닫힌 상태(isOpen이 false인 상태)일 때는 ModalBtn 의 내부 텍스트가 'Open Modal'이 되도록 구현해야 합니다. */}
        </ModalBtn>
        {/* TODO : 조건부 렌더링을 활용해서 Modal이 열린 상태(isOpen이 true인 상태)일 때만 모달창과 배경이 뜰 수 있게 구현해야 합니다. */}
        {isOpen ? 
          <ModalBackdrop onClick={closeModalHandler}>
            <ModalView>Hello World</ModalView> 
          </ModalBackdrop> : null 
        }
        
      </ModalContainer>
    </>
  );
};