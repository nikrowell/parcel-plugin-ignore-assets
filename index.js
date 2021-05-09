const { Asset } = require('parcel-bundler');
const path = require('path');
const package = require(`${process.cwd()}/package.json`);

module.exports = function(bundler) {

  let ignore = package.ignoreAssets || package['ignore-assets'];
  if (typeof ignore === 'undefined') return;

  ignore = ignore.map(ext => ext.startsWith('.') ? ext : `.${ext}`);

  const addURLDependency = (
    new Asset('name', {rootDir: ''})
  ).addURLDependency;

  Asset.prototype.addURLDependency = function(url) {
    const ext = path.extname(url);
    if (ignore.includes(ext)) return url;
    return addURLDependency.call(this, ...arguments);
  };
}
