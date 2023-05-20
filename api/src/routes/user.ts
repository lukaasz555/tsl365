import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
	res.setHeader('Content-Type', 'text/html');
	res.end('<a href="/">user.ts - click & go back</p>');
});

export default router;
