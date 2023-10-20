let item ={
    name:'phone',
    price:25000,
    quantity:1,
    categories:['smartphone','cellphone'],
    dimenions:{
        length:7,
        breadth:7
    }
}
console.log(item)
console.log(item.categories[0])
console.log(item.dimenions.length)
//another way to create object
let item2=new Object()
item2.name="charger"
item2.price=200
item2.quantity=1
console.log(item2)

//accessing object
//dot notation
console.log(item2.name)
item2.price=250
console.log(item2.price)

//adding property
item.returnable=true
console.log(item)

//square bracket notation
console.log(item['price'])
item['returnable']=false
console.log(item)

let key ='price'
item[key]=27500
console.log(item)
//item.key=28000
console.log(item)

let item3 = {
    name:'phone',
    price:25000,
    quantity:1,
    buy: function(){
      console.log('item added to cart')
    },
    addtolist(){
        console.log('item added to list')
    }
}
console.log(item3)
item3.buy()
item3.addtolist()

