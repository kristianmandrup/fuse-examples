var Observable = require("FuseJS/Observable");

var items = new Observable();
items.add({name: "Fancy top", price: "$1337.00", description: "A top that doesn't limit the wearer. You could propably wear it at a garden party.", favorites: 10, reviews: 15, infoPoints: ["Decorated", "Probably warm", "No zipper"], images: ["fashion11", "fashion12"]});
items.add({name: "Pants with hole for legs", price: "$82.99", description: "70% of scientists believe holes in pants increase usability.", favorites: 30, reviews: 43,infoPoints: ["Compatible with up to two legs", "Festive", "Fashion-relevant", "(Don't wear it at meetings)"], images: ["fashion21", "fashion22", "fashion23"]});
items.add({name: "Foot hat", price: "$10", description: "It's like a sock, but we can mark it higher since we call it a hat.", favorites: 23, reviews: 36, infoPoints: ["Compatible with most feet", "Elegant", "Stylish"], images: ["fashion11", "fashion12"]});

var items_mapped = items.map(function(item) {
    item.favorites = item.favorites + " Favorite";
    item.reviews = item.reviews + " Reviews";
    item.name = item.name.toUpperCase();
    return item;
});

var menuOpen = Observable(false);

module.exports = {
    items: items_mapped,
    menuOpen: menuOpen
};
