import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Gallery from './page/Gallery';

function App() {
  return <div>
    <ul>

    </ul>
    <div id="page">
      {/* TODO: 현재는 Gallery 컴포넌트만 보이지만, URL에 의해 컴포넌트가 다르게 보여야 합니다. */}
      <Gallery></Gallery>
    </div>
  </div>
}

export default App;