const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

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

// *TOGGLE
const arrowToggle = document.querySelectorAll('.toggle');

function toggleMe(e) {
	console.log('Me');
}

arrowToggle.forEach((toggle) => {
	toggle.addEventListener('click', toggleMe);
});
