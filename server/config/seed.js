/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import sqldb from '../sqldb';
var Thing = sqldb.Thing;
var GameImage = sqldb.Image;
var GameClient = sqldb.ImageClient;

Thing.sync()
  .then(function() {
    return Thing.destroy({ where: {} });
  })
  .then(function() {
    Thing.bulkCreate([{
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    }]);
  });

GameImage.sync()
.then(function(){
  return GameImage.destroy({ where: {} });
})
.then(function(){
  GameImage.bulkCreate([{
    name: 'SeedImage1',
    widthInPixels: 400,
    heightInPixels:  400,
    path: '/uploads/Image1.jpg'
  }, {
    name: 'SeedImage2',
    widthInPixels: 100,
    heightInPixels:  300,
    path: '/uploads/Image2.jpg'
    
  }]);
});
  
 GameClient.sync()
.then(function(){
  return GameClient.destroy({ where: {} });
})
.then(function(){
  GameClient.bulkCreate([{
    name: 'Vito Corleone',
    imageId: 1
  }, {
    name: 'Luca Brasi',
    imageId: 2
  }]);
  
});
