let imagePath = '/public/images/market/'

const setImage = name => imagePath + name + '.svg';

const ListMarket = [
    {
        name: "Cherry",
        image: setImage('cherry_market'),
        perCount: 1,
        price: 12
    },
    {
        name: "Cherry",
        image: setImage('cherry_market'),
        perCount: 1,
        price: 12
    }
];

export default ListMarket;