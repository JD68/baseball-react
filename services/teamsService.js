
const fs = require('fs');
let teamsDataCache;

exports.teams = function(year, league, division) {
    if(!teamsDataCache) {
        teamsDataCache = JSON.parse(fs.readFileSync('./services/teamsData.json', 'utf8'));
    }
    return teamsDataCache[year].reduce(function(acc, data) {
        if(!division && data.lgID === league) {
            acc.push(data);
        } else if(!!division && data.lgID === league && data.divID === division) {
            acc.push(data);
        }
        return acc;
    }, []);
};