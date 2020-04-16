var initialState=[
    {
        id: 1,
        name:'Iphone 7 Plus',
        image:'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description:'Apple',
        price: 500,
        inventory:15,
        ratting: 4,
    },
    {
        id: 2,
        name:'Samsung Galaxy S6',
        image:'https://salt.tikicdn.com/cache/550x550/ts/product/83/20/42/fbf99bb27b727311df88e3830a8f8477.jpg',
        description:'Samsung',
        price: 700,
        inventory:10,
        ratting:5,
    },
    {
        id: 3,
        name:'Xiaomi 9A Plus',
        image:'https://salt.tikicdn.com/cache/550x550/ts/product/39/c7/7f/f158a3c28221be8cbeee8739edc433ee.jpg',
        description:'Xiaomi',
        price: 100,
        inventory:12,
        ratting:3,
    },
];
const products=(state=initialState,actions)=>{
    switch(actions.type){
        default: return [...state];
    }
}
export default products;