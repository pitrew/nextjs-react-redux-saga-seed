import express from 'express';
import next from 'next';
import apiRoutes from './api';
import config, { buildUrl } from '../common/config';
import nextConfig from '../../.config/next/next.config';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './src', conf: {
    ...nextConfig,
    distDir: '../.next'
}});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use('/api', apiRoutes);

    // create other route
    // server.get('/other', (req, res) => {
    //     return app.render(req, res, '/other', req.query);
    // });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    /* eslint-disable no-console */
    server.listen(config.port, (err) => {
        if (err) {
            throw err;
        }
        console.log(`Server ready on ${buildUrl()}`);
    });
});
