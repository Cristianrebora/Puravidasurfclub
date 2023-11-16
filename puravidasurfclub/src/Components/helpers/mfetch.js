const products =[
    { id: "1" , name: "producto 1" , category: "remeras" , price: 1000 , stock: 500 , description: "lorem dedwfaerferfweafwf"},
    { id: "2" , name: "producto 1" , category: "remeras" , price: 1000 , stock: 500 , description: "lorem dedwfaerferfweafwf"},
    { id: "3" , name: "producto 1" , category: "remeras" , price: 1000 , stock: 500 , description: "lorem dedwfaerferfweafwf"},
    { id: "4" , name: "producto 1" , category: "remeras" , price: 1000 , stock: 500 , description: "lorem dedwfaerferfweafwf"},
    { id: "5" , name: "producto 1" , category: "remeras" , price: 1000 , stock: 500 , description: "lorem dedwfaerferfweafwf"},
    { id: "6" , name: "producto 1" , category: "remeras" , price: 1000 , stock: 500 , description: "lorem dedwfaerferfweafwf"}    
]

export const mFetch = (id) => new Promise((res, rej) =>{
    setTimeout(() =>{
        res( id ? products.find(product => product.id === id): products)
    }, 1000)
})