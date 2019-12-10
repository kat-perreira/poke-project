import React from 'react';
import './App.css';
import { useEffect } from 'react';

export default function App() {
  useEffect( () => {
    fetch('/pokemon').then((res) => {
    return res.json()
    }).then(json => console.log(json))
  })
  return (
    <div className="App">
      test hello im a teapot
    </div>
  )};