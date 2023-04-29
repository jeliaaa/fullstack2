$(document).ready(function(){
    const items = [
        {id: 1, name: 'Man shoes', category:'shoes', imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjMKPmbhk96hzTwbAkzUlXE-Re1kyYGVqYg&usqp=CAU'},
        {id: 2, name: 'Pc Mouse', category:'technics', imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqNueF4O8oNhNjwBXUDTrWf9JAEL3A3lSr1PSH5NoSthaTiAs48uajElyu_6olvtn0Xk&usqp=CAU'},
        {id: 3, name: 'Keyboard', category:'technics', imgSrc:'https://cdn.arstechnica.net/wp-content/uploads/2022/08/listing-3-760x380.jpg'},
        {id: 4, name: 'Hat',category:'clothes',imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVUAlR1iHmQVhuYoEp8H2wILMIXSRV2c-sQ&usqp=CAU'},
        {id: 5, name: 'Trousers',category:'clothes',imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6IJjalqnhiMazTiNssWSZk3K9QXx7doOGA&usqp=CAU' }
    ]

    items.forEach(item => {
        const itemCard = `
        <div class="item-card" style="background-image:url(${item.imgSrc});background-position:center; background-size:cover; background-repeat:no-repeat">
        <h1 style="color:orange">${item.name}</h1>
        <h2 style="color:orange">${item.category}</h2>
        </div>        
        `;
        $('.carousel').append(itemCard);
    });

    $('.carousel').slick({
        infinite : true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000
    })
})