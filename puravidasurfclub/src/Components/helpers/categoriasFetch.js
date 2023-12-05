const products =[
    { id: "1" , name: "producto 1" , category: "Remeras" , price: 5000 , stock: 500 , description: "lorem detalle .......", imageUrl: "https://acdn.mitiendanube.com/stores/001/312/577/products/imagenes-nuevas_0000_pura-vida-copy1-36ffc518f3c041b02a16891918394241-1024-1024.jpg" },
    { id: "2" , name: "producto 2" , category: "Gorra" , price: 2500, stock: 50, description: "lorem detalle .......", imageUrl: "https://acdn.mitiendanube.com/stores/811/379/products/pura-vida-gorra1-803fc2c2f64453619816397522965317-640-0.jpg"},
    { id: "3" , name: "producto 3" , category: "Jeans" , price: 15000 , stock: 400 , description: "lorem detalle .......", imageUrl: "https://acdn.mitiendanube.com/stores/768/324/products/29369edb-e719-426a-b047-8d54391bcf381-826b9cf3d5885fb7cd16873780405860-240-0.jpg"},
    { id: "4" , name: "producto 4" , category: "Buzo" , price: 1000 , stock: 100, description: "lorem detalle .......", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYehR3kUtgxcl2bKRnj42lXmjl5M34MGZtuuYmaorKkQ_gZBHfk9X1Cza8uODKXCzZq4&usqp=CAU"},
    { id: "5" , name: "producto 5" , category: "Bermuda" , price: 1000 , stock: 500 , description: "lorem detalle .......", imageUrl: "https://acdn.mitiendanube.com/stores/768/324/products/d6ef5828-eaef-4110-9e91-b2855db4aaf3-748d99e9d17e72a093169826511083191-44e07b12f56583d5d516982651647342-1024-1024.webp"},
    { id: "6" , name: "producto 6" , category: "Remeras" , price: 1000 , stock: 430 , description: "lorem detalle .......", imageUrl: ""}    
    
]

export const categoriasFetch = (c) => new Promise((res, rej) =>{
    setTimeout(() =>{
        res( c ? products.find(product => product.category === c): products)
    }, 1000)
})