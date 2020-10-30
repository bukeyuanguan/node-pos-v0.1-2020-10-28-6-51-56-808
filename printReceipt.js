

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

function toPascal(name)
{
    let output;
    let flag = name.search("-");
    //console.log(name);
    if( flag == -1)
    {
        //console.log("normal");
        //console.log(flag);
        let nameLow = name.toLowerCase();
        let firstLetterUpper = nameLow.slice(0,1).toUpperCase();
        output = firstLetterUpper+nameLow.slice(1,nameLow.length+1); 
        return output;
    }
    else
    {
        //console.log("snake");
        //console.log(flag);
        let output="";
        let strArray=name.split("-");
        strArray.forEach(item=>{
            console.log(toPascal(item));
            output += toPascal(item)+"-";
        });  
    return output.substring(0,output.length - 1);
    }         
}
//console.log(toPascal("sggfag"));
//console.log(toPascal("sgg-fag"));
//console.log("sgg-fag".indexOf("-"));
/*
function snakeToPascal(name)
{
    let output="";
    let strArray=name.split("-");
        strArray.forEach(item=>{
            output += toPascal(item)+"-";
        });  
    return output.substring(0,output.length - 1);
}
*/
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
    let a1 = printReceipt(input);
    let a2 =
            '***<store earning no money>Receipt ***\n' +
            'Name: Coca-Cola, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 15.00 (yuan)\n' +
            'Name: Sprite, Quantity: 2 bottles, Unit price: 3.00 (yuan), Subtotal: 6.00 (yuan)\n' +
            'Name: Battery, Quantity: 1, Unit price: 2.00 (yuan), Subtotal: 2.00 (yuan)\n' +
            '----------------------\n' +
            'Total: 23.00 (yuan)\n' +
            '**********************\n';
            if(a1==a2)
            {

                console.log("true");
            }
            else
            {
                console.log("false");

            }
            
            

    