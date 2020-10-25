import moment from 'moment';

class Order {
constructor(id,items,totalAmount,date){

this.id=id;
this.items=items;
this.totalAmount=totalAmount;
this.date=date;
}

get readableDate(){
return moment(this.date).format('MMMM Do YYYY, hh:mm')

}
}
    //return this.date.toLocaleString('en-EN',{
    //   years:'numeric',
    //    month:'long',
      //  day:'2-digit',
        //hour:'2-digit' ,
        //minute:'2-digit'
   // })




export default Order;