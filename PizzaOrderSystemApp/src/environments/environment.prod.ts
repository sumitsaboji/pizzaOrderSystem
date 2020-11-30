export const environment = {
  production: true,
   baseUrl : 'https://localhost:44370/api/',
   
   vegPizza : {
    GetVegPizzaList: 'VegPizza/GetVegPizzaList',
    GetCustomisePizzaMaster: 'VegPizza/GetCustomisePizzaMaster'
  },
  auth : {
    login: 'Auth/Login',
    register: 'Auth/Register',
  } ,
  Order : {
    placeOrder: 'Order/PlaceOrder',
    getOrders: 'Order/GetOrders'

  }   
};