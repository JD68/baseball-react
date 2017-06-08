
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function createChart(teams, dataKey) {
    return   <BarChart width={1900} height={300} data={teams} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey={dataKey} fill="#82ca9d" />
            </BarChart>
}

function getView(view, teams){
    if(view === 'At Bats') {
        return createChart(teams, "AB");
    }
    if(view === 'Caught Stealing') {
        return createChart(teams, "CS");
    } 
    if(view === 'Complete Games') {
        return createChart(teams, "CG");
    }
    if(view === 'ERA') {
        return createChart(teams, "ERA");
    }
     if(view === 'Earned Runs Allowed') {
        return createChart(teams, "ER");
    }
    if(view === 'Doubles') {
        return createChart(teams, "2B");
    }
    if(view === 'Double Plays') {
        return createChart(teams, "DP");
    }
    if(view === 'Errors') {
        return createChart(teams, "E");
    }
    if(view === 'Fielding Percentage') {
        return createChart(teams, "FP");
    } 
    if(view === 'Hits') {
        return createChart(teams, "H");
    }
    if(view === 'Hits Allowed') {
        return createChart(teams, "HA");
    }
    if(view === 'Hit By Pitch') {
        return createChart(teams, "HBP");
    }
    if(view === 'Home Attendance Total') {
        return createChart(teams, "attendance");
    }
    if(view === 'Home Runs') {
        return createChart(teams, "HR");
    }
    if(view === 'Home Runs Allowed') {
        return createChart(teams, "HRA");
    }
    if(view === 'Outs Pitched') {
        return createChart(teams, "IPouts");
    }
    if(view === 'Opponents Runs Scored') {
        return createChart(teams, "RA");
    }
    if(view === 'Runs Scored') {
        return createChart(teams, "R");
    }
    if(view === 'Sacrifice Flies') {
        return createChart(teams, "SF");
    }
    if(view === 'Saves') {
        return createChart(teams, "SV");
    }
    if(view === 'Shutouts') {
        return createChart(teams, "SHO");
    }
    if(view === 'Stolen Bases') {
        return createChart(teams, "SB");
    }
    if(view === 'Strike Outs') {
        return createChart(teams, "SO");
    }
    if(view === 'Strikeouts By Pitchers') {
        return createChart(teams, "SOA");
    }
    if(view === 'Three Year Park Factor For Batters') {
        return createChart(teams, "BPF");
    }
    if(view === 'Three Year Park Factor For Pitchers') {
        return createChart(teams, "PPF");
    }
    if(view === 'Triples') {
        return createChart(teams, "3B");
    }
    if(view === 'Walks') {
        return createChart(teams, "BB");
    } 
    if(view === 'Walks Allowed') {
        return createChart(teams, "BBA");
    } 
}

export default {
    getView: getView,
    views: ["At Bats",
        "Caught Stealing",
        "Complete Games",
        "Doubles",
        "Double Plays",
        "ERA", 
        "Earned Runs Allowed",
        "Fielding Percentage",
        "Errors",
        "Hits",
        "Hits Allowed",
        "Home Attendance Total",
        "Home Runs", 
        "Home Runs Allowed",
        "Outs Pitched",
        "Opponents Runs Scored",
        "Runs Scored",
        "Sacrifice Flies",
        "Saves",
        "Shutouts",
        "Stolen Bases",
        "Strike Outs",
        "Strikeouts By Pitchers",
        "Three Year Park Factor For Batters",
        "Three Year Park Factor For Pitchers",
        "Triples",
        "Walks",
        "Walks Allowed"]
}