let leaguesLabelsCache = { 
  NA: 'National Association',
  NL: 'National League',
  AA: 'American Association',
  UA: 'Union Association',
  PL: 'Players\' League',
  AL: 'American League',
  FL: 'Federal League' 
};

exports.leagueLabels = function() {
    return leaguesLabelsCache;
};