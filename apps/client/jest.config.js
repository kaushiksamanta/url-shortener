module.exports = {
  name: 'url-shortener',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/url-shortener',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
