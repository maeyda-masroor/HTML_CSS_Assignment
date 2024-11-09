// script.js
function showTab(index) {
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    showTab(0); // Make the first tab active
});