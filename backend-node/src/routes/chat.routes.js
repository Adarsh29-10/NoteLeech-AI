import express from 'express';
import axios from 'axios';
import path from 'path';

const router = express.Router();

router.post('/chat', async (req, res) => {
    console.log("Reached to chat route...")
    const { question, fileName } = req.body;

    try {

        const pdfPath = path.resolve(`../backend-python/app/public/${fileName}`);

        // Send question to Python backend
        const response = await axios.post('http://localhost:5000/ask', {
        question,
        pdfPath
        });

        console.log("This is the response of chat route from node server: \n",response)

        // Return AI answer back to frontend
        res.json({ answer: response.data.answer });
    } catch (error) {
        console.error('Error in chat route:', error.message);
        res.status(500).json({ error: 'Failed to communicate with Python AI' });
    }
});

export default router;
