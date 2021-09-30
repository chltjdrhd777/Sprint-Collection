import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Gallery from '../page/Gallery';
import images from "../data/images";
import { resq$ } from 'resq'

describe('사진 목록이 map을 이용한 반복을 통해 보여져야 합니다', () => {

  const container = document.createElement('div')

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  it('#list 아래에 <a> 엘리먼트가 세 개 있어야합니다', () => {
    render(<Gallery />, { container })
    expect(container.querySelectorAll('#list > a').length).toBe(3)
  })

  it('<a> 엘리먼트의 자식으로 <Thumbnail> 컴포넌트가 있어야합니다', () => {
    render(<Gallery />, { container })
    expect(container.querySelectorAll('#list > a > img.thumbnail').length).toBe(3)
  })
})

describe('목록에서 선택한 사진은 별도로 크게 보여야 합니다', () => {

  const container = document.createElement('div')

  afterEach(() => {
    jest.clearAllMocks();
    ReactDOM.unmountComponentAtNode(container)
  })

  it('선택한 사진은 상태로 존재해야 하며, 초기값은 0번째 인덱스의 이미지여야 합니다', () => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    let initialValues = []
    useStateSpy.mockImplementation(init => {
      initialValues.push(init);
      return [init, setState]
    })

    render(<Gallery />, { container })
    expect(useStateSpy).toBeCalled()
    expect(initialValues).toEqual(expect.arrayContaining([images[0]])) // 상태의 초기값이 0번째 인덱스의 이미지어야 합니다

    useStateSpy.mockRestore()
  })

  it('`#current-image`에 현재 선택한 사진이 표시되어야 합니다', () => {
    const setState = jest.fn()
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation(() => {
      return [{
        src: 'hello.jpeg'
      }, setState]
    })

    render(<Gallery />, { container })
    // 현재 이미지가 hello.jpeg 이라고 가정합니다
    expect(container.querySelector('#current-image').src).toEqual(expect.stringContaining('hello.jpeg'))
    useStateSpy.mockRestore()
  })
})

describe('사진 목록에 있는 사진을 클릭하면, 현재 선택한 사진이 바뀌어야 합니다', () => {

  const container = document.createElement('div')

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  it('<a> 엘리먼트를 클릭하면 handleClick 함수가 실행되고, 클릭한 이미지 정보가 인자로 전달되어야 합니다', () => {
    render(<Gallery />, { container })

    const handler = resq$('a', container).props.onClick;
    expect(typeof handler).toBe('function') // <a> 엘리먼트 클릭시 이벤트 핸들러가 존재합니다
    expect(handler.toString()).toMatch('handleClick') // <a> 엘리먼트 클릭시 handleClick 함수가 실행됩니다
  })

  it('handleClick 함수를 통해 선택한 사진에 대한 상태가 변경되어야 합니다', () => {
    render(<Gallery />, { container })

    fireEvent.click(container.querySelectorAll('a')[1]) // 1번째 인덱스의 썸네일 이미지를 클릭하면
    expect(container.querySelector('#current-image').src).toEqual(expect.stringContaining('cat.jpeg')) // 현재 이미지가 cat.jpeg가 됩니다

    fireEvent.click(container.querySelectorAll('a')[2]) // 2번째 인덱스의 썸네일 이미지를 클릭하면
    expect(container.querySelector('#current-image').src).toEqual(expect.stringContaining('dog.jpeg')) // 현재 이미지가 dog.jpeg가 됩니다

    // 이미지 순서는 data/images.js 를 참고하세요
  })
})