const dataLoader = require("./dataLoader");
const generator = require("./generator");
const fs = require("fs");

const teamsData = dataLoader.loadTeams("data/teams.json");
const playersData = dataLoader.loadPlayers("data/players.json");
const scheduleData = dataLoader.loadSchedule("data/schedule.json");
