import React, { useState, useEffect } from "react";
import axios from "axios";

import './App.css'

export default function App() {

  const [advice, setAdvice] = useState("")

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/advice`)
      .then((response) => {
        setAdvice(response.data.slip.advice)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Note : If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchData}>
          <span>GET NEW ONE!</span>
        </button>
      </div>
    </div>
  )
}