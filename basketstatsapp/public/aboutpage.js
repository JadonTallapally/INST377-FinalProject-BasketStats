async function createUser() {
  await fetch(`/user`, {
    method: 'POST',
    body: JSON.stringify({
      userName: `${document.getElementById('userName').value}`,
      favTeam: `${document.getElementById('favTeam').value}`,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }).then((result) => result.json());
}

async function loadUserData() {
  await fetch('/users')
    .then((result) => result.json())
    .then((resultJson) => {
      console.log(resultJson);
      const table = document.createElement('table');
      table.setAttribute('id', 'userData');

      const tableRow = document.createElement('tr');
      const tableHeadingUserName = document.createElement('th');
      tableHeadingUserName.innerHTML = 'BasketApp Users';
      const tableHeadingFavTeam = document.createElement('th');
      tableHeadingFavTeam.innerHTML = 'Fandom';

      tableRow.appendChild(tableHeadingUserName);
      tableRow.appendChild(tableHeadingFavTeam);

      table.appendChild(tableRow);

      resultJson.forEach((user) => {
        const userTableRow = document.createElement('tr');
        const userTableUserName = document.createElement('td');
        const userTableFavTeam = document.createElement('td');

        userTableUserName.innerHTML = user['user_name'];
        userTableFavTeam.innerHTML = user['fav_team'];
  

        userTableRow.appendChild(userTableUserName);
        userTableRow.appendChild(userTableFavTeam);
    

        table.appendChild(userTableRow);
      });

      const preExistingTable = document.getElementById('table');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadUserData;