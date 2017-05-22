function years() {
    return commonFetch('years');
}
function leagues(year) {
    return commonFetch('leagues?year=' + year);
}
function leagueLabels() {
    return commonFetch('leagueLabels');
}
function divisions(year) {
    return commonFetch('divisions?year=' + year);
}
function divisionLabels() {
    return commonFetch('divisionLabels');
}
function teamLabels() {
    return commonFetch('teamLabels');
}
function teams(year, league, division) {
    return commonFetch('teams?year=' + year + "&league=" + league + "&division=" + division);
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
