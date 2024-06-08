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


$('#cat-search').on('keyup', function(){
    var value = $(this).val()
    console.log('Value', value)

    var data = searchTable(value, myCategory)
    buildTable(data)
})

function searchTable(value, data){
    var fillteredData = []

    for(var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var name = data[i].Name.toLowerCase()


        if(name.includes(value)){
            fillteredData.push(data[i])
        }
    }
    return fillteredData
}

buildTable(myCategory)


function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].Icon}</td>       
                        <td>${data[i].Name}</td>
                               
                  </tr>`
        table.innerHTML += row


    }
}