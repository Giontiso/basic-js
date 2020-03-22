module.exports = function createDreamTeam(members) {
  // throw 'Not implemented';
  return members instanceof Array
  ? members
      .filter(member => typeof member === 'string')
      .reduce((secret, member) => secret += member.trim()[0], '')
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .toUpperCase()
  : false;
};