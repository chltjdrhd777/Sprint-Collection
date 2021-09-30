import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { resq$ } from 'resq'

describe('메뉴에는 Gallery, About이라는 두 개의 항목이 존재해야 합니다', () => {

  const container = document.createElement('div')

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  it('ul > li 엘리먼트 아래에 <Link> 컴포넌트가 두 개 존재해야 합니다', () => {
    render(<App />, { container })
    expect(container.querySelectorAll('ul > li > a').length).toBe(2)
  })

  it('<Link> 컴포넌트는 각각 `/`, `/about` 주소로 이동할 수 있어야 합니다', () => {
    render(<App />, { container })
    expect(container.querySelector('ul > li > a[href="/"]').href).toBeDefined()
    expect(container.querySelector('ul > li > a[href="/about"]').href).toBeDefined()
  })

})

describe('페이지 영역이 존재하며, 메뉴 선택에 따라 페이지가 바뀌어야 합니다', () => {

  const container = document.createElement('div')

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  it('`#page` 영역에 라우팅에 따른 페이지 분기를 구현해야 합니다', () => {
    render(<App />, { container })
    const switchComponent = resq$('Switch', container);
    expect(switchComponent.children).toBeDefined();
  })

  it('기본적으로 <Gallery> 페이지가 보여야 합니다', () => {
    render(<App />, { container })
    expect(container.querySelector('#list')).toBeDefined()
    expect(container.querySelector('#current-image')).toBeDefined()
  })

  it('`/about` 주소로 이동하면, <About> 페이지가 보여야 합니다', () => {
    render(<App />, { container })
    fireEvent.click(container.querySelector("a[href='/about']"))

    expect(container.querySelector('#about-page')).toBeDefined()
    expect(container.querySelector('#list')).toBeNull()
    expect(container.querySelector('#current-image')).toBeNull()
  })
})