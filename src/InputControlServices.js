

let yearsCache = [ '1871',
  '1872',
  '1873',
  '1874',
  '1875',
  '1876',
  '1877',
  '1878',
  '1879',
  '1880',
  '1881',
  '1882',
  '1883',
  '1884',
  '1885',
  '1886',
  '1887',
  '1888',
  '1889',
  '1890',
  '1891',
  '1892',
  '1893',
  '1894',
  '1895',
  '1896',
  '1897',
  '1898',
  '1899',
  '1900',
  '1901',
  '1902',
  '1903',
  '1904',
  '1905',
  '1906',
  '1907',
  '1908',
  '1909',
  '1910',
  '1911',
  '1912',
  '1913',
  '1914',
  '1915',
  '1916',
  '1917',
  '1918',
  '1919',
  '1920',
  '1921',
  '1922',
  '1923',
  '1924',
  '1925',
  '1926',
  '1927',
  '1928',
  '1929',
  '1930',
  '1931',
  '1932',
  '1933',
  '1934',
  '1935',
  '1936',
  '1937',
  '1938',
  '1939',
  '1940',
  '1941',
  '1942',
  '1943',
  '1944',
  '1945',
  '1946',
  '1947',
  '1948',
  '1949',
  '1950',
  '1951',
  '1952',
  '1953',
  '1954',
  '1955',
  '1956',
  '1957',
  '1958',
  '1959',
  '1960',
  '1961',
  '1962',
  '1963',
  '1964',
  '1965',
  '1966',
  '1967',
  '1968',
  '1969',
  '1970',
  '1971',
  '1972',
  '1973',
  '1974',
  '1975',
  '1976',
  '1977',
  '1978',
  '1979',
  '1980',
  '1981',
  '1982',
  '1983',
  '1984',
  '1985',
  '1986',
  '1987',
  '1988',
  '1989',
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015' ];

yearsCache.reverse(); //do reverse in view?

let leaguesCache = { '1871': [ 'NA' ],
  '1872': [ 'NA' ],
  '1873': [ 'NA' ],
  '1874': [ 'NA' ],
  '1875': [ 'NA' ],
  '1876': [ 'NL' ],
  '1877': [ 'NL' ],
  '1878': [ 'NL' ],
  '1879': [ 'NL' ],
  '1880': [ 'NL' ],
  '1881': [ 'NL' ],
  '1882': [ 'NL', 'AA' ],
  '1883': [ 'NL', 'AA' ],
  '1884': [ 'UA', 'NL', 'AA' ],
  '1885': [ 'NL', 'AA' ],
  '1886': [ 'AA', 'NL' ],
  '1887': [ 'AA', 'NL' ],
  '1888': [ 'AA', 'NL' ],
  '1889': [ 'AA', 'NL' ],
  '1890': [ 'PL', 'AA', 'NL' ],
  '1891': [ 'AA', 'NL' ],
  '1892': [ 'NL' ],
  '1893': [ 'NL' ],
  '1894': [ 'NL' ],
  '1895': [ 'NL' ],
  '1896': [ 'NL' ],
  '1897': [ 'NL' ],
  '1898': [ 'NL' ],
  '1899': [ 'NL' ],
  '1900': [ 'NL' ],
  '1901': [ 'AL', 'NL' ],
  '1902': [ 'AL', 'NL' ],
  '1903': [ 'AL', 'NL' ],
  '1904': [ 'AL', 'NL' ],
  '1905': [ 'AL', 'NL' ],
  '1906': [ 'AL', 'NL' ],
  '1907': [ 'AL', 'NL' ],
  '1908': [ 'AL', 'NL' ],
  '1909': [ 'AL', 'NL' ],
  '1910': [ 'AL', 'NL' ],
  '1911': [ 'AL', 'NL' ],
  '1912': [ 'AL', 'NL' ],
  '1913': [ 'AL', 'NL' ],
  '1914': [ 'FL', 'AL', 'NL' ],
  '1915': [ 'FL', 'AL', 'NL' ],
  '1916': [ 'AL', 'NL' ],
  '1917': [ 'AL', 'NL' ],
  '1918': [ 'AL', 'NL' ],
  '1919': [ 'AL', 'NL' ],
  '1920': [ 'AL', 'NL' ],
  '1921': [ 'AL', 'NL' ],
  '1922': [ 'AL', 'NL' ],
  '1923': [ 'AL', 'NL' ],
  '1924': [ 'AL', 'NL' ],
  '1925': [ 'AL', 'NL' ],
  '1926': [ 'AL', 'NL' ],
  '1927': [ 'AL', 'NL' ],
  '1928': [ 'AL', 'NL' ],
  '1929': [ 'AL', 'NL' ],
  '1930': [ 'AL', 'NL' ],
  '1931': [ 'AL', 'NL' ],
  '1932': [ 'AL', 'NL' ],
  '1933': [ 'AL', 'NL' ],
  '1934': [ 'AL', 'NL' ],
  '1935': [ 'AL', 'NL' ],
  '1936': [ 'AL', 'NL' ],
  '1937': [ 'AL', 'NL' ],
  '1938': [ 'AL', 'NL' ],
  '1939': [ 'AL', 'NL' ],
  '1940': [ 'AL', 'NL' ],
  '1941': [ 'AL', 'NL' ],
  '1942': [ 'AL', 'NL' ],
  '1943': [ 'AL', 'NL' ],
  '1944': [ 'AL', 'NL' ],
  '1945': [ 'AL', 'NL' ],
  '1946': [ 'AL', 'NL' ],
  '1947': [ 'AL', 'NL' ],
  '1948': [ 'AL', 'NL' ],
  '1949': [ 'AL', 'NL' ],
  '1950': [ 'AL', 'NL' ],
  '1951': [ 'AL', 'NL' ],
  '1952': [ 'AL', 'NL' ],
  '1953': [ 'AL', 'NL' ],
  '1954': [ 'AL', 'NL' ],
  '1955': [ 'AL', 'NL' ],
  '1956': [ 'AL', 'NL' ],
  '1957': [ 'AL', 'NL' ],
  '1958': [ 'AL', 'NL' ],
  '1959': [ 'AL', 'NL' ],
  '1960': [ 'AL', 'NL' ],
  '1961': [ 'AL', 'NL' ],
  '1962': [ 'AL', 'NL' ],
  '1963': [ 'AL', 'NL' ],
  '1964': [ 'AL', 'NL' ],
  '1965': [ 'AL', 'NL' ],
  '1966': [ 'NL', 'AL' ],
  '1967': [ 'NL', 'AL' ],
  '1968': [ 'NL', 'AL' ],
  '1969': [ 'NL', 'AL' ],
  '1970': [ 'NL', 'AL' ],
  '1971': [ 'NL', 'AL' ],
  '1972': [ 'NL', 'AL' ],
  '1973': [ 'NL', 'AL' ],
  '1974': [ 'NL', 'AL' ],
  '1975': [ 'NL', 'AL' ],
  '1976': [ 'NL', 'AL' ],
  '1977': [ 'NL', 'AL' ],
  '1978': [ 'NL', 'AL' ],
  '1979': [ 'NL', 'AL' ],
  '1980': [ 'NL', 'AL' ],
  '1981': [ 'NL', 'AL' ],
  '1982': [ 'NL', 'AL' ],
  '1983': [ 'NL', 'AL' ],
  '1984': [ 'NL', 'AL' ],
  '1985': [ 'NL', 'AL' ],
  '1986': [ 'NL', 'AL' ],
  '1987': [ 'NL', 'AL' ],
  '1988': [ 'NL', 'AL' ],
  '1989': [ 'NL', 'AL' ],
  '1990': [ 'NL', 'AL' ],
  '1991': [ 'NL', 'AL' ],
  '1992': [ 'NL', 'AL' ],
  '1993': [ 'NL', 'AL' ],
  '1994': [ 'NL', 'AL' ],
  '1995': [ 'NL', 'AL' ],
  '1996': [ 'NL', 'AL' ],
  '1997': [ 'AL', 'NL' ],
  '1998': [ 'AL', 'NL' ],
  '1999': [ 'AL', 'NL' ],
  '2000': [ 'AL', 'NL' ],
  '2001': [ 'AL', 'NL' ],
  '2002': [ 'AL', 'NL' ],
  '2003': [ 'AL', 'NL' ],
  '2004': [ 'AL', 'NL' ],
  '2005': [ 'NL', 'AL' ],
  '2006': [ 'NL', 'AL' ],
  '2007': [ 'NL', 'AL' ],
  '2008': [ 'NL', 'AL' ],
  '2009': [ 'NL', 'AL' ],
  '2010': [ 'NL', 'AL' ],
  '2011': [ 'NL', 'AL' ],
  '2012': [ 'NL', 'AL' ],
  '2013': [ 'NL', 'AL' ],
  '2014': [ 'NL', 'AL' ],
  '2015': [ 'AL', 'NL' ] }





let leaguesLabelsCache = { 
  NA: 'National Association',
  NL: 'National League',
  AA: 'American Association',
  UA: 'Union Association',
  PL: 'Players\' League',
  AL: 'American League',
  FL: 'Federal League' 
};

  
function years() {
    return new Promise((resolve, reject) => {
        resolve(yearsCache);
    });
}
function leagues(year){
    return new Promise((resolve, reject) => {
        resolve(leaguesCache[year]);
    });
}
function leagueLabel(leagueAbbr){
    return new Promise((resolve, reject) => {
        resolve(leaguesLabelsCache[leagueAbbr]);
    });
}

export default {
    years:years,
    leagues: leagues,
    leagueLabel: leagueLabel
};
