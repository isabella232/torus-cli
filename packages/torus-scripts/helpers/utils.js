const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

function formatSize(size) {
  return (size / 1024).toFixed(2) + " KiB";
}

function getGzippedSize(asset, dir) {
  const filepath = require.resolve(path.join(dir, asset.name));
  const buffer = fs.readFileSync(filepath);
  return formatSize(zlib.gzipSync(buffer).length);
}

function getGzippedBufferSize(assetBuffer) {
  return formatSize(zlib.gzipSync(assetBuffer).length);
}

function makeRow(a, b, c) {
  return `  ${a}\t    ${b}\t ${c}`;
}

exports.formatSize = formatSize;
exports.getGzippedSize = getGzippedSize;
exports.makeRow = makeRow;
exports.getGzippedBufferSize = getGzippedBufferSize;
