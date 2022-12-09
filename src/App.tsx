import * as React from 'react';
import Data from './data.json';
import {useState} from 'react';
import './style.css';
export default function App() {
  return (
      <div className="outer-box">
        <h1>Oblíbená letiště</h1>
        <h1>Všechny letiště</h1>
        {
          Data.map( data => {
            return (
                <div className="box">
                  <div className="row1">
                    <h2>{data.name}</h2>
                    <h3>{data.municipality}</h3>
                  </div>
                  <div className="row2">
                    <h3>{data.code}</h3>
                    <h3>{data.gpscode}</h3>
                  </div>
                  <div>
                    <button onClick={() => alert("LAT: " + data.lat + " LONG: " + data.long)}>Zobrazit souřadnice</button>
                  </div>
                  <img src={`${data.image}`}></img>
                  <div>
                    <button>Přidat do oblíbených</button>
                  </div>
                </div>
            )
          })
        }
      </div>
  );
}