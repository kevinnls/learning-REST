const app = require('express')();

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`app started...\
	\nlistening @ http://localhost:${port}`)
});

app.get('/api', (req, res) => {
    res.status(200).end("Hello, world!");
})

