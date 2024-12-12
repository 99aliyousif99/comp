import express from "express";
import multer from "multer";
import uploadcare from "uploadcare";
import cors from "cors";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send({ error: "No file uploaded" });
    }

    const { buffer, originalname } = req.file;

    // Upload to Uploadcare
    const uploadedFile = await uploadcare.file.upload(buffer, {
      filename: originalname,
    });

    res.status(200).send({
      url: uploadedFile.cdnUrl,
      name: originalname,
      size: uploadedFile.size,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "File upload failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});