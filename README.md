# Stock Tracking App

React Based Application

## About

Multi-page appplication to  track  current and historical stock prices. Search bar allows users to search stock ticker and when a certain stock is clicked on, that stock is added to watchlist. User can then click on certain stock on watchlist to find more relative information such as  high/low changes, close prices, and even a chart that tracks change over 1 day, 7 day or 1 year periods.  

## Implementation 

Technologies Used: HTML, CSS, JavaScript, React, Bootstrap CSS library,  React Dev Tools Chrome Extension, React-Icons Library

React Hooks: useState, useEffect, useContext, useNavigate

React Implementation: BrowserRouter, Routers, Route 

Axios: Used to facilitate HTTP request (to Finnhub for stock data). Created a base URL. Then imported when sending the Axios requests.  

ApexCharts.js : Charting library to create chart

event.stopPropagation() : Prevents event bubbling / prevents propagation of current event

Local Storage: Allows site to populate with local storage data if user reloads the page. Saved data will be queried and user will see saved stock list on screen.

## Takeaways

By getting data through an API and filtering such data, it is possible to obtain desired data for applications. By then passing such data across the application via state and components, an application can render the data across multiple rows, titles and even graphs. By setting conditions, then certain data can be displayed wether those condition are met or not met. This makes applications complex, since it allows changes in state to cause re-rendering of components depending on such condition and the user will have different experience depending on the user's input.

