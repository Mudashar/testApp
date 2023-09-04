const myModal = document.getElementById('exampleModal')
const myModal2 = document.getElementById('exampleModal2')
const myModal3 = document.getElementById('exampleModal3')
const myInput = document.getElementById('mutual-amount')
const myInput2 = document.getElementById('travel-amount')
const myInput3 = document.getElementById('income-amount')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
myModal2.addEventListener('shown.bs.modal', () => {
    myInput2.focus()
})
  myModal3.addEventListener('shown.bs.modal', () => {
    myInput3.focus()
})

$(document).ready(function() {
    // show the alert
    setTimeout(function() {
        $(".alert").alert('close');
    }, 7000);
});
