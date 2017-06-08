
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function eraView(teams) {
   return <BarChart width={1900} height={300} data={teams} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar dataKey="ERA" fill="#82ca9d" />
      </BarChart>
}

function homeRunsView(teams) {
    return   <BarChart width={1900} height={300} data={teams} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="HR" fill="#82ca9d" />
            </BarChart>
}

function getView(view, teams){
    if(view === 'ERA') {
        return eraView(teams);
    } 
    if(view === 'Home Runs') {
        return homeRunsView(teams);
    }
}

export default {
    getView: getView,
    views: ['Home Runs', 'ERA']
}