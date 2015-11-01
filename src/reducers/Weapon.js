const { SHUFFLE_WEAPONS } = require('../constants/Constants');
const { List, Store } = require('../store/Store');
const _ = require('lodash');

function initializeWeapons(state) {
  const weapons = [
    { id: 1, name: ".52 Gal Deco" },
    { id: 2, name: ".96 Gal" },
    { id: 3, name: "Aerospray MG" },
    { id: 4, name: "Aerospray RG" },
    { id: 5, name: "Ammo Knights" },
    { id: 6, name: "Bamboozler 14 MK I" },
    { id: 7, name: "Bamboozler 14 MK II" },
    { id: 8, name: "Blaster" },
    { id: 9, name: "Blaster (sub-class)" },
    { id: 10, name: "Bomb Rush" },
    { id: 11, name: "Bubbler" },
    { id: 12, name: "Burst Bomb" },
    { id: 13, name: "Carbon Roller" },
    { id: 14, name: "Carbon Roller Deco" },
    { id: 15, name: "Classic Squiffer" },
    { id: 16, name: "Custom Blaster" },
    { id: 17, name: "Custom Dual Squelcher" },
    { id: 18, name: "Custom E-liter 3K" },
    { id: 19, name: "Custom E-Liter 3k" },
    { id: 20, name: "Custom E-liter 3K Scope" },
    { id: 21, name: "Custom Hydra Splatling" },
    { id: 22, name: "Custom Jet Squelcher" },
    { id: 23, name: "Custom Range Blaster" },
    { id: 24, name: "Custom Splattershot Jr." },
    { id: 25, name: "Disruptor" },
    { id: 26, name: "Dual Squelcher" },
    { id: 27, name: "Dynamo Roller" },
    { id: 28, name: "E-liter 3K" },
    { id: 29, name: "E-liter 3K Scope" },
    { id: 30, name: "Echolocator" },
    { id: 31, name: "Forge Splattershot Pro" },
    { id: 32, name: "Gold Dynamo Roller" },
    { id: 33, name: "H-3 Nozzlenose" },
    { id: 34, name: "H-3 Nozzlenose D" },
    { id: 35, name: "Heavy Splatling" },
    { id: 36, name: "Heavy Splatling Deco" },
    { id: 37, name: "Hero Charger Replica" },
    { id: 38, name: "Hero Roller Replica" },
    { id: 39, name: "Hero Shot Replica" },
    { id: 40, name: "Hydra Splatling" },
    { id: 41, name: "Ink" },
    { id: 42, name: "Ink Mine" },
    { id: 43, name: "Inkbrush Nouveau" },
    { id: 44, name: "Inkstrike" },
    { id: 45, name: "Inkzooka" },
    { id: 46, name: "Jet Squelcher" },
    { id: 47, name: "Kelp Splat Charger" },
    { id: 48, name: "Kelp Splatterscope" },
    { id: 49, name: "Killer Wail" },
    { id: 50, name: "Krak-On Splat Roller" },
    { id: 51, name: "Kraken" },
    { id: 52, name: "L-3 Nozzlenose" },
    { id: 53, name: "L-3 Nozzlenose D" },
    { id: 54, name: "Luna Blaster" },
    { id: 55, name: "Luna Blaster Neo" },
    { id: 56, name: "Mini Splatling" },
    { id: 57, name: "N-ZAP '85" },
    { id: 58, name: "N-ZAP '89" },
    { id: 59, name: "Neo Sploosh-o-matic" },
    { id: 60, name: "New Squiffer" },
    { id: 61, name: "Octobrush Nouveau" },
    { id: 62, name: "Octoshot Replica" },
    { id: 63, name: "Point Sensor" },
    { id: 64, name: "Rainmaker (Weapon)" },
    { id: 65, name: "Range Blaster" },
    { id: 66, name: "Rapid Blaster" },
    { id: 67, name: "Rapid Blaster Deco" },
    { id: 68, name: "Rapid Blaster Pro" },
    { id: 69, name: "Rapid Blaster Pro Deco" },
    { id: 70, name: "Seeker" },
    { id: 71, name: "Slosher" },
    { id: 72, name: "Slosher Deco" },
    { id: 73, name: "Splash Wall" },
    { id: 74, name: "Splash-o-matic" },
    { id: 75, name: "Splat Bomb" },
    { id: 76, name: "Splat Charger" },
    { id: 77, name: "Splat Roller" },
    { id: 78, name: "Splatterscope" },
    { id: 79, name: "Splattershot" },
    { id: 80, name: "Splattershot Jr." },
    { id: 81, name: "Splattershot Pro" },
    { id: 82, name: "Sploosh-o-matic" },
    { id: 83, name: "Sprinkler" },
    { id: 84, name: "Squid Beacon" },
    { id: 85, name: "Squid Beakon" },
    { id: 86, name: "Suction Bomb" },
    { id: 87, name: "Tentatek Splattershot" },
    { id: 88, name: "Tri-Slosher" },
    { id: 89, name: "Tri-Slosher Nouveau" },
    { id: 90, name: "Weapon" },
    { id: 91, name: "Zink Mini Splatling" },
  ];

  _.each(weapons, (weapon) => {
    state.add(weapon);
  });
}

const list = new List();
initializeWeapons(list);

module.exports = function(state = [], action) {
  switch (action.type) {
    case SHUFFLE_WEAPONS:
      state = [];
      let length = list.getLength();

      while(state.length != action.length) {
        let weapon = list.getByIndex(Math.floor(Math.random() * (length + 1)));
        if(state.indexOf(weapon) != -1) continue;

        state.push(weapon);
      }

      return state;

    default:
      return state;
  }
};
