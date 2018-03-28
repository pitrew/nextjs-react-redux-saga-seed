import express from 'express';

const router = express.Router(); // eslint-disable-line

router.get('/example', (req, res) => {
    res.status(200).json({
        example: 'ok'
    });
});

export default router;
