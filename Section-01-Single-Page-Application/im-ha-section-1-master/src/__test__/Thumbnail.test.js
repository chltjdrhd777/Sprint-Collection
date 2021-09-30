import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Thumbnail from '../component/Thumbnail';
import { resq$ } from 'resq'

describe('썸네일이 표현되어야 합니다', () => {

  const container = document.createElement('div')

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container)
  })

  it('thumbnail 클래스를 가진 <img> 엘리먼트를 리턴해야 합니다', () => {
    render(<Thumbnail />, { container })

    const element = container.querySelector('img.thumbnail')
    expect(element).toBeTruthy() // img.thumbnail 이 존재해야 합니다
    expect(element.tagName).toBe('IMG') // img.thumbnail 의 태그 이름은 img입니다
    expect(element.classList.contains('thumbnail')).toBeTruthy()
  })

  it('`source` 라는 이름의 props으로 이미지 파일 이름을 전달받아야 합니다', () => {
    render(<Thumbnail source="selfie.jpeg" />, { container })
    const props = resq$('Thumbnail', container).props;
    expect(Thumbnail.length).toBe(1)
    expect(props).toHaveProperty('source', 'selfie.jpeg')
  })

  it('<img> 엘리먼트는 source props로 받은 이미지를 표시해야 합니다', () => {
    render(<Thumbnail source="selfie.jpeg" />, { container })
    expect(container.querySelector('img.thumbnail')).toHaveAttribute('src', 'selfie.jpeg')
  })
})