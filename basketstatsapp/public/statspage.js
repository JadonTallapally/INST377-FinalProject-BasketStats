async function getPlayerStats() {
    const userPlayer1 = document.getElementById('player1').value
    const userYear1 = document.getElementById('year1').value
    const userTeam1 = document.getElementById('userTeam1').value
    const userplayoffs1 = document.getElementById('playoffs1').value

    const userPlayer2 = document.getElementById('player2').value
    const userYear2 = document.getElementById('year2').value
    const userTeam2 = document.getElementById('userTeam2').value
    const userplayoffs2 = document.getElementById('playoffs2').value


    // console.log(userPlayer1)
    // console.log(userYear1)
    // console.log(userTeam1)
    // console.log(userplayoffs1)
    
    let gameData;
    if (userplayoffs1 == 'No') {
        gameData = await fetch(`https://api.server.nbaapi.com/api/playertotals?season=${userYear1}&team=${userTeam1}&page=1&pageSize=20&isPlayoff=False`)
        .then((result) => (result.json())) 
    } else {
        gameData = await fetch(`https://api.server.nbaapi.com/api/playertotals?season=${userYear1}&team=${userTeam1}&page=1&pageSize=20&isPlayoff=TRUE`)
        .then((result) => (result.json())) 
    }
    console.log(gameData)
    const table = document.getElementById('playerDataTable')
    for (const game of gameData.data) {
        if (game.playerName === userPlayer1) {
        const tableRow = document.createElement('tr')
        const playerName = document.createElement('td')
        const playerAge = document.createElement('td')
        const playerTeam = document.createElement('td')
        const playerPosition = document.createElement('td')
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
        playerAge.innerHTML = game.age
        playerTeam.innerHTML = game.team
        playerPosition.innerHTML = game.position
        playerMins.innerHTML = game.minutesPg
        playerPts.innerHTML = game.points
        playerAst.innerHTML = game.assists
        playerRbs.innerHTML = game.totalRb
        playerFg.innerHTML = `${game.fieldGoals}-${game.fieldAttempts}`
        player3PT.innerHTML = `${game.threeFg}-${game.threeAttempts}`
        playerTo.innerHTML = game.turnovers
        playerStl.innerHTML = game.steals
        playerBlk.innerHTML = game.blocks
        playerOREB.innerHTML = game.offensiveRb
        playerDREB.innerHTML = game.defensiveRb

        tableRow.appendChild(playerName)
        tableRow.appendChild(playerTeam)
        tableRow.appendChild(playerAge)
        tableRow.append(playerPosition)
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
    table.style.display = "block"

    let gameData2;
    if (userplayoffs2 == 'No') {
        gameData2 = await fetch(`https://api.server.nbaapi.com/api/playertotals?season=${userYear2}&team=${userTeam2}&page=1&pageSize=20&isPlayoff=False`)
        .then((result1) => (result1.json())) 
    } else {
        gameData2 = await fetch(`https://api.server.nbaapi.com/api/playertotals?season=${userYear2}&team=${userTeam2}&page=1&pageSize=20&isPlayoff=TRUE`)
        .then((result1) => (result1.json())) 
    }

    console.log(gameData2)
    const table2 = document.getElementById('playerDataTable2')
    for (const game2 of gameData2.data) {
        if (game2.playerName === userPlayer2) {
            const tableRow2 = document.createElement('tr')
            const playerName2 = document.createElement('td')
            const playerAge2 = document.createElement('td')
            const playerTeam2 = document.createElement('td')
            const playerPosition2 = document.createElement('td')
            const playerMins2 = document.createElement('td')
            const playerPts2 = document.createElement('td')
            const playerAst2 = document.createElement('td')
            const playerRbs2 = document.createElement('td')
            const playerFg2 = document.createElement('td')
            const player3PT2 = document.createElement('td')
            const playerTo2 = document.createElement('td')
            const playerStl2 = document.createElement('td')
            const playerBlk2 = document.createElement('td')
            const playerOREB2 = document.createElement('td')
            const playerDREB2 = document.createElement('td')


            playerName2.innerHTML = game2.playerName
            playerAge2.innerHTML = game2.age
            playerTeam2.innerHTML = game2.team
            playerPosition2.innerHTML = game2.position
            playerMins2.innerHTML = game2.minutesPg
            playerPts2.innerHTML = game2.points
            playerAst2.innerHTML = game2.assists
            playerRbs2.innerHTML = game2.totalRb
            playerFg2.innerHTML = `${game2.fieldGoals}-${game2.fieldAttempts}`
            player3PT2.innerHTML = `${game2.threeFg}-${game2.threeAttempts}`
            playerTo2.innerHTML = game2.turnovers
            playerStl2.innerHTML = game2.steals
            playerBlk2.innerHTML = game2.blocks
            playerOREB2.innerHTML = game2.offensiveRb
            playerDREB2.innerHTML = game2.defensiveRb

            tableRow2.appendChild(playerName2)
            tableRow2.appendChild(playerTeam2)
            tableRow2.appendChild(playerAge2)
            tableRow2.append(playerPosition2)
            tableRow2.appendChild(playerMins2)
            tableRow2.appendChild(playerPts2)
            tableRow2.append(playerAst2)
            tableRow2.appendChild(playerRbs2)
            tableRow2.appendChild(playerFg2)
            tableRow2.append(player3PT2)
            tableRow2.append(playerTo2)
            tableRow2.append(playerStl2)
            tableRow2.append(playerBlk2)
            tableRow2.append(playerOREB2)
            tableRow2.append(playerDREB2)
            table2.append(tableRow2)
        }
    }
    if  (userPlayer2 == "") {
        table2.style.display = "none"
    } else {
        table2.style.display = "block"
    }
}