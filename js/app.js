// Hamburger Menu
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', function () {
	if (header.classList.contains('open')) {
		//Close hamburger menu
		body.classList.remove('noscroll');
		header.classList.remove('open');
	} else {
		//Open hamburger menu
		body.classList.add('noscroll');
		header.classList.add('open');
	}
});

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