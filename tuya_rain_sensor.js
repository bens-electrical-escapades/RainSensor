const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: [
        {
            modelID: 'TS0207',
            manufacturerName: '_TZ3210_tgvtvdoc',
        },
    ],
    model: 'TS0207_rain_sensor',
    vendor: 'Tuya',
    description: 'Solar Rain Sensor RB-SRAIN01',
    fromZigbee: [tuya.fz.datapoints, fz.battery, fz.ias_water_leak_alarm_1],
    toZigbee: [],
    exposes: [
        e.water_leak('raining').withDescription('Droplet Detection (Raining)'),
        e.numeric('illuminance', ea.STATE).withUnit('mV').withDescription('Illuminance level'),
        e.numeric('illuminance_average_20min', ea.STATE).withUnit('mV').withDescription('Illuminance average for the last 20 minutes'),
        e.numeric('illuminance_maximum_today', ea.STATE).withUnit('mV').withDescription('Illuminance maximum for the last 24 hours'),
        e.binary('cleaning_reminder', ea.STATE, 'ON', 'OFF').withDescription('Cleaning reminder'),
        e.numeric('rain_intensity', ea.STATE).withUnit('mV').withDescription('Rainfall intensity'),
        e.numeric('battery', ea.STATE).withUnit('%').withDescription('Battery level'),
        e.battery_low(),
    ],
    meta: {
        tuyaDatapoints: [
            [4, 'battery', tuya.valueConverter.batteryPercentage],
            [101, 'illuminance', tuya.valueConverter.raw],
            [102, 'illuminance_average_20min', tuya.valueConverter.raw],
            [103, 'illuminance_maximum_today', tuya.valueConverter.raw],
            [104, 'cleaning_reminder', tuya.valueConverter.trueFalse],
            [105, 'rain_intensity', tuya.valueConverter.raw],
        ],
    },
    extend: [],
};

module.exports = definition; const fz = require('zigbee-herdsman-converters/converters/fromZigbee');
const tz = require('zigbee-herdsman-converters/converters/toZigbee');
const exposes = require('zigbee-herdsman-converters/lib/exposes');
const tuya = require('zigbee-herdsman-converters/lib/tuya');
const e = exposes.presets;
const ea = exposes.access;

const definition = {
    fingerprint: [
        {
            modelID: 'TS0207',
            manufacturerName: '_TZ3210_tgvtvdoc',
        },
    ],
    model: 'TS0207_rain_sensor',
    vendor: 'Tuya',
    description: 'Solar Rain Sensor RB-SRAIN01',
    fromZigbee: [tuya.fz.datapoints, fz.battery, fz.ias_water_leak_alarm_1],
    toZigbee: [],
    exposes: [
        e.water_leak('raining').withDescription('Droplet Detection (Raining)'),
        e.numeric('illuminance', ea.STATE).withUnit('mV').withDescription('Illuminance level'),
        e.numeric('illuminance_average_20min', ea.STATE).withUnit('mV').withDescription('Illuminance average for the last 20 minutes'),
        e.numeric('illuminance_maximum_today', ea.STATE).withUnit('mV').withDescription('Illuminance maximum for the last 24 hours'),
        e.binary('cleaning_reminder', ea.STATE, 'ON', 'OFF').withDescription('Cleaning reminder'),
        e.numeric('rain_intensity', ea.STATE).withUnit('mV').withDescription('Rainfall intensity'),
        e.numeric('battery', ea.STATE).withUnit('%').withDescription('Battery level'),
        e.battery_low(),
    ],
    meta: {
        tuyaDatapoints: [
            [4, 'battery', tuya.valueConverter.batteryPercentage],
            [101, 'illuminance', tuya.valueConverter.raw],
            [102, 'illuminance_average_20min', tuya.valueConverter.raw],
            [103, 'illuminance_maximum_today', tuya.valueConverter.raw],
            [104, 'cleaning_reminder', tuya.valueConverter.trueFalse],
            [105, 'rain_intensity', tuya.valueConverter.raw],
        ],
    },
    extend: [],
};

module.exports = definition;