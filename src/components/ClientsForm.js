import React, { useEffect, useState } from 'react';
import { addClient, loadClientById, updateClient } from '../api/clients';
import { useNavigate, useParams } from 'react-router-dom';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

function defaultClient() {
  return {
    full_name: '',
    date_of_birth: '',
    card_information: '',
    interests: '',
    email_address: '',
    phone_number: '',
  }
}

function FInput({ name, label, type, validations, isRequired, placeholder, ...other }) {
  const v2 = isRequired ? { required: { value: true, message: `${label} is required` }, ...validations } : validations;
  const form = useFormContext();  
  return <Form.Group className="mb-3" controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      {...form.register(name, v2)}
      type={type}
      placeholder={placeholder || ''}
      {...other}
    />
    {form.formState.errors[name] &&
      <Form.Text className="text-danger">
        {form.formState.errors[name].message}
      </Form.Text>}
  </Form.Group>
}

export function EditClientForm() {
  const {clientId} = useParams({})
  const [client, setClient] = useState(null);
  useEffect(() => {
    const fetchClient = async () => {
      const data = await loadClientById(clientId);
      setClient(data);
    };
    fetchClient();
  }, [clientId]);
  if (!client) {
    return <div>Loading...</div>
  }
  return <ClientsForm client={client} />
}

function ClientsForm({client}) {  
  const data = client || defaultClient()
  const navigate = useNavigate()
  data.date_of_birth = data.date_of_birth ? data.date_of_birth.split('T')[0] : null;
  console.log("Clients form", data)
  
  const form = useForm({ defaultValues: data });

  const onSubmit = async (data) => {    
    const res = await (client ? updateClient(client.client_id, {...client, ...data}) : addClient(data));
    console.log("Response", res)
    navigate(`/clients`);
  }

  const validateUserAge = (value, other) => {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 18) {
      return 'User must be at least 18 years old';
    }
    return null
  }

  return <FormProvider   {...form}>
    <Form onSubmit={form.handleSubmit(onSubmit)}>
      <h2>Add Client</h2>
      <FInput name="full_name" label="Full Name" type="text" isRequired />
      <FInput name="date_of_birth" label="Date of Birth" type="date" isRequired validations={{valueAsDate: true, validate: validateUserAge}} />
      <FInput name="card_information" label="Card Information" type="number" isRequired validations={{minLength: {value: 16, message: "Please enter valid card number"}}} />
      <FInput name="interests" label="Interests" type="text" />
      <FInput name="email_address" label="Email Address" type="email" isRequired />
      <FInput name="phone_number" label="Phone Number" type="text" isRequired />
      <Button variant="primary" type="submit" onClick={form.handleSubmit(onSubmit)}>
        Submit
      </Button>
    </Form></FormProvider>
}

export default ClientsForm;
