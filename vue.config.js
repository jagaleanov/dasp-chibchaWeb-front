const { defineConfig } = require('@vue/cli-service');

// Configuración para desarrollo
const devDomain = 'chibchaweb.com';
const devPort = 8082;

// Configuración para producción (ajusta estos valores según tus necesidades)
const prodDomain = 'jagaleanov.github.io/dasp-chibchaWeb/';
const prodPort = 8080;

const isProduction = process.env.NODE_ENV === 'production';

module.exports = defineConfig({
  publicPath: isProduction ? '/dasp-chibchaWeb/' : '/',
  transpileDependencies: true,
  devServer: {
    host: isProduction ? prodDomain : devDomain,
    port: isProduction ? prodPort : devPort,
    https: { 
      key: './certs/' + (isProduction ? prodDomain : devDomain) + '/' + (isProduction ? prodDomain : devDomain) + '.key',
      cert: './certs/' + (isProduction ? prodDomain : devDomain) + '/' + (isProduction ? prodDomain : devDomain) + '.crt'
    },
  }
});
