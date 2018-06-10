# lightning-ui

lightning-ui is base on [bootstrap3.3](https://getbootstrap.com/docs/3.3/) and [slds](https://www.lightningdesignsystem.com/getting-started).
You can use it on your python/nodejs/ruby/java/dotnet project.
I build [salesforcexytools.heroku.com](https://salesforcexytools.heroku.com) by using Python(Flask) and this lightning-ui. 

# Online document
## Home
http://salesforcexytools.com/lightning-ui/

## LightningUI Style
http://salesforcexytools.com/lightning-ui/LightningUI/

## SLDS Style
http://salesforcexytools.com/lightning-ui/examples/

## Download From github
https://github.com/exiahuang/lightning-ui

https://github.com/exiahuang/lightning-ui/releases


# How to build source ?
## Requirements
* NodeJS
* Grunt

## build source
```
npm install
grunt --force
```

# document
If you want to view the document on your localhost ? 
You can follow the tips below:

## Requirements
* Install Ruby Environment.
* Install the [Jekyll](https://jekyllrb.com/)
* Bundle
* jekyll

```
gem install jekyll

gem install bundler

bundle install
```

## View localhost document.
* Run `grunt --force`, build the source
* Run the command `bundle exec jekyll serve`
* `Home` : http://127.0.0.1:3003/lightning-ui/
* `SLDS style` : http://localhost:3003/lightning-ui/examples/
* `LightningUI style` : http://localhost:3003/lightning-ui/LightningUI/

## About Doc

#### docs/LightningUI
Salesforce LightningUI 

#### docs/examples
SLDS examples, use `slds-layout`


# usage

# License
MIT

# Author Home page
[Exia.Huang](http://salesforcexytools.com/)
[GitHub](https://github.com/exiahuang)
