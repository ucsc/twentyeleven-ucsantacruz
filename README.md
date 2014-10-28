## Dependencies

### Ruby and gems

- Ruby >=1.9 (I use [rbenv](https://github.com/sstephenson/rbenv) to manage different Ruby versions)
- [Bundler](http://bundler.io/)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/) for helpful Sass mixin tools.
- [Neat](http://neat.bourbon.io/) for grid layout.

### Node and npm

- [Gulp](http://gulpjs.com) for building/compiling assets and general tasks.

## Setup

1. Clone this repository locally using the Github app or with `git clone https://github.com/ucsc/twentyeleven-ucsc.git`.
2. Install Gems:
    - `gem install bundler`
    - `bundle install`
3. Install `node` and `npm` by downloading the installer from [nodejs.com](http://nodejs.org).
4. Install gulp globally: `npm install -g gulp`

## Development configuration

This configuration makes the following assumptions:

- You have a Wordpress installation in the same directory as this repository (running on your own PHP server setup, such as MAMP or XAMP). Your directory structure should look like this:

````
your-project-folder/
    /twentyeleven-ucsc
    /wordpress
````

- You already have the `twentyeleven` theme installed at:  
`wordpress/wp-content/themes/twentyeleven`. 

When you run `gulp`, the theme files will be compiled and added to:  
`wordpress/wp-content/themes/twentyeleven-ucsc`

## Development

In a terminal window, run `gulp` in the project root to compile the theme files and copy them into the theme directory.

## Deployment

Running `gulp build` will compile the **twentyeleven-ucsc** theme files into a zip archive that you can manually upload to your Wordpress site through the web interface.