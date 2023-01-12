// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-03/sw.js", {
    scope: "/ICS20-Unit-6-03/",
  })
}

const weather = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress)
    const jsonData = await request.json()
    let temp1 = jsonData.main.temp
    let temp2 = temp1 - 273.6
    let iconId = jsonData.weather[0].icon
    let linkToIcon = "https://openweathermap.org/img/wn/" + iconId + "@2x.png"
    //let finalLink = <img src=" + linkToIcon +  " alt="Weather image" ></img>

    console.log(jsonData.weather)
    document.getElementById("image").innerHTML = "<img src=" + linkToIcon + ">"
    //document.getElementById("image").innerHTML = '<img src=" + linkToIcon +  " alt="Weather image" >'
    //document.getElementById("image").innerHTML = finalLink

    document.getElementById("temp").innerHTML =
      "The tempurature outside is " + temp2.toFixed(2) + "° C"
  } catch (err) {
    console.log(err)
  }
}

weather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
