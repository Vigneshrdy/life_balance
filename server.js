const express = require('express');
const multer = require('multer');
const { MongoClient, GridFSBucket } = require('mongodb');
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Configuration
const mongoURI = process.env.MONGO_URI; // Ensure you have this in your .env file
const client = new MongoClient(mongoURI);

let db, bucket;

// Connect to MongoDB
client.connect().then(() => {
  db = client.db('your_database_name'); // Replace with your database name
  bucket = new GridFSBucket(db, { bucketName: 'uploads' });
  console.log('Connected to MongoDB');
}).catch(err => console.error(err));

// Configure Multer (store in a temporary folder before uploading to MongoDB)
const upload = multer({ dest: 'uploads/' });

// Routes
app.post('/api/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded');
  }

  const uploadStream = bucket.openUploadStream(file.originalname);
  const readStream = fs.createReadStream(file.path);

  readStream.pipe(uploadStream).on('finish', () => {
    fs.unlinkSync(file.path); // Clean up local file
    res.status(200).send('File uploaded successfully');
  }).on('error', (err) => {
    console.error(err);
    res.status(500).send('Error uploading file');
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));