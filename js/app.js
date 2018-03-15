// $(function() {
//     var films = [
//     { id : 0, name: 'The Mummy',price: 59, category:'Action'},   
//     { id : 1, name: 'Top Gun',price:49,category:'Action'},   
//     { id : 2, name: 'American Made',price:30,category:'Adventur'},   
//     { id : 3, name: 'Edge of Tomorrow',price:40,category:'Adventur'},   
//     { id : 4, name: 'Misson Impossible',price:25,category:'Adventur'},  
//     { id : 5, name: 'Jack Reacher',price:80,category:'Action'},   
//     { id : 6, name: 'Tropic Thunder',price: 15,category:'Adventur'} 
// ];


var shoppingList = [];

var appendList = function (array, location) {
    var listHtml = array.map(function (item, id) {
        return '<li class="item" id="' + id + '">' + item.name + '<button class="delete">X</button></li>';
    });
    $(location).html(listHtml);

};

var deleteItem = function (array, itemToDelete) {
    array.splice(itemToDelete, 1);
    appendList(array, $('.film-list'));
};

var addItem = function (array, item) {
    array.push({ name: item });
};

appendList(shoppingList, $('.film-list'));

$('.film-list').on('click', '.delete', function (event) {

    var itemToDelete = $(event.currentTarget).closest('li').attr('id');
    deleteItem(shoppingList, itemToDelete);
});

$('form').submit(function (event) {
    event.preventDefault();
    var item = $('input').val();
    if (item === '') {
    } else {
        addItem(shoppingList, item);
        appendList(shoppingList, $('.film-list'));
        $('input').val('');
    }

});