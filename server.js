const express = require('express');
const app = express();

app.use(express.json());

app.post('/observations', (req, res) => {
    console.log('Observation received:', req.body);
    res.status(201).send('Observation received');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
