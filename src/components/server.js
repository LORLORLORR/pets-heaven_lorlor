const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RegistrationForm = require('./models/RegistrationForm'); // Import your models
const ReleasePetForm = require('./models/ReleasePetForm');
const AdoptPetForm = require('./models/AdoptPetForm');

const app = express();
app.use(bodyParser.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service provider
  auth: {
    user: 'lorryleeziyun@gmail.com', // your email address
    pass: 'L81872335jeaneth2003' // your email password or application-specific password
  }
});

// Sample in-memory user storage for demonstration (Replace with database in production)
let users = [];

// Endpoint to handle form submission
app.post('/submit-application', (req, res) => {
  const { name, email, phone, address, petName, message } = req.body;

  // Send confirmation email to applicant
  transporter.sendMail({
    from: 'lorryleeziyun@gmail.com',
    to: email,
    subject: 'Application Received',
    text: `Dear ${name},\n\nThank you for your application to adopt ${petName}. We have received your application and will review it soon.\n\nBest regards,\nPet Heaven`
  }, (error) => {
    if (error) {
      console.error('Error sending confirmation email:', error);
      return res.status(500).send('Error sending confirmation email');
    }

    // Send application details to admin
    transporter.sendMail({
      from: 'lorryleeziyun@gmail.com',
      to: 'lorryleeziyun@gmail.com', // admin email address
      subject: 'New Adoption Application Received',
      text: `New application received:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nPet Name: ${petName}\nMessage: ${message}`
    }, (error) => {
      if (error) {
        console.error('Error sending application to admin:', error);
        return res.status(500).send('Error sending application to admin');
      }
      
      res.status(200).send('Application submitted successfully');
    });
  });
});

// User Registration Endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  // Check if user already exists
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    return res.status(400).send('User already exists');
  }
  
  // Hash password and save user
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered successfully');
});

// User Login Endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = users.find(user => user.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send('Invalid username or password');
  }
  
  // Generate JWT token
  const token = jwt.sign({ username }, 'secret_key', { expiresIn: '1h' });
  res.status(200).json({ token });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
