const swiper = new Swiper('.swiper', {
  // Optional parameters
//   direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// async function getGameData() {
//     const gameData = await fetch('https://api.server.nbaapi.com/api/games?isPlayoff=True&page=1&pageSize=50&sortBy=date&ascending=false')
//     .then((result) => result.json())
//     console.log(gameData)

//     for (let i = 0; i < 6; i++) {   
//         const arena = gameData['data'][i].arena
//         const date = gameData['data'][i].date.split('T')[0]
//         const homeTeam = gameData['data'][i].homeTeam
//         const homePoints = gameData['data'][i].homePts
//         const visitorTeam = gameData['data'][i].visitorTeam
//         const visitPoints = gameData['data'][i].visitorPts

//         const newGameArena = document.createElement('h3');
//         const newGameDate = document.createElement('p');
//         const newGameHome = document.createElement('p');
//         const newGameAway = document.createElement('p');

//         newGameArena.textContent = arena
//         newGameDate.textContent = date
//         newGameHome.textContent = `${homeTeam}: ${homePoints}`
//         newGameAway.textContent = `${visitorTeam}: ${visitPoints}`

//         const list = document.getElementById('gamesPlayed')
//         const gameBox = document.createElement('div');
//         gameBox.appendChild(newGameArena);
//         gameBox.appendChild(newGameDate);
//         gameBox.appendChild(newGameHome)
//         gameBox.appendChild(newGameAway)
//         list.appendChild(gameBox);
//         gameBox.classList.add('gameBox')
//     }
// }
// window.onload = getGameData;


