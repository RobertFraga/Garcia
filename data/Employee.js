var employees = [
    {
        "id": 1,
        "username": "Birdie77",
        "lastname": "Mr. Clint Hirthe",
        "birthday": "Jun 5th 24",
        "Role": "Luxurious Cotton Bacon"
    },
    {
        "id": 2,
        "username": "Novella83",
        "lastname": "Raymond Blanda",
        "birthday": "Jun 5th 24",
        "Role": "Awesome Concrete Computer"
    },
    {
        "id": 3,
        "username": "Mable78",
        "lastname": "Don White",
        "birthday": "Jun 5th 24",
        "Role": "Handcrafted Steel Soap"
    },
    {
        "id": 4,
        "username": "Oswaldo_Wiza",
        "lastname": "Andre Conn-Schamberger",
        "birthday": "Jun 5th 24",
        "Role": "Electronic Fresh Keyboard"
    },
    {
        "id": 5,
        "username": "Fausto.Russel-Champlin",
        "lastname": "Sammy Koepp",
        "birthday": "Jun 5th 24",
        "Role": "Awesome Concrete Salad"
    },
    {
        "id": 6,
        "username": "Destiney_VonRueden",
        "lastname": "Freddie Carter",
        "birthday": "Jun 5th 24",
        "Role": "Handcrafted Fresh Soap"
    },
    {
        "id": 7,
        "username": "Hilton58",
        "lastname": "Jessie Gutkowski DDS",
        "birthday": "Jun 5th 24",
        "Role": "Oriental Plastic Bike"
    },
    {
        "id": 8,
        "username": "Aliza_Bins",
        "lastname": "Becky Leuschke",
        "birthday": "Jun 5th 24",
        "Role": "Awesome Wooden Shoes"
    },
    {
        "id": 9,
        "username": "Keshaun.Ritchie",
        "lastname": "Garry West DVM",
        "birthday": "Jun 5th 24",
        "Role": "Generic Granite Chicken"
    },
    {
        "id": 10,
        "username": "Kimberly.Dickens-Huels",
        "lastname": "Russell Johnston III",
        "birthday": "Jun 5th 24",
        "Role": "Oriental Steel Pizza"
    }
]

$('#emp-search').on('keyup', function(){
    var value = $(this).val()
    console.log('Value', value)

    var data = searchTable(value, employees)
    buildTable(data)
})

function searchTable(value, data){
    var fillteredData = []

    for(var i = 0; i < data.length; i++){
        value = value.toLowerCase()
        var name = data[i].lastname.toLowerCase()


        if(name.includes(value)){
            fillteredData.push(data[i])
        }
    }
    return fillteredData
}


buildTable(employees)


function buildTable(data){
    var table = document.getElementById('myTable')

    table.innerHTML = ''

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].username}</td>      
                        <td>${data[i].lastname}</td>      
                        <td>${data[i].birthday}</td>      
                        <td>${data[i].Role}</td>      
                  </tr>`
        table.innerHTML += row


    }
}