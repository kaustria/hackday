/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

module.exports = function(app, upload, db, imageSize) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/images', require('./api/image'));
  app.use('/api/imageclients', require('./api/imageclient'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);
  
  app.post('/images', upload.single('map'), function(req, res, next){
    var image = db.Image;
    var dimensions = imageSize(req.file.path);
    image.create({
      name: req.body['name'] === undefined ? req.file.originalName : req.body['name'],
      path: req.body['path'] === undefined ? req.file.path : req.body['path'],
      widthInPixels: dimensions.width,
      heightInPixels: dimensions.height,
      pixelsPerInchX: req.body['pixelsPerInchX'] === undefined ? null : req.body['pixelsPerInchX'],
      pixelsPerInchY: req.body['pixelsPerInchY'] === undefined ? null : req.body['pixelsPerInchY'],
      });
    res.status(201).end();
})

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
    
};
