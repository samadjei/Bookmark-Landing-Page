// *Hamburger Menu
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
	console.log('click hamburger');

	if (header.classList.contains('open')) {
		//Close hamburger menu
		body.classList.remove('noscroll');
		header.classList.remove('open');
		fadeElements.forEach(function (element) {
			element.classList.remove('fade-in');
			element.classList.add('fade-out');
		});
	} else {
		//Open hamburger menu
		body.classList.add('noscroll');
		header.classList.add('open');
		fadeElements.forEach(function (element) {
			element.classList.remove('fade-out');
			element.classList.add('fade-in');
		});
	}
});

// *TABS
const tabItems = document.querySelectorAll('.tabs__header');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach((item) => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach((item) => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach((item) => {
	item.addEventListener('click', selectItem);
});

// *FAQ

const toggle = document.querySelectorAll('.accordion__button');

toggle.forEach((button) => {
	button.addEventListener('click', () => {
		button.classList.toggle('accordion__button--active');
	});
});

// *CONTACT
const form = document.querySelector('.contact__form');
const email = document.querySelector('.email');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const emailValidate = email.value;

	// check if it is a valid email
	if (!validateEmail(emailValidate)) {
		form.classList.add('error');
		form.classList.remove('success');
	} else {
		form.classList.remove('error');
		form.classList.add('success');
	}
});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
