async function gamesData() {
    const gameStats = await fetch('https://api.server.nbaapi.com/api/games?isPlayoff=false&page=1&pageSize=5&sortBy=date&ascending=false&include=lineScores,%20playerGameBasicStats')
    .then((result) => result.json())
    console.log(gameStats)

    for (let i = 0; i < 6; i++) { 
        // console.log(games)

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

        const gamesplayedbox = document.getElementById('gamesPlayed')
        const gameBox = document.createElement('button');
        gameBox.appendChild(newGameArena);
        gameBox.appendChild(newGameDate);
        gameBox.appendChild(newGameHome)
        gameBox.appendChild(newGameAway)
        gamesplayedbox.appendChild(gameBox);
        gameBox.classList.add('gameBox')

        gameBox.addEventListener("click", function() {
            const awayQuarters = gameStats['data'][i]['lineScores'][0]
            const homeQuarters = gameStats['data'][i]['lineScores'][1]

            const sectionTitle = document.getElementById('heading3')
            sectionTitle.innerHTML = 'Recent Game Data'
            const gameContainer = document.getElementById('game')
            gameContainer.innerHTML = '';
            let title = document.createElement('h2');
            title.textContent = `Final: ${gameStats['data'][i].visitorTeam}: ${gameStats['data'][i].visitorPts} @ 
                                        ${gameStats['data'][i].homeTeam}: ${gameStats['data'][i].homePts}`
            gameContainer.appendChild(title)


            document.getElementById('gameDataChart').style.display = 'block'
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
                            label: `${gameStats['data'][i].visitorTeam} Points`,
                            data: awayQuarters
                        },

                        {
                            label: `${gameStats['data'][i].homeTeam} Points`,
                            data: homeQuarters
                        },
                    ],
                } ,
            });

            let tableClear = document.getElementById("gameDataTable");
                while (tableClear.rows.length > 1) { 
                    tableClear.deleteRow(1);
                }

            document.getElementById('gameDataTable').style.display = 'block'
            const table = document.getElementById('gameDataTable')
            for (const game of gameStats.data[i].playerGameBasicStats) {
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
        })
    }     
}

window.onload = gamesData;