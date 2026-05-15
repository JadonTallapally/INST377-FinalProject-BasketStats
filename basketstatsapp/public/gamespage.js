async function gamesData() {
    const gameStats = await fetch('https://api.server.nbaapi.com/api/games?isPlayoff=true&page=1&pageSize=6&sortBy=date&ascending=false&include=lineScores,%20playerGameBasicStats')
    .then((result) => result.json())
    console.log(gameStats)

    for (let i = 0; i < 6; i++) { 
        const games = gameStats['data'][i]
        console.log(games)

        const arena = gameStats['data'][i].arena
        const date = gameStats['data'][i].date.split('T')[0]
        const homeTeam = gameStats['data'][i].homeTeam
        const homePoints = gameStats['data'][i].homePts
        const visitorTeam = gameStats['data'][i].visitorTeam
        const visitPoints = gameStats['data'][i].visitorPts

        const newGameArena = document.createElement('h3');
        const newGameDate = document.createElement('p');
        const newGameHome = document.createElement('p');
        const newGameAway = document.createElement('p');

        newGameArena.textContent = arena
        newGameDate.textContent = date
        newGameHome.textContent = `${homeTeam}: ${homePoints}`
        newGameAway.textContent = `${visitorTeam}: ${visitPoints}`

        const list = document.getElementById('gamesPlayed')
        const gameBox = document.createElement('div');
        gameBox.appendChild(newGameArena);
        gameBox.appendChild(newGameDate);
        gameBox.appendChild(newGameHome)
        gameBox.appendChild(newGameAway)
        list.appendChild(gameBox);
        gameBox.classList.add('gameBox')
    }

    const awayQuarters = gameStats['data'][0]['lineScores'][0]
    const homeQuarters = gameStats['data'][0]['lineScores'][1]

    const gameContainer = document.getElementById('game')
    const title = document.createElement('h2');
    title.textContent = `Final: ${gameStats['data'][0].visitorTeam}: ${gameStats['data'][0].visitorPts} @ ${gameStats['data'][0].homeTeam}: ${gameStats['data'][0].homePts}`
    gameContainer.appendChild(title)


    let existingChart = Chart.getChart('gameDataChart');
    if (existingChart) {
        existingChart.destroy();
    }

    new Chart(document.getElementById('gameDataChart'), {
        type:'bar',
        data: {
            // labels:
            datasets: [
                {
                    label: `${gameStats['data'][0].visitorTeam} Points`,
                    data: awayQuarters
                },

                {
                    label: `${gameStats['data'][0].homeTeam} Points`,
                    data: homeQuarters
                },
            ],
        } ,
    });

    // console.log(gameStats['data'][0]['playerGameBasicStats'])
    const table = document.getElementById('gameDataTable')
    for (const game of gameStats.data[0].playerGameBasicStats) {
        // console.log(game.playerName);
        const tableRow = document.createElement('tr')
        const playerName = document.createElement('td')
        const playerTeam = document.createElement('td')
        const playerStatus = document.createElement('td')
        const playerMins = document.createElement('td')
        const playerPts = document.createElement('td')
        const playerAst = document.createElement('td')
        const playerRbs = document.createElement('td')
        const playerFg = document.createElement('td')
        const player3PT = document.createElement('td')
        const playerTo = document.createElement('td')
        const playerStl = document.createElement('td')
        const playerBlk = document.createElement('td')
        const playerOREB = document.createElement('td')
        const playerDREB = document.createElement('td')

        playerName.innerHTML = game.playerName
        playerTeam.innerHTML = game.team
        playerStatus.innerHTML = game.status
        playerMins.innerHTML = game.mp
        playerPts.innerHTML = game.pts
        playerAst.innerHTML = game.ast
        playerRbs.innerHTML = game.trb
        playerFg.innerHTML = `${game.fg}-${game.fga}`
        player3PT.innerHTML = `${game.threeP}-${game.threePa}`
        playerTo.innerHTML = game.tov
        playerStl.innerHTML = game.stl
        playerBlk.innerHTML = game.blk
        playerOREB.innerHTML = game.orb
        playerDREB.innerHTML = game.drb

        tableRow.appendChild(playerName)
        tableRow.appendChild(playerTeam)
        tableRow.append(playerStatus)
        tableRow.appendChild(playerMins)
        tableRow.appendChild(playerPts)
        tableRow.append(playerAst)
        tableRow.appendChild(playerRbs)
        tableRow.appendChild(playerFg)
        tableRow.append(player3PT)
        tableRow.append(playerTo)
        tableRow.append(playerStl)
        tableRow.append(playerBlk)
        tableRow.append(playerOREB)
        tableRow.append(playerDREB)
        table.append(tableRow)
    }
}

window.onload = gamesData;