

var input = [
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00

    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000000',
        Name: 'Coca-Cola',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000001',
        Name: 'Sprite',
        Unit: 'bottle',
        Price: 3.00
    },
    {
        Barcode: 'ITEM000004',
        Name: 'battery',
        Unit: 'a',
        Price: 2.00
    }
]
function printReceipt(arr){
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
    var total;
    for(let k=0;k<result.length;k++)
    {
        let record = result[k];
        //total += parseFloat(record[k].Price)*parseFloat(record[k].Number);
        let output="Name: "+record.Name+", Quantity:"+record.Number+" "+record.Unit+" ,Unit price:"+record.Price+" (yuan), Subtotal:"+parseFloat(record.Price)*parseFloat(record.Number)+" (yuan)";
        console.log(output);
        
    }
    console.log("----------------------");
    //console.log("Total:"+total+" (yuan)");