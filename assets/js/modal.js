const myModal = document.getElementById('exampleModal')
const myInput = document.getElementById('edit')
const myModal2 = document.getElementById('exampleModal2')
const myInput2 = document.getElementById('edit2')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
myModal2.addEventListener('shown.bs.modal', () => {
    myInput2.focus()
  })

  $(document).ready(function() {
    // show the alert
    setTimeout(function() {
        $(".alert").alert('close');
    }, 7000);
});