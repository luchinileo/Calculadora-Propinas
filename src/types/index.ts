export type MenuItem ={
    id:number,
    name:string,
    price:number
}
                     //=tomamos todo MenuItem & pero le agregamos
export type OrderItem = MenuItem & {
    quantity:number
}