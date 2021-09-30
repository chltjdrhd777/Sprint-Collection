import { useState } from 'react';
import styled from 'styled-components';

/*
Tag UI 컴포넌트 기능 테스트
    Enter 키 테스트
      ✓ 새로운 태그를 추가하는 기능은 Enter 키에 의해 실행되어야 합니다. (21 ms)
      ✓ Enter 키를 누르면 tag 를 추가하는 addTags 함수가 실행되어야 합니다. (5 ms)
      ✓ Enter키를 누르면 실제 태그가 추가되어야 합니다. (114 ms)
      ✓ 아무것도 입력하지 않은 경우, Enter를 눌러도 태그가 추가되지 않아야 합니다. (24 ms)
      ✓ 중복된 값이 이미 존재하는 경우, Enter를 눌러도 태그가 추가되지 않아야 합니다. (31 ms)
      ✓ 새로운 태그가 추가되면 입력창은 초기화되어야 합니다. (6 ms)
    tags의 화면 출력과 제거 기능 테스트
      ✓ tags 배열의 모든 태그가 화면에 보여져야 합니다. (25 ms)
      ✕ tag 를 삭제할 수 있는 아이콘(x)이 있어야 하며, 해당 아이콘(x)을 클릭하면 removeTags 함수가 실행되어야 합니다. (6 ms)
      ✕ 삭제 아이콘을 누르면 화면에서 Tag가 삭제되어야 합니다. (1019 ms)
*/

// TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!

export const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: #4000c7;
        > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: #4000c7;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {    
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
    outline: transparent;
  }
  }

  &:focus-within {
    border: 1px solid #4000c7;
  }

`;

export const Tag = () => {
  const initialTags = ['CodeStates', 'kimcoding'];

  const [tags, setTags] = useState(initialTags);
  const [inputText, setInputText] = useState('');

  const removeTags = (indexToRemove) => {
    // TODO : 태그를 삭제하는 메소드를 완성하세요.
    //console.log(indexToRemove.target.id);
    setTags(tags.filter((_, index) => index !== Number(indexToRemove.target.id)));
    //setTags(tags.filter((_, index) => index !== indexToRemove))
  };
  
  const addTags = (event) => {
    // TODO : tags 배열에 새로운 태그를 추가하는 메소드를 완성하세요. 
    // 이 메소드는 태그 추가 외에도 아래 3 가지 기능을 수행할 수 있어야 합니다.
    // - 이미 입력되어 있는 태그인지 검사하여 이미 있는 태그라면 추가하지 말기
    // - 아무것도 입력하지 않은 채 Enter 키 입력시 메소드 실행하지 말기
    // - 태그가 추가되면 input 창 비우기
    //setTags(tags.push(event.target.value));
    let newTags = tags.slice(0);
      if (newTags.indexOf(event.target.value) === -1 && event.target.value !== '') {
        newTags.push(event.target.value);
        setTags(newTags);
      } else {
        setTags(newTags);
      }
  }

  const inputChange = (event) => {
    setInputText(event.target.value);
  }
  
    //&Cross; x버튼 html entities

  return (
    <>
      <TagsInput>
        <ul id='tags'>
          {tags.map((tag, index) => (
            <li key={index} className='tag'>
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon' id={index} onClick={removeTags}>{<>&#10005;</>}
                {/* TODO :  tag-close-icon이 tag-title 오른쪽에 x 로 표시되도록 하고,
                            삭제 아이콘을 click 했을 때 removeTags 메소드가 실행되어야 합니다. */}
              </span>
            </li>
          ))}
        </ul>
        <input
          className='tag-input'
          type='text'
          onKeyUp={(event)=> {{
            /* 키보드의 Enter 키에 의해 addTags 메소드가 실행되어야 합니다. */
            if(event.key === 'Enter'){
              addTags(event);
              setInputText('');
            }
          }}}
          onChange={inputChange}
          value={inputText}
          placeholder='Press enter to add tags'
        />
      </TagsInput>
    </>
  );
};