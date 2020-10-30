
module.exports = function main(arr) {
    function printReceipt(arr){
        var newArr=[];
            arr.forEach(item=>{
                item.Number=1;
                let out = parseFloat(item.Price);
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
        let output = "***<store earning no money>Receipt ***\n";      
        let total=0;
        for(let k=0;k<newArr.length;k++)
        {
            let record = newArr[k];
            if(record.Number>1)
            {
                record.Unit = " "+record.Unit+"s";
            }
            if(record.Unit=="a")
            {
                record.Unit = "";
            }      
            let price = record.Price*record.Number;
            total += price;
            output +="Name: "+toPascal(record.Name)+", Quantity: "+record.Number+record.Unit+", Unit price: "+record.Price.toFixed(2)+" (yuan), Subtotal: "+price.toFixed(2)+" (yuan)\n";               
        }
        output +="----------------------\n";
        output +="Total: "+total.toFixed(2)+" (yuan)\n";
        output +="**********************\n";
        console.log(output);
        return output
        } 
    }