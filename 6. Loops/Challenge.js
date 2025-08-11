const galaxyMap = [
	{ name: 'Alpha-7', type: 'Planet', hazardLevel: 3, resources: 'Titanium', isHabitable: true },
	{ name: 'Orion Nebula', type: 'Nebula', hazardLevel: 1, resources: 'Gas', isHabitable: false },
	{ name: 'KX-449', type: 'Planet', hazardLevel: 7, resources: 'Crystals', isHabitable: false },
	{ name: 'The Void', type: 'Asteroid Field', hazardLevel: 9, resources: 'None', isHabitable: false },
	{ name: 'Epsilon-Eridani', type: 'Planet', hazardLevel: 2, resources: 'Water', isHabitable: true },
	{ name: 'Rogue Comet', type: 'Comet', hazardLevel: 5, resources: 'Ice', isHabitable: false }
];

const starship = {
	name: 'Odyssey',
	fuelLevel: 100,
	cargo: [],
	missionLog: [],
	scanObject: function (celestialObject) {
		this.fuelLevel -= 5;
		this.missionLog.push(`Scanned [${celestialObject.name}]. Fuel remaining: [${this.fuelLevel}].`);
		if (celestialObject.type === 'Nebula') {
			this.missionLog.push(`Nebula detected. Interesting, but moving on.`);
			return 'NEBULA';
		}
		if (celestialObject.hazardLevel >= 8) {
			this.missionLog.push(`EMERGENCY! Hazard level too high. Mission aborted.`);
			return 'HAZARD';
		}
		if (celestialObject.resources !== 'None') {
			this.cargo.push(celestialObject.resources);
			this.missionLog.push(`Resource collected: [${celestialObject.resources}].`);
			return 'COLLECTED';
		}
		return 'NO_RESOURCES';
	},
	generateMissionReport: function () {
		console.log(`--- MISSION REPORT: STARSHIP ODYSSEY ---`);
		for (let i = this.missionLog.length - 1; i >= 0; i--) {
			console.log(this.missionLog[i]);
		}
		console.log(`--- END OF REPORT. Cargo Hold: [${this.cargo}]. Fuel: [${this.fuelLevel}] ---`);
	},
	emergencyManeuvers: function () {
		let calculateJumpCost = () => (Math.random() * 10) + 5;
		let jumpCost;
		while (this.fuelLevel > 20) {
			jumpCost = calculateJumpCost();
			this.fuelLevel -= jumpCost;
			console.log(`Emergency jump! Fuel consumed: [${jumpCost}]. Fuel remaining: [${this.fuelLevel}].`);
		}
	}
};

starship.emergencyManeuvers();

for (let i = 0; i < galaxyMap.length; i++){
	let resultSignal = starship.scanObject(galaxyMap[i]);
	
	if (resultSignal === 'NEBULA') continue;
	if (resultSignal === 'HAZARD') break;
	if (starship.fuelLevel < 10) {
		console.log(`CRITICAL FUEL LEVEL. Aborting mission.`);
		break;
	}
}

starship.generateMissionReport();