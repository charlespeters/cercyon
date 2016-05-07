# Cercyon

Cercyon is a front-end boilerplate.

## Requirements

This project requires Node 5.x.x or higher & npm 3.x.x ([installer font here](https://nodejs.org/en/) or use `brew install node`). You also need [Gulp.js](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md):

```
$ npm install -g gulp-cli
```

## Highlights

Cercyon doesn't have anything too special in it, just a common setup that's has my personal favorite defaults.

- [Handlebars](http://handlebarsjs.com/): This project uses Handlebars templates as a static HTML generator.
- [PostCSS](http://postcss.org/): To process the CSS this project uses PostCSS with a few choice plugins: [cssnext](http://cssnext.io/), [postcss-import](https://github.com/postcss/postcss-import), [postcss-apply](https://github.com/pascalduez/postcss-apply). Plus it imports my [Obsidian.css](https://github.com/obsidiancss/obsidian) project.
- [Babel](http://babeljs.io/): To bundle the JavaScript this project uses Browserify and transpiles it with Babel (Presets: ES2015 & React).
- Linters: Stylelint for CSS and ESLint for JS, there's nothing too nuts in there. It's included in the build process but it'd be cool to setup it up in your editor of choice ([Syntastic](https://github.com/scrooloose/syntastic) for Vim & [Linter](https://atom.io/packages/linter) for Atom).

## Metalsmith

There's a Metalsmith version of this called project [Hephaestus](https://github.com/charlespeters/hephaestus).

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
