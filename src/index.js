import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from '../src/pages/cadastro/Video';
import CadastroCategoria from '../src/pages/cadastro/Categoria';
const Page404 = () => (<div>Page 404</div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
