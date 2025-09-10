const express = require('express');
const multer = require('multer');
const { initializeApp } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const path = require('path');

// Replace with your Firebase Admin SDK config
// See https://firebase.google.com/docs/admin/setup
const serviceAccount = require('./service-account-key.json');
initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "your-project-id.appspot.com"
});

const app = express();
const port = 3001;

const storage = getStorage();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit for example
});

app.post('/api/upload-file', upload.single('sharedFile'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const bucket = storage.bucket();
    const fileName = `${Date.now()}_${path.basename(req.file.originalname)}`;
    const file = bucket.file(fileName);

    try {
        await file.save(req.file.buffer, {
            contentType: req.file.mimetype,
            metadata: {
                metadata: {
                    originalName: req.file.originalname
                }
            }
        });

        const [url] = await file.getSignedUrl({
            action: 'read',
            expires: '03-09-2027' // Example expiration date
        });

        res.json({
            success: true,
            fileName: req.file.originalname,
            fileUrl: url
        });
    } catch (error) {
        console.error('File upload error:', error);
        res.status(500).json({ error: 'Failed to upload file.' });
    }
});

app.listen(port, () => {
    console.log(`File Sharing API listening at http://localhost:${port}`);
});
