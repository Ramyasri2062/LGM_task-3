document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');

    var name = nameInput.value;
    var email = emailInput.value;

    var userListBody = document.getElementById('user-list-body');
    var newRow = userListBody.insertRow();
    var nameCell = newRow.insertCell();
    var emailCell = newRow.insertCell();

    nameCell.innerHTML = name;
    emailCell.innerHTML = email;

    nameInput.value = '';
    emailInput.value = '';
  });
