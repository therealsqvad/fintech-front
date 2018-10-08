// Type your tests here
const expect = require('expect.js');
const { pickPeaks, whoIsNext } = require('./functions');

describe('Additional homework of Lesson 2', () => {
  describe('pickPeaks', () => {
    it('should find position and value of the "peaks" ', () => {
      expect(
        pickPeaks([1, 2, 2, 2, 1])
      ).to.eql({
        pos: [1],
        peaks: [2]
      });
      expect(
        pickPeaks([1, 2, 2, 2, 3])
      ).to.eql({
        pos: [],
        peaks: []
      });
    });
  });
  describe('whoIsNext', () => {
    it('should find who will drink n-th cola ', () => {
      expect(
        whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1)
      ).to.eql('Sheldon');
    });
  });
});
