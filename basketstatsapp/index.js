const express = require('express');
const bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const dotenv = require('dotenv')


const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
    res.sendFile('public/homepage.html', { root: __dirname })
})

app.get('/users', async (req, res) => {
    console.log('Attempting to get all users!')

    const { data, error } = await supabase.from('AppUsers').select();
    // console.log('data:', data)

    if (error) {
        console.log(`Error ${error}`);
        res.statusCode = 500
        res.send(error)
    } else {
        console.log('Recieved Data:', data)
        res.json(data)
    }
})

app.post('/user', async  (req, res) =>{
    console.log('Adding user');
    console.log(`Request: ${JSON.stringify(req.body)}`)
    
    const userName = req.body.userName;
    const favTeam = req.body.favTeam;

    const { data, error } = await supabase
    .from('AppUsers')
    .insert({
        user_name: userName,
        fav_team: favTeam,
    })
    .select();

    if (error) {
        console.log(`Error ${error}`);
        res.statusCode = 500
        res.send(error)
    } else {
        res.json({data})
    }
})


app.listen(port, () => {
    console.log(`Express app is listening on ${port}`);
})

