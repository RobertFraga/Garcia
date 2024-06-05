var myCategory = [
    {
        "Name": "Luxurious Granite Gloves",
        "Icon": "9"
    },
    {
        "Name": "Handcrafted Frozen Mouse",
        "Icon": "0"
    },
    {
        "Name": "Unbranded Frozen Shoes",
        "Icon": "3"
    },
    {
        "Name": "Rustic Rubber Car",
        "Icon": "2"
    },
    {
        "Name": "Handcrafted Soft Pizza",
        "Icon": "8"
    }
]

buildTable(myCategory)


function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].Icon}</td>       
                        <td>${data[i].Name}</td>
                               
                  </tr>`
        table.innerHTML += row


    }
}