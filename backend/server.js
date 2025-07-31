const express = require('express');
const cors = require('cors');
const doctorsRoute = require('./routes/doctors');
const citiesRoute = require('./routes/cities');
const specsRoute = require('./routes/specializations');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/doctors', doctorsRoute);
app.use('/api/cities', citiesRoute);
app.use('/api/specializations', specsRoute);

const PORT = 4000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
