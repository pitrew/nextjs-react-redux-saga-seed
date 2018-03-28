const config = {
    port: 3001,
    baseUrl: 'http://localhost'
};

export const buildUrl = path => `${config.baseUrl}:${config.port}${path || ''}`;

export default config;
