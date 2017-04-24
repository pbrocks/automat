// Init the array with items....or fill the automat with food :-)
var menuItem = [
'Chicken Pot Pie',
'Baked Beans',
'Macaroni and Cheese',
'Burgundy Sauce with Beef and Noodles',
'Creamed Spinach',
'Pumpkin Pie',
'Strawberry Shortcake'
];

for (i = 0; i < menuItem.length; i++) {
  let foodItemDiv = document.createElement('div');
    foodItemDiv.className = 'food-item';
    foodItemDiv.innerHTML = menuItem[i];
    foodItemDiv.addEventListener('click', () => {
    foodItemDiv.className += ' hidden';
    })
  let mainDiv = document.getElementById('main');
    mainDiv.appendChild(foodItemDiv);
  }
