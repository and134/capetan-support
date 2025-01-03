import React, { useState, useEffect } from 'react';
import { addTicket } from '../api/tickets';
import { getClients } from '../api/clients';
import { getEvents } from '../api/events';

function TicketsForm() {
  const [clients, setClients] = useState([]);
  const [events, setEvents] = useState([]);
  const [ticket, setTicket] = useState({
    client_id: '',
    event_id: '',
    booking_date: '',
    price: '',
    ticket_type: '',
  });

  useEffect(() => {
    const fetchClientsAndEvents = async () => {
      setClients(await getClients());
      setEvents(await getEvents());
    };
    fetchClientsAndEvents();
  }, []);

  const handleChange = (e) => setTicket({ ...ticket, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTicket(ticket);
      alert('Ticket added successfully!');
    } catch (error) {
      console.error('Error adding ticket:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Ticket</h2>
      <select name="client_id" onChange={handleChange} required>
        <option value="">Select Client</option>
        {clients.map(client => (
          <option key={client.client_id} value={client.client_id}>
            {client.full_name}
          </option>
        ))}
      </select>
      <select name="event_id" onChange={handleChange} required>
        <option value="">Select Event</option>
        {events.map(event => (
          <option key={event.event_id} value={event.event_id}>
            {`Event #${event.event_id} - ${event.starting_date}`}
          </option>
        ))}
      </select>
      <input type="date" name="booking_date" placeholder="Booking Date" onChange={handleChange} required />
      <input type="number" step="0.01" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="text" name="ticket_type" placeholder="Ticket Type" onChange={handleChange} required />
      <button type="submit">Add Ticket</button>
    </form>
  );
}

export default TicketsForm;
