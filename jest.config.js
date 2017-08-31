module.exports = {
  testEnvironment: 'jsdom',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    'jest-glamor-react',
    'snapshot-diff/serializer',
  ],
}
