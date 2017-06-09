
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function createChartFunction(dataKey) {
    return function(teams) {
        teams.forEach(function(team) {
            if(typeof team[dataKey] === "string") {
                team[dataKey] = parseInt(team[dataKey]);
            }
        });
        return <ResponsiveContainer aspect={5}>
                    <BarChart data={teams} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <Tooltip/>
                        <Legend />
                        <Bar dataKey={dataKey} fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
    };
}

const views = {
    "At Bats": createChartFunction("AB"),
    "Caught Stealing":createChartFunction("CS"),
    "Complete Games":createChartFunction("CG"),
    "Doubles":createChartFunction("2B"),
    "Double Plays":createChartFunction("DP"),
    "ERA":createChartFunction("ERA"),
    "Earned Runs Allowed":createChartFunction("ER"),
    "Fielding Percentage":createChartFunction("FP"),
    "Errors":createChartFunction("E"),
    "Hit By Pitch":createChartFunction("HBP"),
    "Hits":createChartFunction("H"),
    "Hits Allowed":createChartFunction("HA"),
    "Home Attendance Total":createChartFunction("attendance"),
    "Home Runs":createChartFunction("HR"),
    "Home Runs Allowed":createChartFunction("HRA"),
    "Outs Pitched":createChartFunction("IPouts"),
    "Opponents Runs Scored":createChartFunction("RA"),
    "Runs Scored":createChartFunction("R"),
    "Sacrifice Flies":createChartFunction("SF"),
    "Saves":createChartFunction("SV"),
    "Shutouts":createChartFunction("SHO"),
    "Stolen Bases":createChartFunction("SB"),
    "Strike Outs":createChartFunction("SO"),
    "Strikeouts By Pitchers":createChartFunction("SOA"),
    "Three Year Park Factor For Batters":createChartFunction("BPF"),
    "Three Year Park Factor For Pitchers":createChartFunction("PPF"),
    "Triples":createChartFunction("3B"),
    "Walks":createChartFunction("BB"),
    "Walks Allowed":createChartFunction("BBA")
}

function getView(view, teams){
    if(view) {
        return (views[view])(teams);
    }
}

export default {
    getView: getView,
    views: Object.keys(views)
}