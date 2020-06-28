// Hamburger Menu
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

btnHamburger.addEventListener('click', () => {
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

// *TABS
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab__content--item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab
	this.classList.add('tab-border');
	// Grab content item from the DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach((item) => item.classList.remove('tab-border'));
}

function removeShow() {
	tabContentItems.forEach((item) => item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach((item) => item.addEventListener('click', selectItem));
