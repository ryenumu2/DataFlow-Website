let API_ROUTE

process.env.NODE_ENV === 'development'
  ? API_ROUTE = 'http://127.0.0.1:8888/api/v1'
  : API_ROUTE = 'https://dataFlow.com/api/v1'

  //is a conditional: if NODE_ENV == 'development' is true, then API_route, or where the Forum-App-Go-Backend runs, will be at 
  //'http://127.0.0.1:8888/api/v1'. Else, and in this case can only be 'production', then the url for the website is 
  //'https://dataFlow.com/api/v1', which users on the internet will actually access when visiting my site

export default API_ROUTE