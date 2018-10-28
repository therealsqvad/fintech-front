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
        pickPeaks([1, 3, 3, 3, 3, 2, 2, 2, 2, 3, 4, 2, 3, 2, 2])
      ).to.eql({
        pos: [1, 10, 12],
        peaks: [3, 4, 3]
      });
      expect(
        pickPeaks([1, 3, 3, 3, 4])
      ).to.eql({
        pos: [],
        peaks: []
      });
      expect(
        pickPeaks([3, 4, 5, 5, 5])
      ).to.eql({
        pos: [],
        peaks: []
      });
      expect(
        pickPeaks([3, 3, 3, 4, 5, 5, 5, 1])
      ).to.eql({
        pos: [4],
        peaks: [5]
      });
      expect(
        pickPeaks([3, 2, 4, 1])
      ).to.eql({
        pos: [2],
        peaks: [4]
      });
      expect(
        pickPeaks([1, 2, 1, 5])
      ).to.eql({
        pos: [1],
        peaks: [2]
      });
    });
  });
  describe('whoIsNext', () => {
    it('should find who will drink n-th cola ', () => {
      expect(
        whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 1)
      ).to.eql('Sheldon');
      expect(
        whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52)
      ).to.eql('Penny');
      expect(
        whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 7230702951)
      ).to.eql('Leonard');
      expect(
        whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 51)
      ).to.eql('Leonard');
      expect(
        whoIsNext(['Leonard', 'Sheldon', 'Rajesh', 'Howard'], 16)
      ).to.eql('Leonard');
      expect(
        whoIsNext(['Leonard', 'Sheldon', 'Rajesh', 'Howard'], 29)
      ).to.eql('Leonard');
      expect(
        whoIsNext(['Rajesh', 'Howard', 'Sheldon'], 35)
      ).to.eql('Howard');
    });
  });
});
