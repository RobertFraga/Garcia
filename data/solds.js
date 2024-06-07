var solds = [
    {
        "photo": "31",
        "name": "Cecil",
        "solds": "0"
    },
    {
        "photo": "15",
        "name": "Carlton",
        "solds": "9"
    },
    {
        "photo": "12",
        "name": "Jonathon",
        "solds": "7"
    },
    {
        "photo": "86",
        "name": "Ray",
        "solds": "0"
    },
    {
        "photo": "43",
        "name": "Karen",
        "solds": "9"
    },
    {
        "photo": "81",
        "name": "Jamie",
        "solds": "5"
    },
    {
        "photo": "58",
        "name": "Marvin",
        "solds": "1"
    },
    {
        "photo": "42",
        "name": "Grady",
        "solds": "7"
    },
    {
        "photo": "88",
        "name": "Linda",
        "solds": "0"
    },
    {
        "photo": "08",
        "name": "Dale",
        "solds": "9"
    },
    {
        "photo": "35",
        "name": "Rosemary",
        "solds": "0"
    },
    {
        "photo": "01",
        "name": "Dianne",
        "solds": "5"
    },
    {
        "photo": "27",
        "name": "Ruby",
        "solds": "2"
    },
    {
        "photo": "19",
        "name": "Valerie",
        "solds": "4"
    },
    {
        "photo": "33",
        "name": "Shannon",
        "solds": "7"
    },
    {
        "photo": "56",
        "name": "Marco",
        "solds": "4"
    },
    {
        "photo": "33",
        "name": "Sheri",
        "solds": "9"
    },
    {
        "photo": "47",
        "name": "Preston",
        "solds": "2"
    },
    {
        "photo": "50",
        "name": "Luis",
        "solds": "9"
    },
    {
        "photo": "10",
        "name": "Paul",
        "solds": "8"
    },
    {
        "photo": "16",
        "name": "Armando",
        "solds": "0"
    },
    {
        "photo": "57",
        "name": "Ray",
        "solds": "0"
    },
    {
        "photo": "49",
        "name": "Bridget",
        "solds": "2"
    },
    {
        "photo": "99",
        "name": "Jim",
        "solds": "1"
    },
    {
        "photo": "12",
        "name": "Charlotte",
        "solds": "5"
    },
    {
        "photo": "57",
        "name": "Virginia",
        "solds": "1"
    },
    {
        "photo": "72",
        "name": "Cecelia",
        "solds": "2"
    },
    {
        "photo": "40",
        "name": "Herman",
        "solds": "7"
    },
    {
        "photo": "41",
        "name": "Tommy",
        "solds": "3"
    },
    {
        "photo": "96",
        "name": "Joanna",
        "solds": "0"
    },
    {
        "photo": "85",
        "name": "Omar",
        "solds": "2"
    },
    {
        "photo": "50",
        "name": "Freddie",
        "solds": "0"
    },
    {
        "photo": "98",
        "name": "Kyle",
        "solds": "4"
    },
    {
        "photo": "74",
        "name": "Edmund",
        "solds": "2"
    },
    {
        "photo": "76",
        "name": "Fernando",
        "solds": "5"
    },
    {
        "photo": "53",
        "name": "Stephanie",
        "solds": "8"
    },
    {
        "photo": "49",
        "name": "Lynda",
        "solds": "9"
    },
    {
        "photo": "54",
        "name": "Merle",
        "solds": "6"
    },
    {
        "photo": "10",
        "name": "Geneva",
        "solds": "0"
    },
    {
        "photo": "04",
        "name": "Kate",
        "solds": "0"
    },
    {
        "photo": "71",
        "name": "Clifton",
        "solds": "4"
    },
    {
        "photo": "37",
        "name": "Jake",
        "solds": "5"
    },
    {
        "photo": "77",
        "name": "David",
        "solds": "4"
    },
    {
        "photo": "07",
        "name": "Allison",
        "solds": "9"
    },
    {
        "photo": "57",
        "name": "Blanca",
        "solds": "6"
    },
    {
        "photo": "11",
        "name": "Jesus",
        "solds": "6"
    },
    {
        "photo": "12",
        "name": "Colin",
        "solds": "7"
    },
    {
        "photo": "27",
        "name": "Manuel",
        "solds": "2"
    },
    {
        "photo": "05",
        "name": "Christina",
        "solds": "4"
    },
    {
        "photo": "59",
        "name": "Dixie",
        "solds": "8"
    },
    {
        "photo": "87",
        "name": "Gladys",
        "solds": "6"
    },
    {
        "photo": "27",
        "name": "Jermaine",
        "solds": "3"
    },
    {
        "photo": "52",
        "name": "Duane",
        "solds": "9"
    },
    {
        "photo": "53",
        "name": "Barbara",
        "solds": "2"
    },
    {
        "photo": "30",
        "name": "William",
        "solds": "0"
    },
    {
        "photo": "82",
        "name": "Lowell",
        "solds": "9"
    },
    {
        "photo": "09",
        "name": "Jose",
        "solds": "4"
    },
    {
        "photo": "41",
        "name": "Cecilia",
        "solds": "8"
    },
    {
        "photo": "75",
        "name": "Sonya",
        "solds": "2"
    },
    {
        "photo": "91",
        "name": "Phillip",
        "solds": "0"
    },
    {
        "photo": "81",
        "name": "Dora",
        "solds": "4"
    },
    {
        "photo": "61",
        "name": "Sheila",
        "solds": "2"
    },
    {
        "photo": "59",
        "name": "Minnie",
        "solds": "2"
    }
]

buildTable(solds)


function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].photo}</td>       
                        <td>${data[i].name}</td>
                        <td>${data[i].solds}</td>
                  </tr>`
        table.innerHTML += row


    }
}