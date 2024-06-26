var mylist = [
    {
        "id": 1,
        "Name": "Electronic Plastic Fish",
        "Price": "$8.93",
        "Category": "0",
        "Stocks": "97"
    },
    {
        "id": 2,
        "Name": "Tasty Frozen Gloves",
        "Price": "$5.33",
        "Category": "2",
        "Stocks": "91"
    },
    {
        "id": 3,
        "Name": "Licensed Frozen Computer",
        "Price": "$9.61",
        "Category": "1",
        "Stocks": "38"
    },
    {
        "id": 4,
        "Name": "Tasty Concrete Keyboard",
        "Price": "$6.77",
        "Category": "8",
        "Stocks": "71"
    },
    {
        "id": 5,
        "Name": "Sleek Rubber Keyboard",
        "Price": "$9.41",
        "Category": "9",
        "Stocks": "22"
    }
]


$('#item-search').on('keyup', function(){
    var value = $(this).val()
    console.log('Value', value)

    var data = searchTable(value, mylist)
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



buildTable(mylist)


function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].Name}</td>    
                        <td>${data[i].Price}</td>    
                        <td>${data[i].Category}</td>    
                        <td>${data[i].Stocks}</td>    
                  </tr>`
        table.innerHTML += row


    }
}