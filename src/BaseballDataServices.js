function years() {
    return commonFetch('years');
}
function leagues(year) {
    return commonFetch('/years/' + year + '/leagues');
}
function leagueLabels() {
    return commonFetch('leagueLabels');
}
function divisions(year) {
    return commonFetch('/years/' + year + '/divisions');
}
function divisionLabels() {
    return commonFetch('divisionLabels');
}
function teamLabels() {
    return commonFetch('teamLabels');
}
function teams(year, league, division) {
    if(!division) {
        return commonFetch('/years/' + year + '/leagues/' + league + '/teams');    
    } else {
        return commonFetch('/years/' + year + '/leagues/' + league + '/divisions/' + division + '/teams');
    }
}

function commonFetch(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    }).catch(function(err) {
      console.log(err);
    });
}
export default {
    years:years,
    leagues: leagues,
    leagueLabels: leagueLabels,
    divisions: divisions,
    divisionLabels: divisionLabels,
    teamLabels: teamLabels,
    teams: teams
};
