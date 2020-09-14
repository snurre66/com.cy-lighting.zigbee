'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class LightifyDimmableWhiteZigBee extends ZigBeeLightDevice {
	get energyMap() {
		return {
			'DM A60F': {
				approximation: {
					usageOff: 0.5,
					usageOn: 6.0,
				},
			},
			'DM A60F': {
				approximation: {
					usageOff: 0.5,
					usageOn: 6.0,
				},
			},
		};
	}
}

module.exports = LightifyDimmableWhiteZigBee;
