const express = require("express")
const app = express();
const port = 3230;
const cors = require('cors');
// serve the static files from the dist folder inside frontend directory
app.use(express.static('../frontend.dist'))

app.use(cors()); // Allow all origins


app.get('/',(req, res)=>{
    res.send(`<h1>Hello Satya</h1>`)
})


app.get('/api/jokes',(req, res)=>{
    const jokes = [
        {
            id: '1',
            title: 'Doctor Jokes',
            content: 'Why did the doctor carry a red pen? In case they needed to draw blood!'
        },
        {
            id: '2',
            title: 'Math Jokes',
            content: 'Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else!'
        },
        {
            id: '3',
            title: 'Science Jokes',
            content: 'Why can’t you trust an atom? Because they make up everything!'
        },
        {
            id: '4',
            title: 'History Jokes',
            content: 'Why did the history teacher break up with the geography teacher? There was no chemistry!'
        },
        {
            id: '5',
            title: 'Programming Jokes',
            content: 'Why do programmers prefer dark mode? Because light attracts bugs!'
        }
    ]
    res.send(jokes);
})


app.listen(port , ()=>{
    console.log(`Your app is running on port: ${port}`)
})