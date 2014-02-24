// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// XY Singles
	///////////////////////////////////////////////////////////////////

	{
		name: "Random Battle",
		section: "XY Singles",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Unrated Random Battle",
		section: "XY Singles",

		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Random Battle']
	},
	{
		name: "OU",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite']
	},
	{
		name: "Ubers",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: []
	},
	{
		name: "UU (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Heracronite', 'OU', 'BL', 'Drizzle', 'Drought']
	},
	{
		name: "LC",
		section: "XY Singles",

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel', 'Yanma', 'Tangela', 'Swirlix', 'Gligar']
	},
	{
		name: "LC UU",
		section: "XY Singles",

		searchShow: false,
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Scyther', 'Sneasel',
			'Abra',
			'Aipom',
			'Bronzor',
			'Bunnelby',
			'Carvanha',
			'Chinchou',
			'Clamperl',
			'Croagunk',
			'Drilbur',
			'Dwebble',
			'Elekid',
			'Ferroseed',
			'Fletchling',
			'Froakie',
			'Gastly',
			'Gligar',
			'Growlithe',
			'Honedge',
			'Inkay',
			'Larvesta',
			'Magnemite',
			'Meditite',
			'Mienfoo',
			'Misdreavus',
			'Munchlax',
			'Murkrow',
			'Pawniard',
			'Ponyta',
			'Porygon',
			'Scraggy',
			'Shellder',
			'Slowpoke',
			'Sneasel',
			'Snover',
			'Spritzee',
			'Staryu',
			'Surskit',
			'Swirlix',
			'Tangela',
			'Timburr',
			'Tirtouga',
			'Torchic',
			'Tyrunt',
			'Vullaby',
			'Vulpix',
			'Yanma']
	},
	{
		name: "XY Battle Spot Singles",
		section: "XY Singles",

		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 3) return ['You must bring at least 3 Pokemon.'];
		}
	},
	{
		name: "Custom Game",
		section: "XY Singles",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// XY Doubles
	///////////////////////////////////////////////////////////////////

	
	{
		name: "Random Doubles Battle",
		section: "XY Doubles",

		gameType: 'doubles',
		team: 'randomDoubles',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod']
	},
	{
		name: "Smogon Doubles (suspect test)",
		section: "XY Doubles",

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal'
		]
	},
	{
		name: "Smogon Doubles Ubers",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard Ubers', 'Team Preview'],
		banlist: ['Dark Void']
	},
	{
		name: "Smogon Doubles UU",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Dark Void', 'Soul Dew',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White',
			'Xerneas',
			'Yveltal',
			'Aegislash',
			'Alakazam',
			'Amoonguss',
			'Azumarill',
			'Breloom',
			'Chandelure',
			'Charizard',
			'Clefable',
			'Cloyster',
			'Conkeldurr',
			'Cresselia',
			'Dragonite',
			'Excadrill',
			'Ferrothorn',
			'Garchomp',
			'Gardevoir',
			'Gastrodon',
			'Genesect',
			'Gengar',
			'Gliscor',
			'Goodra',
			'Greninja',
			'Gyarados',
			'Heatran',
			'Hitmontop',
			'Infernape',
			'Jolteon',
			'Kangaskhan',
			'Klefki',
			'Landorus-Therian',
			'Lucario',
			'Mamoswine',
			'Manectric',
			'Mawile',
			'Meowstic',
			'Metagross',
			'Ninetales',
			'Politoed',
			'Reuniclus',
			'Rotom-Wash',
			'Rhyperior',
			'Sableye',
			'Scizor',
			'Scrafty',
			'Sylveon',
			'Talonflame',
			'Terrakion',
			'Thundurus',
			'Togekiss',
			'Trevenant',
			'Tyranitar',
			'Venusaur',
			'Volcarona',
			'Whimsicott']
	},
	{
		name: "XY Battle Spot Doubles",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "VGC 2014",
		section: "XY Doubles",

		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC', 'Kalos Pokedex'],
		requirePentagon: true,
		banlist: [], // The neccessary bans are in Standard GBU
		validateTeam: function(team, format) {
			if (team.length < 4) return ['You must bring at least 4 Pokemon.'];
		}
	},
	{
		name: "Doubles Challenge Cup",
		section: 'XY Doubles',

		gameType: 'doubles',
		team: 'randomCC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	/*{
		name: "Mega Battles (beta)",
		section: "XY Singles",

		ruleset: ['Pokemon', 'OHKO Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Evasion Abilities Clause', 'megaonly', 'Team Preview'],
		banlist: []
	},*/
	{
		name: "Doubles Custom Game",
		section: "XY Doubles",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		ruleset: ['Team Preview']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		name: "[Seasonal] Fabulous February",
		section: "OM of the Month",

		mod: 'inverse',
		gameType: 'doubles',
		team: 'randomSeasonalFF',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			this.add('-message', "新年快乐");
		},
		onModifyMove: function(move) {
			if (move.id === 'explosion') move.name = 'Firecrackers';
			else if (move.type === 'Fire') move.name = 'Fireworks';
		}
	},
	{
		name: "Middle Cup",
		section: "OM of the Month",

		ruleset: ['Pokemon', 'Team Preview', 'Standard'],
		banlist: ['Illegal', 'Eviolite'],
		maxLevel: 50,
		defaultLevel: 50,
		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (!template.evos || template.evos.length === 0 || !template.prevo) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		}
	},
	{
		name: "CAP",
		section: "Other Metagames",

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause', 'HP Percentage Mod'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "Sky Battles",
		section: "Other Metagames",

		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			// Banned items
			'Soul Dew', 'Iron Ball', 'Pinsirite', 'Gengarite',
			// Banned moves
			'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure',
			'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heavy Slam',
			'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller',
			'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
			// Banned Pokémon
			// Illegal Flying-types
			'Pidgey', 'Spearow', "Farfetch'd", 'Doduo', 'Dodrio', 'Hoothoot', 'Natu', 'Murkrow', 'Delibird', 'Taillow', 'Starly', 'Chatot',
			'Shaymin-Sky', 'Pidove', 'Archen', 'Ducklett', 'Rufflet', 'Vullaby', 'Fletchling', 'Hawlucha',
			// Illegal Levitators
			'Gastly', 'Gengar',
			// Illegal Megas
			'Pinsir-Mega', 'Gengar-Mega',
			// Illegal Ubers
			'Arceus-Flying', 'Giratina', 'Giratina-Origin', 'Ho-Oh', 'Lugia', 'Rayquaza', 'Yveltal'
		]
	},
	{
		name: "Inverse Battle",
		section: "Other Metagames",

		mod: 'inverse',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: [
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Darkrai',
			'Deoxys-Attack',
			'Gengarite',
			'Giratina', 'Giratina-Origin',
			'Ho-Oh',
			'Kangaskhanite',
			'Kyogre',
			'Kyurem-Black',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Palkia',
			'Rayquaza',
			'Shaymin-Sky',
			'Soul Dew',
			'Xerneas',
			'Yveltal',
			'Zekrom'
		]
	},
	{
		name: "1v1",
		section: 'Other Metagames',

		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Focus Sash', 'Kangaskhanite', 'Soul Dew',
			'Destiny Bond', 'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Memento', 'Perish Song', 'Selfdestruct',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom'
		]
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['OU', 'Same Type Clause']
	},
	{
		name: "STABmons",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['OU'],
		banlist: []
	},
	{
		name: "Ability Exchange",
		section: "Other Metagames",

		searchShow: false,
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Slaking', 'Regigigas']
	},
	{
		name: "Averagemons",
		section: "Other Metagames",

		searchShow: false,
		mod: 'averagemons',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Soul Dew', 'Thick Club', 'Deepseatooth', 'Deepseascale', 'Light Ball', 'Mawilite', 'Medichamite', 'Eviolite', 'Shedinja', 'Smeargle', 'Huge Power', 'Pure Power']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 5] Glitchmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased'],
		mimicGlitch: true
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	// {
	// 	name: "[Gen 5] CAP Cawmodore Playtest",
	// 	section: "BW2 Singles",

	// 	mod: 'gen5',
	// 	ruleset: ['CAP Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
	// 	banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', "Tomohawk", "Necturna", "Mollux", "Aurumoth", "Malaconda", "Syclant", "Revenankh", "Pyroak", "Fidgit", "Stratagem", "Arghonaut", "Kitsunoh", "Cyclohm", "Colossoil", "Krilowatt", "Voodoom"]
	// },
	{
		name: "[Gen 5] OU",
		section: "BW2 Singles",
		column: 2,

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew']
	},
	{
		name: "[Gen 5] OU Clear Skies",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Hail', 'Snow Warning', 'Sand Stream', 'Sandstorm', 'Rain Dance', 'Drizzle', 'Drought', 'Sunny Day']
	},
	{
		name: "[Gen 5] OU Clear Skies - Perm",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Hail', 'Sandstorm', 'Rain Dance', 'Sunny Day']
	},
	{
		name: "[Gen 5] OU No Hazards",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Spikes', 'Stealth Rocks', 'Toxic Spikes']
	},
	{
		name: "[Gen 5] Point Score",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview', 'Point System'],
		banlists: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Arceus', 'Shadow Tag']
	},
	{
		name: "[Gen 5] Perseverance",
		section: "BW2 Singles",

		mod: 'gen5',
		defaultLevel: 100,
		onFaint: function(pokemon) {
				var name = pokemon.side.name;
				var winner = '';
				if (pokemon.side.id === 'p1') {
					winner = 'p2';
				} else {
					winner = 'p1';
				}
				pokemon.battle.win(winner);

		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Shuckle', 'Sableye']
	},
	{
		name: "[Gen 5] Ubers",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
		banlist: []
	},
	{
		name: "[Gen 5] UU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream']
	},
	{
		name: "[Gen 5] RU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning']
	},
	{
		name: "[Gen 5] NU",
		section: "BW2 Singles",

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU','BL3', 'Prankster + Assist']
	},
	{
		name: "[Gen 5] LC",
		section: "BW2 Singles",

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Sonicboom', 'Dragon Rage', 'Berry Juice', 'Carvanha', 'Meditite', 'Gligar', 'Scyther', 'Sneasel', 'Tangela', 'Vulpix', 'Yanma', 'Soul Dew']
	},
	{
		name: "[Gen 5] GBU Singles",
		section: "BW2 Singles",

		mod: 'gen5',
		validateSet: function(set) {
			if (!set.level || set.level >= 50) set.forcedLevel = 50;
			return [];
		},
		onBegin: function() {
			this.debug('cutting down to 3');
			this.p1.pokemon = this.p1.pokemon.slice(0,3);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,3);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview GBU'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Custom Game",
		section: "BW2 Singles",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 5] Smogon Doubles",
		section: 'BW2 Doubles',
		column: 2,

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Dark Void', 'Soul Dew', 'Sky Drop',
			'Mewtwo',
			'Lugia',
			'Ho-Oh',
			'Kyogre',
			'Groudon',
			'Rayquaza',
			'Dialga',
			'Palkia',
			'Giratina', 'Giratina-Origin',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram',
			'Zekrom',
			'Kyurem-White'
		]
	},
	{
		name: "[Gen 5] GBU Doubles",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		onBegin: function() {
			this.debug('cutting down to 4');
			this.p1.pokemon = this.p1.pokemon.slice(0,4);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,4);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		maxForcedLevel: 50,
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview VGC'],
		banlist: ['Sky Drop', 'Dark Void']
	},
	{
		name: "[Gen 5] Doubles Custom Game",
		section: 'BW2 Doubles',

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview']
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

/*	{
		name: "[Seasonal] Christmas Charade",
		section: "OM of the Month",

		team: 'randomSeasonalCC',
		ruleset: ['HP Percentage Mod', 'Sleep Clause Mod'],
		onBegin: function() {
			this.setWeather('Hail');
			delete this.weatherData.duration;
		},
		onModifyMove: function(move) {
			if (move.id === 'present') {
				move.category = 'Status';
				move.basePower = 0;
				delete move.heal;
				move.accuracy = 100;
				switch (this.random(19)) {
				case 0:
					move.onTryHit = function() {
						this.add('-message', "The present was a bomb!");
					};
					move.category = 'Physical';
					move.basePower = 250;
					break;
				case 1:
					move.onTryHit = function() {
						this.add('-message', "The present was confusion!");
					};
					move.volatileStatus = 'confusion';
						break;
				case 2:
					move.onTryHit = function() {
						this.add('-message', "The present was Disable!");
					};
					move.volatileStatus = 'disable';
					break;
				case 3:
					move.onTryHit = function() {
						this.add('-message', "The present was a taunt!");
					};
					move.volatileStatus = 'taunt';
					break;
				case 4:
					move.onTryHit = function() {
						this.add('-message', "The present was some seeds!");
					};
					move.volatileStatus = 'leechseed';
					break;
				case 5:
					move.onTryHit = function() {
						this.add('-message', "The present was an embargo!");
					};
					move.volatileStatus = 'embargo';
					break;
				case 6:
					move.onTryHit = function() {
						this.add('-message', "The present was a music box!");
					};
					move.volatileStatus = 'perishsong';
					break;
				case 7:
					move.onTryHit = function() {
						this.add('-message', "The present was a curse!");
					};
					move.volatileStatus = 'curse';
					break;
				case 8:
					move.onTryHit = function() {
						this.add('-message', "The present was Torment!");
					};
					move.volatileStatus = 'torment';
					break;
				case 9:
					move.onTryHit = function() {
						this.add('-message', "The present was a trap!");
					};
					move.volatileStatus = 'partiallytrapped';
					break;
				case 10:
					move.onTryHit = function() {
						this.add('-message', "The present was a root!");
					};
					move.volatileStatus = 'ingrain';
					break;
				case 11:
					move.onTryHit = function() {
						this.add('-message', "The present was a makeover!");
					};
					var boosts = {};
					var possibleBoosts = ['atk','def','spa','spd','spe','accuracy','evasion'].randomize();
					boosts[possibleBoosts[0]] = 1;
					boosts[possibleBoosts[1]] = -1;
					boosts[possibleBoosts[2]] = -1;
					move.boosts = boosts;
					break;
				case 12:
					move.onTryHit = function() {
						this.add('-message', "The present was psychic powers!");
					};
					move.volatileStatus = 'telekinesis';
					break;
				case 13:
					move.onTryHit = function() {
						this.add('-message', "The present was fatigue!");
					};
					move.volatileStatus = 'mustrecharge';
					break;
				case 14:
				case 15:
					move.onTryHit = function() {
						this.add('-message', "The present was a snowball hit!");
					};
					move.category = 'Ice';
					move.basePower = 250;
					break;
				case 16:
					move.onTryHit = function() {
						this.add('-message', "The present was a crafty shield!");
					};
					move.volatileStatus = 'craftyshield';
					break;
				case 17:
					move.onTryHit = function() {
						this.add('-message', "The present was an electrification!");
					};
					move.volatileStatus = 'electrify';
					break;
				case 18:
					move.onTryHit = function() {
						this.add('-message', "The present was an ion deluge!");
					};
					move.volatileStatus = 'iondeluge';
					break;
				}
			}
		}
	},*/
	{
		name: "Sky Battles",
		section: "OM of the Month",

		validateSet: function(set) {
			var template = this.getTemplate(set.species || set.name);
			if (template.types.indexOf('Flying') === -1 && set.ability !== 'Levitate') {
				return [set.species+" is not a Flying type and does not have the ability Levitate."];
			}
		},
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			// Banned items
			'Soul Dew', 'Iron Ball', 'Pinsirite', 'Gengarite',
			// Banned moves
			'Body Slam', 'Bulldoze', 'Dig', 'Dive', 'Earth Power', 'Earthquake', 'Electric Terrain', 'Fire Pledge', 'Fissure',
			'Flying Press', 'Frenzy Plant', 'Geomancy', 'Grass Knot', 'Grass Pledge', 'Grassy Terrain', 'Gravity', 'Heavy Slam',
			'Ingrain', "Land's Wrath", 'Magnitude', 'Mat Block', 'Misty Terrain', 'Mud Sport', 'Muddy Water', 'Rototiller',
			'Seismic Toss', 'Slam', 'Smack Down', 'Spikes', 'Stomp', 'Substitute', 'Surf', 'Toxic Spikes', 'Water Pledge', 'Water Sport',
			// Banned Pokémon
			// Illegal Flying-types
			'Pidgey', 'Spearow', "Farfetch'd", 'Doduo', 'Dodrio', 'Hoothoot', 'Natu', 'Murkrow', 'Delibird', 'Taillow', 'Starly', 'Chatot',
			'Shaymin-Sky', 'Pidove', 'Archen', 'Ducklett', 'Rufflet', 'Vullaby', 'Fletchling', 'Hawlucha',
			// Illegal Levitators
			'Gastly', 'Gengar',
			// Illegal Megas
			'Pinsir-Mega', 'Gengar-Mega',
			// Illegal Ubers
			'Arceus-Flying', 'Giratina', 'Giratina-Origin', 'Ho-Oh', 'Lugia', 'Rayquaza', 'Yveltal'
		]
	},
	{
        	name: "C&E",
        	section: "Other Metagames",
 
        	searchShow: false,
               forcedLevel: 100,
        	ruleset: ['Pokemon', 'Team Preview', 'Sleep Clause Mod', 'Moody Clause', 'OHKO Clause', 'HP Percentage Mod', 'Evasion Moves Clause'],
        	banlist: ['Soul Dew', 'Illegal', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Uber', 'Farfetchd', 'Kangaskhan', 'Pinsir', 'Tauros', 'Lapras', 'Ditto', 'Aerodactyl', 'Unown', 'Girafarig', 'Dunsparce', 'Qwilfish', 'Shuckle', 'Heracross', 'Corsola', 'Delibird', 'Skarmory', 'Stantler', 'Smeargle', 'Miltank', 'Sableye', 'Mawile', 'Plusle', 'Minun', 'Volbeat', 'Illumise', 'Torkoal', 'Spinda', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Castform', 'Kecleon', 'Tropius', 'Absol', 'Relicanth', 'Luvdisc', 'Pachirisu', 'Chatot', 'Spiritomb', 'Carnivine', 'Rotom', 'Rotom-Heat', 'Rotom-Wash', 'Rotom-Frost', 'Rotom-Fan', 'Rotom-Mow', 'Audino', 'Throh', 'Sawk', 'Basculin', 'Basculin-Blue-Striped', 'Maractus', 'Sigilyph', 'Emolga', 'Alomomola', 'Cryogonal', 'Stunfisk', 'Druddigon', 'Bouffalant', 'Heatmor', 'Durant', 'Furfrou', 'Hawlucha', 'Dedenne', 'Carbink', 'Klefki', 'Articuno', 'Zapdos', 'Moltres', 'Mew', 'Raikou', 'Entei', 'Suicune', 'Celebi', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Regirock', 'Regice', 'Registeel', 'Latias', 'Latios', 'Deoxys', 'Deoxys-Attack', 'Jirachi', 'Uxie', 'Mesprit', 'Azelf', 'Heatran', 'Regigigas', 'Cresselia', 'Phione', 'Manaphy', 'Shaymin', 'Victini', 'Cobalion', 'Terrakion', 'Virizion', 'Tornadus', 'Thundurus', 'Landorus', 'Tornadus-Therian', 'Thundurus-Therian', 'Landorus-Therian', 'Kyurem', 'Kyurem-Black', 'Keldeo', 'Meloetta', 'Genesect', 'Zygarde']
    	},
	{
		name: "CAP",
		section: "Other Metagames",

		ruleset: ['CAP Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "Challenge Cup",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod']
	},
	{
		name: "Challenge Cup 1-vs-1",
		section: "Other Metagames",

		team: 'randomCC',
		ruleset: ['Pokemon', 'Team Preview 1v1', 'HP Percentage Mod'],
		onBegin: function() {
			this.debug('Cutting down to 1');
			this.p1.pokemon = this.p1.pokemon.slice(0, 1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0, 1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		}
	},
	{
		name: "Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon'],
		banlist: []
	},
	{
		name: "Balanced Hackmons",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'OHKO Clause'],
		banlist: ['Wonder Guard', 'Shadow Tag', 'Arena Trap', 'Pure Power', 'Huge Power', 'Parental Bond']
	},
	{
		name: "Gen-NEXT OU",
		section: "Other Metagames",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber']
	},
	{
		name: "Inverse Battle",
		section: "Other Metagames",

		mod: 'inverse',
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: [
			'Ho-Oh',
			'Kangaskhanite',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fairy', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y',
			'Yveltal',
			'Xerneas'
		]
	},
	{
		name: "OU Monotype",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'Standard', 'Same Type Clause', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite']
	},
	{
		name: "[Gen 5] Glitchmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Team Preview', 'HP Percentage Mod'],
		banlist: ['Illegal', 'Unreleased'],
		mimicGlitch: true
	},
	{
		name: "[Gen 5] 1v1",
		section: 'Other Metagames',

		mod: 'gen5',
		onBegin: function() {
			this.p1.pokemon = this.p1.pokemon.slice(0,1);
			this.p1.pokemonLeft = this.p1.pokemon.length;
			this.p2.pokemon = this.p2.pokemon.slice(0,1);
			this.p2.pokemonLeft = this.p2.pokemon.length;
		},
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Unreleased', 'Illegal', 'Soul Dew',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Blaziken',
			'Darkrai',
			'Deoxys', 'Deoxys-Attack',
			'Dialga',
			'Giratina', 'Giratina-Origin',
			'Groudon',
			'Ho-Oh',
			'Kyogre',
			'Kyurem-White',
			'Lugia',
			'Mewtwo',
			'Palkia',
			'Rayquaza',
			'Reshiram',
			'Shaymin-Sky',
			'Zekrom',
			'Memento', 'Explosion', 'Perish Song', 'Destiny Bond', 'Healing Wish', 'Selfdestruct', 'Lunar Dance', 'Final Gambit',
			'Focus Sash'
		]
	},
	{
		name: "[Gen 5] PU",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['NU'],
		banlist: ["Charizard", "Wartortle", "Kadabra", "Golem", "Haunter", "Exeggutor", "Weezing", "Kangaskhan", "Pinsir", "Lapras", "Ampharos", "Misdreavus", "Piloswine", "Miltank", "Ludicolo", "Swellow", "Gardevoir", "Ninjask", "Torkoal", "Cacturne", "Altaria", "Armaldo", "Gorebyss", "Regirock", "Regice", "Bastiodon", "Floatzel", "Drifblim", "Skuntank", "Lickilicky", "Probopass", "Rotom-Fan", "Samurott", "Musharna", "Gurdurr", "Sawk", "Carracosta", "Garbodor", "Sawsbuck", "Alomomola", "Golurk", "Braviary", "Electabuzz", "Electrode", "Liepard", "Tangela", "Eelektross", "Ditto", "Seismitoad", "Zangoose", "Roselia", "Serperior", "Metang", "Tauros", "Cradily", "Primeape", "Scolipede", "Jynx", "Basculin", "Gigalith", "Camerupt", "Golbat"]
	},
	{
		name: "[Gen 5] STABmons",
		section: "Other Metagames",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: ['Drizzle ++ Swift Swim', 'Soul Dew', 'Soul Dew',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Blaziken', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Reshiram', 'Zekrom', 'Kyurem-White', 'Genesect'
		]
	},
	{
		name: "[Gen 5] Budgetmons",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['OU'],
		banlist: [],
		validateTeam: function(team, format) {
			var bst = 0;
			for (var i=0; i<team.length; i++) {
				var template = this.getTemplate(team[i].species);
				Object.values(template.baseStats, function(value) {
					bst += value;
				});
			}
			if (bst > 2300) return ['The combined BST of your team is greater than 2300.'];
		}
	},
	{
		name: "[Gen 5] Ability Exchange",
		section: "Other Metagames",

		mod: 'gen5',
		searchShow: false,
		ruleset: ['Pokemon', 'Ability Exchange Pokemon', 'Sleep Clause Mod', 'Species Clause', 'OHKO Clause', 'Moody Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Team Preview'],
		banlist: ['Unreleased', 'Illegal', 'Ignore Illegal Abilities', 'Drizzle ++ Swift Swim', 'Soul Dew', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush',
			'Mewtwo', 'Lugia', 'Ho-Oh', 'Blaziken', 'Kyogre', 'Groudon', 'Rayquaza', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Dialga', 'Palkia', 'Giratina', 'Giratina-Origin', 'Manaphy', 'Darkrai', 'Shaymin-Sky',
			'Arceus', 'Arceus-Bug', 'Arceus-Dark', 'Arceus-Dragon', 'Arceus-Electric', 'Arceus-Fighting', 'Arceus-Fire', 'Arceus-Flying', 'Arceus-Ghost', 'Arceus-Grass', 'Arceus-Ground', 'Arceus-Ice', 'Arceus-Poison', 'Arceus-Psychic', 'Arceus-Rock', 'Arceus-Steel', 'Arceus-Water',
			'Excadrill', 'Tornadus-Therian', 'Thundurus', 'Reshiram', 'Zekrom', 'Landorus', 'Kyurem-White', 'Genesect', 'Slaking', 'Regigigas'
		]
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		name: "[Gen 4] OU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],

		column: 2
	},
	{
		name: "[Gen 4] UU (beta)",
		section: "Past Generations",

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL']
	},
	{
		name: "[Gen 4] Hackmons",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 4] Custom Game",
		section: "Past Generations",

		mod: 'gen4',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 3] OU (beta)",
		section: "Past Generations",

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],

		column: 2
	},
	{
		name: "[Gen 3] Hackmons",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod'],
		banlist: []
	},
	{
		name: "[Gen 3] Custom Game",
		section: "Past Generations",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: []
	},
	{
		name: "[Gen 2] OU (beta)",
		section: "Past Generations",

		mod: 'gen2',
		debug: true,
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Mean Look + Hypnosis + Perish Song']
	},
	{
		name: "[Gen 2] Custom Game",
		section: "Past Generations",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon']
	},
	{
		name: "[Gen 1] OU (beta)",
		section: "Past Generations",

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber']
	},
	{
		name: "[Gen 1] Custom Game",
		section: "Past Generations",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon']
	}

];
