const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/api/test', (req, res) => {
try {
    res.json({ message: 'API is working!' });
} catch (err) {
    console.error('Error in /api/test route:', err);
    res.status(500).json({ error: 'Internal Server Error' });
}});




const clientsRoutes = require('./routes/clients');
const skippersRoutes = require('./routes/skippers');
const portsRoutes = require('./routes/ports');
const eventsRoutes = require('./routes/events');
const ticketsRoutes = require('./routes/tickets');
const restaurantRoutes = require('./routes/restaurantRecommendations');
const skipperAvailabilityRoutes = require('./routes/skipperAvailability');



app.use('/api/clients', clientsRoutes);
app.use('/api/skippers', skippersRoutes);
app.use('/api/ports', portsRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/restaurantRecommendations', restaurantRoutes);
app.use('/api/skipperAvailability', skipperAvailabilityRoutes);



  