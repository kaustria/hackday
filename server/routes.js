/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app, upload, db) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/images', require('./api/image'));
  app.use('/api/imageclients', require('./api/imageclient'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);
  
  app.post('/images', upload.single('map'), function(req, res, next){
	console.log('file', req.file);
	console.log('body:', req.body);
  
  var image = db.Image;
  image.create({name: req.file.originalname, path: req.file.path});
  
})

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
    
};
