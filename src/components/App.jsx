import * as React from 'react';

export const App = ({todos}) => (
  <div className="app">
    <TodoControls />
    <TodoList />
  </div>
);