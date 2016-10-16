# react-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save and css extraction, based on [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack).
> Online Demo: [https://yakima-teng.github.io/react-webpack-boilerplate/](https://yakima-teng.github.io/react-webpack-boilerplate/)

## Note

Precondition: NodeJS and Git installed.

``` bash

# clone this repository to your local project folder
git clone https://github.com/Yakima-Teng/react-template.git

# install dependencies
npm install

# enter development environment
# project homepage will be automatically opened in your browser when ready for development
npm run dev

# produce production-grade code (code will be compressed)
npm run build

# deploy projects code to update the online demo
# available if you also host your code in github.com
npm run deploy
```

## Environment

This is my coding environment for reference:

1. Node: v4.4.5
2. npm: 3.10.8
3. cnpm: 4.3.2 (install dependencies more quickly than using npm directly when in China)

## Folder Structure

<pre>
.
├── build/                      # webpack config files
├── config/
│   ├── index.js                # main project config files
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component (direct children of Root)
│   ├── views/                  # view component
│   ├── components/             # ui component
│   ├── styles/                 # style files
│   ├── scripts/                # script files
│   ├── mock/                   # mock data
│   └── assets/                 # module assets (processed by webpack)
├── static/                     # pure static assets (directly copied)
├── test/                       # test code
├── .babelrc                    # babel config
├── .editorconfig.js            # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html模版
└── package.json                # build scripts and dependencies
.
</pre>

## Links

* [react](https://facebook.github.io/react/)

* [webpack](http://webpack.github.io/docs/)

* [Demo](https://yakima-teng.github.io/react-webpack-boilerplate/)