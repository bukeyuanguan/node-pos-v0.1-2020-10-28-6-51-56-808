/*
module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
};
*/
module.exports = function main() {

    return function printReceipt(arr){
        var newArr=[];
            arr.forEach(item=>{
                item.Number=1;
            var dataItem =item
                if(newArr.length>0){
                    var filterValue = newArr.filter(v=>{
                       return v.Name == dataItem.Name
                    })
                    if(filterValue.length>0){
                        newArr.forEach(n=>{
                           if( n.Name ==filterValue[0].Name){
                               n.Number =  filterValue[0].Number +dataItem.Number                          
                           } 
                        })
                    }else{
                        newArr.push(dataItem)
                    }
                }else{
                    newArr.push(dataItem)
                }
        })
        
       return newArr
        }
    
        console.log("***<store earning no money>Receipt ***");
        var result = printReceipt(input);
        var total=0;
        for(let k=0;k<result.length;k++)
        {
            let record = result[k];
            if(record.Number>1)
            {
                
            }
            let price = record.Price*record.Number;
            total += price;
            let output="Name: "+record.Name+", Quantity:"+record.Number+" "+record.Unit+" ,Unit price:"+record.Price+" (yuan), Subtotal:"+price+" (yuan)";
            console.log(output);
            
        }
        console.log("----------------------");
        console.log("Total:"+total+" (yuan)");
        console.log("**********************");
};