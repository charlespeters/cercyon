const paths = {
  build: './dist',
  img: {
    src: './assets/images/**/*',
    dest: './dist/assets/images/'
  },
  icons: {
    src: './assets/icons/**/*',
    dest: './views/components/'
  },
  views: {
    components: './views/components/',
    src: './views/**/*.hbs',
    ignore: '!./views/components/*.hbs',
    all: ['./views/**/*.hbs', './views/components/*']
  },
  css: {
    src: './assets/styles/index.css',
    all: './assets/styles/**/*.css',
    dest: './dist/assets/styles/'
  },
  js: {
    src: './assets/scripts/global.js',
    all: './assets/scripts/**/*.js',
    dest: './dist/assets/scripts/'
  },
};

module.exports = paths;
