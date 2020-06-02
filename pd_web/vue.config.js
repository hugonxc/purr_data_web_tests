const path = require('path');
const contentBase = path.resolve(__dirname, './src/emscripten');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  lintOnSave: false,

  configureWebpack: config => {
    config.devServer = {
      before(app) {
        // use proper mime-type for wasm files
        app.get('*.wasm', function (req, res, next) {
          var options = {
            root: contentBase,
            dotfiles: 'deny',
            headers: {
              'Content-Type': 'application/wasm'
            }
          };
          res.sendFile(req.url, options, function (err) {
            if (err) { next(err);
              console.log("error", contentBase, req.url, options);
              
            }
          });
        });

        // use proper mime-type for wasm files
        app.get('*.data', function (req, res, next) {
          var options = {
            root: contentBase,
            dotfiles: 'deny',
            headers: {
              'Content-Type': 'application/octet-stream'
            }
          };
          res.sendFile(req.url, options, function (err) {
            if (err) { next(err);
              console.log("error", contentBase, req.url, options);
              
            }
          });
        });



      }
    }
  }
}