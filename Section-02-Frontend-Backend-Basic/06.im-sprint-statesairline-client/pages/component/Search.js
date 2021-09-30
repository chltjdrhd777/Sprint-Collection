/*
🧩 Search 컴포넌트를 통해 상태 끌어올리기를 학습합니다
  ✓ 검색 화면이 Search 컴포넌트로 분리되어야 합니다 (10 ms)
  ✕ Search 컴포넌트에는 상태 변경 함수 `search`가 `onSearch` props로 전달되어야 합니다 (26 ms)
  ✕ 상태 변경 함수 `search`는 Search 컴포넌트의 `검색` 버튼 클릭 시 실행되어야 합니다 (87 ms)

  const handleSearchClick = () => {
    console.log('검색 버튼을 누르거나, 엔터를 치면 search 함수가 실행됩니다')
    // TODO:
    onSearch({ //데스티네이션에 우리가 친 데스티네이션이 들어가서 
      departure: "ICN", 
      destination: textDestination
    })
  }
*/

import { useState } from 'react'

function Search({ onSearch }) {
  const [textDestination, setTextDestination] = useState('')

  const handleSearchButton = () => {
    const departure = 'ICN'
    const destination = textDestination === '' ? null : textDestination
    onSearch({
      departure,
      destination
    })
  }

  const handleChange = (e) => {
    setTextDestination(e.target.value.toUpperCase())
  }

  const handleKeyPress = (e) => {
    if (e.type === 'keypress' && e.code === 'Enter') {
      handleSearchButton()
    }
  }

  return <fieldset>
    <legend>공항 코드를 입력하고, 검색하세요</legend>
    <span>출발지</span>
    <input id="input-departure" type="text" disabled value="ICN"></input>
    <span>도착지</span>
    <input id="input-destination" type="text" value={textDestination} onChange={handleChange} placeholder="CJU, BKK, PUS 중 하나를 입력하세요" onKeyPress={handleKeyPress} />
    <button id="search-btn" onClick={handleSearchButton}>검색</button>
  </fieldset>
}

export default Search