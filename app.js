const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World! from express!');
});

app.get('/tea', (req, res) => {
	res.set('X-tea-time', 'yes please');
	res.status(418);
	res.send('what about cofee');
});



app.listen(port, () => console.log(`Example ap listening on port ${port} ! ` ));
