# Responsive web templates

Responsive reboot of UCSC web templates originally created in 2009-10. These will be the basis for new WCMS and other CMS templates.

## Dependencies

### Ruby and gems

- Ruby >=1.9 (I use [rbenv](https://github.com/sstephenson/rbenv) to manage different Ruby versions)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/) for helpful Sass mixin tools.
- [Neat](http://neat.bourbon.io/) for grid layout.

### Node and npm

- [Gulp](http://gulpjs.com) for building/compiling assets.
- [Grunt](http://gruntjs.com) for deployment to gh-pages.
- [Bower](http://bower.io) to manage front-end dependencies.

## Setup

1. Clone this repository locally using the Github app or with `git clone https://github.com/ucsc/webtemplates2014.git`.
2. Install Gems:
    - `gem install sass`
    - `gem install bourbon`
    - `gem install neat`
3. Install `node` and `npm` by downloading the installer from [nodejs.com](http://nodejs.org).
4. Install gulp, grunt, and bower globally: `npm install -g gulp grunt grunt-cli bower`
5. `cd` into the project  directory and run `npm install` in the project root to install all node dependencies.
6. Run `bower install` to install bower components into the `./bower_components` directory.

## Development dependencies

This configuration makes the following assumptions:

1. You have a Wordpress installation in the same directory as this repository (running on your own PHP server setup, such as MAMP or XAMP). Your directory structure should look like this:

your-project-folder/
    /twentyeleven-ucsc (this repository)
    /wordpress

2. You already have the `twentyeleven` theme installed. 

When you run `gulp`, the theme files will be compiled and added to:
`wordpress/wp-content/themes/twentyeleven-ucsc`

## Development

In a terminal window, run `gulp` in the project root to compile the theme files and copy them into the theme directory.

## Deployment

Running `gulp build` will compile the **twentyeleven-ucsc** theme files into a zip archive that you can manually upload to your Wordpress site through the web interface.