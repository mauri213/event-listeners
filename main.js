// GO!
//1.
var button = document.querySelector('button'); //finding the button
var navMenu = document.querySelector('.nav-menu'); //finding the nav element

button.textContent = 'hide nav';

button.addEventListener('click', function () {
	navMenu.classList.toggle('nav-menu-hidden');
	//navMenu.classList.has('nav-menu') // --> Boolean (true or false)
		//text of button = 'hide nav'
	if (button.textContent === 'hide nav') {
		button.textContent = 'show nav'
		//text of button = 'show nav'
    } else {
        button.textContent = 'hide nav';
    }
});

//2.
var guestInput = document.querySelector('#guestInput');
var list = document.querySelector('.guest-list'); //finding the guest list

guestInput.addEventListener('keyup', function (event) {
	var listItem;
	if (event.keyCode === 13) { // keyCode for enter is 13
		listItem = document.createElement('li'); // creating a list item
		listItem.textContent = guestInput.value; // setting the text content of the list item to the input value
		listItem.classList.add('guest'); // adding a class to a list item that i just created
		list.appendChild(listItem); // inserts the item to the list 
		guestInput.value = ''; // emptying the input value
	}
});

//3.
var guestInput2 = document.querySelector('#text2');
var list2 = document.querySelector('#add-guest-bonus .guest-list'); //finding the guest list

guestInput2.addEventListener('keyup', function (event) {
	var listItem;
	var button;
	if (event.keyCode === 13) { // keyCode for enter is 13
		button = document.createElement('button');
		button.textContent = 'X';
		
		listItem = document.createElement('li'); // creating a list item
		listItem.textContent = guestInput2.value; // setting the text content of the list item to the input value
		listItem.classList.add('guest'); // adding a class to a list item that i just created
		listItem.appendChild(button);

		button.addEventListener('click', function () {
			listItem.parentElement.removeChild(listItem);
		});

		list2.appendChild(listItem); // inserts the item to the list 
		guestInput2.value = ''; // emptying the input value
	}
});