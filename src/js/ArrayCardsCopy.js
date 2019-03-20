
const templateItem = document.querySelector('.template-item').content.querySelector('li');

class Card  {
    constructor(name, oldPrice, currentPrice, srcImage) {
        this.name = name;
        this.oldPrice = oldPrice;
        this.currentPrice = currentPrice;
        this.srcImage = srcImage;
   }
   renderCard(place) {
    const template = templateItem.cloneNode(true);
    template.querySelector('h3').textContent = name;
    template.querySelector('del').textContent = oldPrice;
    template.querySelector('.price-btn').textContent = currentPrice + ' Р.';
    template.querySelector('img').src = srcImage;
    place.appendChild(template);
   }
};

var cards = [
    new Card('Перфоратор BOSCH 300','21500 P.','13500 P.','img/snippet.jpg'),
    new Card('Перфоратор MAKITA 6700','29500 P.','25700 P.','img/snippet3.jpg'),
    new Card('Перфоратор DEWALT 2000','','12500 P.','img/snippet4.jpg'),
    new Card('Перфоратор HITACHI 3000','21500 P.','13500 P.','img/snippet2.jpg'),
    new Card('Перфоратор DEWALT 6000','21500 P.','13500 P.','img/snippet3.jpg'),
    new Card('Перфоратор INTERSCOL 2000','21500 P.','13500 P.','img/snippet4.jpg'),
    new Card('Перфоратор HITACHI 3000','21500 P.','13500 P.','img/snippet2.jpg'),
    new Card('Перфоратор DEWALT 6000','','13500 P.','img/snippet.jpg'),
    new Card('Перфоратор BOSCH 2000','21500 P.','13500 P.','img/snippet2.jpg'),
    new Card('Перфоратор HITACHI 6301','31500 P.','13500 P.','img/snippet2.jpg'),
    new Card('Перфоратор HITACHI 6050','21500 P.','13500 P.','img/snippet4.jpg'),
    new Card('Перфоратор INTERSCOL 2560','11500 P.','13500 P.','img/snippet3.jpg'),
    new Card('Перфоратор BOSCH 1000','','16500 P.','img/snippet.jpg'),
    new Card('Перфоратор INTERSCOL 2560','41500 P.','13500 P.','img/snippet3.jpg'),
    new Card('Перфоратор INTERSCOL 7000','21500 P.','13500 P.','img/snippet4.jpg'),
    new Card('Перфоратор DEWALT 620','24500 P.','13500 P.','img/snippet2.jpg'),
    new Card('Перфоратор INTERSCOL 3567','','26500 P.','img/snippet2.jpg'),
    new Card('Перфоратор BOSH 2560','21500 P.','23500 P.','img/snippet.jpg'),
    new Card('Перфоратор INTERSCOL 2570','21500 P.','29500 P.','img/snippet.jpg'),
    new Card('Перфоратор DEWALT 2560','21500 P.','29999 P.','img/snippet4.jpg'),
    new Card('Перфоратор HITACHi 2560','','15500 P.','img/snippet4.jpg'),
    new Card('Перфоратор INTERSCOL 2560','28500 P.','13500 P.','img/snippet3.jpg'),
    new Card('Перфоратор MAKITA 2590','22500 P.','13500 P.','img/snippet.jpg'),
    new Card('Перфоратор DEWALT 2560','25500 P.','23570 P.','img/snippet4.jpg'),
    new Card('Перфоратор BOSCH 2560','21500 P.','15080 P.','img/snippet.jpg'),
    new Card('Перфоратор INTERSCOL 1560','21500 P.','12500 P.','img/snippet3.jpg'),
    new Card('Перфоратор INTERSCOL 2660','30000 P.','9500 P.','img/snippet4.jpg'),
    new Card('Перфоратор INTERSCOL 1560','18500 P.','6500 P.','img/snippet3.jpg'),
];
