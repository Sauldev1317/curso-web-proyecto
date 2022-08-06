let listBooks = []; 

$(document).ready(function(){
    window.fetch('http://localhost/proyecto-curso/resources/utils/books.json',{method: 'GET',headers:{"Accept": "application/json"}})
        .then((respuesta)=>respuesta.json())
        .then((data)=>{
            console.log(data)
            data.forEach((book)=>{
                loadData(book)
            })
    })
    
})


function loadData(book) {
    let col = document.createElement('div')
    let card = document.createElement('div')
    let img = document.createElement('img')
    let card_body = document.createElement('div')
    let card_title = document.createElement('h5')
    let card_description = document.createElement('p')
    col.classList.add("col")
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem; margin-bottom: 8px")
    img.setAttribute("src", book.img)
    img.setAttribute("width", "100%")
    img.setAttribute("height", "400px")
    img.classList.add("card-img-top")
    card_body.classList.add("card-body")
    card_title.classList.add("card-title")
    card_description.classList.add("card-text")
    card_title.innerHTML = book.name
    card_description.innerHTML = book.description

    col.appendChild(card)
    card.appendChild(img)
    card.appendChild(card_body)
    card_body.appendChild(card_title)
    card_body.appendChild(card_description)
    document.getElementById('gridRow').appendChild(col)
} 

$(document).ready(function () {
    $("#save-books").click(function () {
        let name = $("#titlename");
        let description = $("#description");
        let valueTitle = name.val().toLowerCase();
        let valueDescription = description.val().toLowerCase();
        book = {
            name: valueTitle, 
            description: valueDescription,
            author: "Nuevo Libro",
            img: "http://localhost/proyecto-curso/resources/img/alicia.jpeg",
        };
        loadData(book);
    });
});

