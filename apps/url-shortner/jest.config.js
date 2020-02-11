module.exports = {
  name: 'url-shortner',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/url-shortner',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
