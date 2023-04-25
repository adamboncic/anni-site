const express = require('express');
const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/api/images/:folder', async (req, res) => {
  try {
    const root = 'AnnikaChavez';
    const { folder } = req.params;

    const result = await cloudinary.search
      .expression(`folder:${root}/${folder}/*`)
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute();

    res.json(result.resources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching images' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
