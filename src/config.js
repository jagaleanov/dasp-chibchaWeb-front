const isProduction = process.env.NODE_ENV === 'production';

export const SPA_CONFIG = {
    BASE_URL: isProduction ? 'https://jagaleanov.github.io/dasp-chibchaWeb-front' : 'http://chibchaweb.com:8082',
    API_URL: isProduction ? 'https://eldelaprogramacion.com/api' : 'https://chibchaweb.com:444/api',
};
