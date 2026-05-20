;(function (window) {
  // geoJson definitions for country
  /*
    window.countries = [{
    type: 'Feature',
    properties: {
      name: 'Iceland'
    },
    geometry: {
      type: 'Point',
      coordinates: [1258, 911]
    }
  }, {
    type: 'Feature',
    properties: {
      name: 'Hispania'
    },
    geometry: {
      type: 'Point',
      coordinates: [1374, 2148]
    }
  }]
*/
  
  /*
  // geoJson definitions
  window.geoInfo = [{
    'type': 'Feature',
    'properties': {
      'name': '<div id="borderimg">Mare Germanicum'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [1589, 1447]
    }
  }, {
    'type': 'Feature',
    'properties': {
      'name': '<div id="borderimg">Mare Maggiore'
    },
    'geometry': {
      'type': 'Point',
      'coordinates': [2623, 1918]
    }
  }]
  */

/*  Simple table example for use in tooltips
 
<div id="borderimg">
<table>
<tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Piscatoris Fishing Colony</strong></td> </tr>
<tr><td><i>Fairy Ring Code: &nbsp;</i><strong>A K Q</strong></td> </tr>
<tr><td></td><td><a href="./guides/piscatorisfc-about.html"><i>Click for a Travel Guide to this area</i></a></td></tr>
</table>
</div> 
  
*/

// Fairy Ring definitions [distance from east, distance from north]
    
  window.fringInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Piscatoris Fishing Colony</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong>A K Q</strong></td> </tr><tr> <td></td><td><a href="./images/visit-piscatoris.pdf"><i>Click for a Travel Guide to this area</i></a></td></tr></table></div>'}, 'geometry': {'type': 'Point',   'coordinates': [2525, 4007]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Poison Waste</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DLR</strong></td> </tr><tr> <td></td><td><center>Dead End</center></td></tr></tr><tr> <td></td><td><a href="./images/lumbridge.png"><i>Click here for a message!</i></a></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [1668, 8197]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Penguin Island</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> AJS</strong></td> </tr><tr> <td></td><td><center>Dead End</center></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [3990, 1724]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>South of Castle Wars</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BKP</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [3060, 8716]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Feldip Hills</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> AKS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4565, 9356]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Hazelmere\'s Island</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CLS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5464, 8343]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Miscellania</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CIP</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4096, 1820]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Northeast of Keldagrim Entrance</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DKS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5964, 3161]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>West of Fremmenik Slayer Cave Entrance</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> AJR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6255, 4022]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Sinclair North West</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DJR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5415, 4234]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Sinclair West</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CJR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5649, 4323]} },  
 /* {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>West of Baxtorian Falls</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BJQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [3820, 5289]} },  */
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>McGrubor\'s Wood</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> ALS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5157, 4979]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>North west of Yanille</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CIQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4217, 7971]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Tower of Life</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DJP</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5269, 7134]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Ardougne Zoo Unicorns</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BIS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5091, 6841]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Legends Guild</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BLR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5932, 6151]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>TzHaar Area</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BLP</strong></td> </tr><tr> <td></td><td><center>(Underground)</center></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6770, 7555]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Northeast Karamja</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DKP</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7228, 8100]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Karamja Hunter</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CKR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6424, 8980]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Mudskipper point</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> AIQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8004, 8109]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Wizards Tower</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DIS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8927, 7807]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Island South of Draynor Village</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CLP</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8698, 7331]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Edgeville/GE</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DKR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [9065, 4989]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>South East of Kalphite Lair Entrance</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BIQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [10050, 8248]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Desert Lizard Hunter Area</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> DLQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [11459, 8870]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Island, Salve River</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BIP</strong></td> </tr><tr> <td></td><td><center>Dead End.</center></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [11352, 6373]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Canafis</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> CKS</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [11654, 5184]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Mort Myre Swamp</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BKR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [11830, 5502]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Haunted Woods</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> ALQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [12882, 4990]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Island East of Necromancer</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> AIR</strong></td> </tr><tr> <td></td><td><center>Dead End.</center></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5610, 6994]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Enchanted Valley</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> BKQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [2500, 1300]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Abyssal Space</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> ALR</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [2500, 1350]} },  
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg"><table><tr><td rowspan="2"><img src="./images/fring-info.png" width="50" height="50"></td> <td><strong>Caves South of Dorgesh-Kaan</strong></td> </tr><tr> <td><i>Fairy Ring Code: &nbsp;</i><strong> AJQ</strong></td> </tr><tr> <td></td><td></td></tr></table></div>'}, 'geometry': {'type': 'Point', 'coordinates': [2500, 1400]} }
 ]
 
 
// dueling ring
window.duelInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dueling Ring, Castle Wars Arena</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3521, 8280]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dueling Ring, Al Kharid Duel Arena</div>'}, 'geometry': {'type': 'Point', 'coordinates': [10576, 7122]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dueling Ring, Fist of Guthix<br><center>Underground</center></div>'}, 'geometry': {'type': 'Point', 'coordinates': [9981, 4365]} } 
 ]

 // ring of slaying
window.ringslInfo = [
 //{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ring of Slaying, Summona in Pollnivneach</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10567, 9344]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ring of Slaying, Summona in Pollnivneach</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10968,9082]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ring of Slaying, Morytania Slayer Tower</div>'}, 'geometry': {'type': 'Point', 'coordinates': [11509, 4698]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ring of Slaying, Rellekka Slayer Caves</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6365, 4024]} } 
 ]
 
// Explorer's ring 3
 window.exploRingInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Explorers Ring(3), Cabbage Teleport</div>'}, 'geometry': {'type': 'Point',   'coordinates': [8475,6652]} }
 ]
 

 window.karamjaCartsInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pay 200gp to ride cart to Shilo vilage</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6266,7276]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pay 200gp to ride cart to north Brimhaven</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6692,9359]} } 
 ]


  
 window.ringweInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ring of Wealth, Grand Exchange</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9370,5261]} } 
 ]

 window.ssceptInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Stronghold Scepter</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8701,5639]} } 
 ]

 
 
 window.ectoInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ectophial, Ectofuntus</div>'}, 'geometry': {'type': 'Point', 'coordinates': [13352,4776]} } 
 ]

window.digInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Digsite pendant, North of Digsite</div>'}, 'geometry': {'type': 'Point', 'coordinates': [10789, 5418]} } 
 ]

 // glory
window.gloryInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Amulet of Glory, Edgeville</div>'}, 'geometry': {'type': 'Point',   'coordinates': [8743, 5011]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Amulet of Glory, Karamja</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7375, 7601]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Amulet of Glory, Al Kharid</div>'}, 'geometry': {'type': 'Point', 'coordinates': [3292, 3175]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Amulet of Glory, Draynor Village</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8883, 6907]} } 
 ]
  
 // games
window.gamesInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Games Necklace, Clan Wars</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10210, 3442]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Games Necklace, Burthorpe Games Room</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7216, 4458]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Games Necklace, Barbarian Outpost</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4156, 4390]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Games Necklace, Wilderness Volcano</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9486, 3461]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Games Necklace, Corporeal Beast<br><center>(Underground)</center><br><center>Note: No teleport out.</center></div>'}, 'geometry': {'type': 'Point', 'coordinates': [9753, 2680]} } 
  ]  

  
 // games
window.skillsInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Skills Necklace, Fishing Guild</div>'}, 'geometry': {'type': 'Point',   'coordinates': [4879,5856]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Skills Necklace, Cooking Guild</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9199,5437]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Skills Necklace, Crafting Guild</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7497,6668]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Skills Necklace, Mining Guild</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8172,6282]} } 
 ]  
  
  
  
  
  
//spirit trees 
window.spiritInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Spirit Tree, Grand Exchange<br><strong>Teleports to:</strong><br>Tree Gnome Village<br>Tree Gnome Stronghold<br>Battlefield of Khazard</div>'}, 'geometry': {'type': 'Point',   'coordinates': [9536, 4894]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Spirit Tree, Tree Gnome Village<br><strong>Teleports to:</strong><br>Tree Gnome Stronghold<br>Battlefield of Khazard<br>Grand Exchange</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4307, 7672]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Spirit Tree, Tree Gnome Stronghold<br><strong>Teleports to:</strong><br>Tree Gnome Village<br>Battlefield of Khazard<br>Grand Exchange</div>'}, 'geometry': {'type': 'Point', 'coordinates': [3670, 5396]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Spirit Tree. Battlefield of Khazard<br><strong>Teleports to:</strong><br>Tree Gnome Village<br>Tree Gnome Stronghold<br>Grand Exchange</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4437, 6917]} } 
 ]
 
 //boats
 window.boatsInfo = [
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Charter Trader : Catherby<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Brimhaven (480 gp)<br>Port Khazard (1,600 gp)<br>Karamja (480 gp)<br>Port Sarim (1,000 gp)<br>Port Phasmatys (3,250 gp)<br>Mos Le\' Harmless (625 gp)<br><br><strong>Get here from:</strong><br>Port Khazard<br>Port Tyras<br>Port Phasmatys<br>Port Sarim<br>Karamja<br>Brimhaven</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6357, 5650]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">South Ardougne Docks : Captain Barnaby<br><strong>Transport to:</strong><br>Brimhaven (30 gp)<br><strong>Get here from:</strong><br>Brimhaven</div>'}, 'geometry': {'type': 'Point', 'coordinates': [5466, 6803]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Charter Trader : Port Khazard<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Brimhaven (1,600 gp)<br>Catherby (1,000 gp)<br>Karamja (0 gp)<br>Port Sarim (1,280 gp)<br>Mos Le Harmless (325 gp)<br>Port Phasmatys (650 gp)<br><br><strong>Get here from:</strong><br>Catherby<br>Port Tyras<br>Port Phasmatys<br>Port Tyras<br>Port Phasmatys<br>Port Sarim<br>Karamja<br>Brimhaven</div>'}, 'geometry': {'type': 'Point', 'coordinates': [5402, 7858]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Charter Trader : Port Tyras<br><strong>Transport to:</strong><br>Port Khazard (3,200 gp)<br>Brimhaven (3,200 gp)<br>Catherby (3,200 gp)<br>Karamja (3,200 gp)<br>Port Sarim (3,200 gp)<br>Mos Le Harmless (1,600 gp)<br>Port Phasmatys (3,200 gp)<br><strong>Get here from:</strong><br>Port Khazard<br>Port Tyras<br>Port Phasmatys<br>Mos Le Harmless<br>Port Sarim<br>Karamja<br>Brimhaven</div>'}, 'geometry': {'type': 'Point', 'coordinates': [1098, 8020]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Rellekka Western Dock : Jarvald<br><br><strong>Transport to:</strong><br>Waterbirth Island (1,000 gp)<br><br><strong>Get here from:</strong><br>Waterbirth Island</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4981, 3473]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Rellekka Western Dock : Lokar Searunner<br><br><strong>Transport to:</strong><br>Pirates cove (Free)<br><br><strong>Get here from:</strong><br><br>Pirates cove</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4965, 3424]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Rellekka Dock 4 (northern Rellekka village) :<br><strong>Mord Gunnars</strong><br>Jatizso (Free)<br><br><strong>Maria Gunnars</strong><br>Neitiznot (Free)<br><br><br><strong>Get here from:</strong><br>Neitiznot<br>Jatizso</div>'}, 'geometry': {'type': 'Point', 'coordinates': [5127, 3253]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Keldagrim Entrace : Travel boat<br> Not implemented</div>'}, 'geometry': {'type': 'Point', 'coordinates': [5676, 3049]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Oo\'glog <br>Not implemented</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4998, 10179]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dock north of Port Phasmatys<br>Row boat<br> Not implemented</div>'}, 'geometry': {'type': 'Point', 'coordinates': [13553, 4643]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Phasmatys : Charter Trader<br><br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (Free)<br>Brimhaven (3,650 gp)<br>Catherby (3,250 gp)<br>Karamja (1,850 gp)<br>Port Sarim (2,050 gp)<br>Mos Le Harmless (Free)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Brimhaven<br>Catherby<br>Karamja<br>Port Sarim<br>Mos Le Harmless</div>'}, 'geometry': {'type': 'Point', 'coordinates': [13730, 4935]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Phasmatys : Boat number 2<br>Not implemented</div>'}, 'geometry': {'type': 'Point', 'coordinates': [13785, 4983]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Sarim : Monks of Entrana<br><br><strong>Transport to:</strong><br>Entrana (Free)<br><br><strong>Get here from:</strong><br>Entrana<br><strong>Note: Entrana allows no weapons or armour</strong></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8420, 7128]} },
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Sarim : Captain and Crew<br><br><strong>Transport to:</strong><br>Karamja (30 gp)<br><br><strong>Get here from:</strong><br>Karamja Customs Officer</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8282, 7250]} }, 
 {'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Sarim : Squire<br><br> <strong>Transport to:</strong><br>Void Outpost/Pest Control (Free)<br><br><strong>Get here from:</strong><br>Void Outpost/Pest Control</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8362, 7389]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Sarim : Trader Charter<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (1,280 gp)<br>Brimhaven (1,600 gp)<br>Catherby (1,000 gp)<br>Mos Le Harmless (325 gp)<br>Port Phasmatys (650 gp)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard <br>Brimhaven<br>Catherby<br>Mos Le Harmless<br>Port Phasmatys</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8347, 7471]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Karamja : Trader Charter<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (400 gp)<br>Brimhaven (200 gp)<br>Catherby (480 gp)<br>Mos Le Harmless (225 gp)<br>Port Phasmatys (1,850 gp)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Brimhaven<br>Catherby<br>Mos Le Harmless<br>Port Phasmatys</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7676, 7737]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Karamja : Customs Officer<br>Port Sarim (30 gp)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7684, 7843]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Brimhaven : Trader Charter<br><strong>Transport to:</strong><br>Port Tyras (3,200 gp)<br>Port Khazard (400 gp)<br>Catherby (480 gp)<br>Karamja (480 gp)<br>Port Sarim (1,600 gp)<br>Mos Le Harmless (925 gp)<br>Port Phasmatys (3,650 gp)<br><br><strong>Get here from:</strong><br>Port Tyras<br>Port Khazard<br>Catherby<br>Karamja<br>Port Sarim<br>Mos Le Harmless<br>Port Phasmatys</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6106, 7087]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Brimhaven : Customs Officer<br>Ardougne (30 gp)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6204, 7119]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">South West Karamja : Captain Shanks<br><br><strong>Transport to:</strong><br>Port Khazard (43 gp at boat)<br>Port Sarim   (43 gp at boat)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6121, 9411]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pirates Cove : Lokar Searunner<br><strong>Transport to:</strong><br>Relleka</div>'}, 'geometry': {'type': 'Point', 'coordinates': [1668, 2566]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pirates Cove : Captain Bentley<br><strong>Transport to:</strong><br>Lunar Isle</div>'}, 'geometry': {'type': 'Point', 'coordinates': [1756, 2550]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Lunar Isle : Captain Bentley<br><strong>Transport to:</strong><br> Pirate\'s Cove</div>'}, 'geometry': {'type': 'Point', 'coordinates': [1066, 1718]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Western Karamja : Fanellaman Row Boat<br>Not implemented</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6081, 8330]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Waterbirth Island : Jarvald<br><br><strong>Transport to:</strong><br>Rellekka Western Dock</div>'}, 'geometry': {'type': 'Point', 'coordinates': [4399, 2865]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Neitiznot : Maria Gunnars<br><br><strong>Transport to:</strong><br>Rellekka Dock 4 (northern Rellekka village)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [2470, 2686]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Jatizso : Mord Gunnars<br><br><strong>Transport to:</strong><br>Rellekka Dock 4 (northern Rellekka village</div>'}, 'geometry': {'type': 'Point', 'coordinates': [3353, 2678]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Entrana : Monks<br><br><strong>Transport to:</strong><br>Port Sarim</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6697, 6309]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Rellekka : Dock 2, Sailor<br><br><strong>Transport to:</strong><br>Miscellania<br><strong>Not yet implemented</strong></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5030, 3399]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Miscellania : Sailor<br><br><strong>Transport to:</strong><br>Rellekka : Dock 2<br><strong>Not yet implemented</strong></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4642, 2148]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Mos Le Harmless : Charter Trader<br><br><strong>Transport to:</strong><br>Port Tyras (1600 gp)<br>Port Khazard (1025 gp)<br>Brimhaven (725 gp)<br>Catherby (625 gp)<br>Karamja (1025 gp)<br>Port Sarim (325 gp)<br>Port Phasmatys (Free)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [13460, 9582]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Void Knights\' Outpost/Pest Control : Squire<br><strong>Transport to:</strong><br>Port Sarim</div>'}, 'geometry': {'type': 'Point', 'coordinates': [5288, 11661]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Port Sarim : Klarense<br><br><strong>Transport to:</strong><br>Crandor (Only during Dragon Slayer Quest)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8411, 7356]} } 
]

// canoes
window.canoeInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Canoe Station : Lumbridge<br><strong>Transport to:</strong><br><u>Champion\'s Guild</u> : via Log, Dugout, Stable Dugout, Waka<br><u>Barbarian Village</u> : via Dugout, Stable Dugout, Waka<br><u>Edgeville</u> : via Dugout, Stable Dugout, Waka<br><u>Wilderness Pond</u> : via Waka only!</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9993, 7086]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Canoe Station : Champion\'s Guild<br><strong>Transport to:</strong><br><u>Lumbridge</u> : via <br>Log, Dugout, Stable Dugout, Waka<br><u>Barbarian Village</u> : via <br> Log, Dugout, Stable Dugout, Waka<br><u>Edgeville</u> :via <br>Dugout, Stable Dugout, Waka<br><u>Wilderness Pond</u> : via <br>Waka only!</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9679, 6226]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Canoe Station : Barbarian Village<br><strong>Transport to:</strong><br><u>Lumbridge</u> : via <br>Dugout, Stable Dugout, Waka<br><u>Champion\'s Guild</u> : via <br>Log, Dugout, Stable Dugout, Waka <br><u>Edgeville</u> : via Log, Dugout, Stable Dugout, Waka<br><u>Wilderness Pond</u> via<br>Waka only!</div>'}, 'geometry': {'type': 'Point', 'coordinates': [8942, 5695]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Canoe Station : Edgeville<br><strong>Transport to:</strong><br><u>Lumbridge</u> :via<br>Dugout, Stable Dugout, Waka<br><u>Champion\'s Guild</u> : via<br>Dugout, Stable Dugout, Waka<br><u>Barbarian Village</u> : via<br>Log, Dugout, Stable Dugout, Waka<br><u>Wilderness Pond</u> via<br>Waka only!</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9098, 4883]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Canoe Destination : Wilderness Pond<br>Dead End<br>No return trip possible.</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9203, 2567]} } 
 ]

 
window.psceptInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pharaoh\'s Scepter : Jalsavrah<br><center>(inside Pyramid plunder)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [10370,10665]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pharaoh\'s Scepter : Jaleustrophos<br><center>(outside Agility Pyramid)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [10814,10425]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Pharaoh\'s Scepter : Jaldraocht<br><center>(entrance to Desert Pyramid)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [9921,9838]} }
]

 
 
 
window.gliderInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Crash Island :<br>Captain Errdo<br><br><strong>NOT IMPLEMENTED YET</strong><br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7181, 11270]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Gandius (South Eastern Karamja) :<br>Captain Bleemadge<br><br><strong>NOT IMPLEMENTED YET</strong><br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [7824, 9294]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Eastern Karamja Jungle :<br>Captain Errdo<br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)  </div>'}, 'geometry': {'type': 'Point', 'coordinates': [7397, 8571]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Sindarpos (White Wolf Mountain) :<br>Captain Bleemadge<br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [6821, 4953]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Lemanto Andra (Dig site) : Dead End<br></div>'}, 'geometry': {'type': 'Point', 'coordinates': [10657, 5522]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Kar-Hewo (Al Kharid) :<br>Captain Dalbur<br><br><strong>Transport to:</strong><br>Ta Quir Priw (Tree Gnome Stronghold)<br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)</div>'}, 'geometry': {'type': 'Point', 'coordinates': [10317, 7293]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Lemantolly Undri (Feldip Hills)<br><center>Dead End</center></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4331, 9250]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gnome glider: Ta Quir Priw (Tree Gnome Stronghold) :<br>Captain Errdo<br><br><strong>Transport to:</strong><br>Lemantolly Undri (Feldip Hills)<br>Gandius (Eastern Karamja)<br>Sindarpos (White Wolf Mountain)<br>Lemanto Andra (Dig site)<br>Kar-Hewo (Al Kharid)  </div>'}, 'geometry': {'type': 'Point', 'coordinates': [3675, 4938]} },
]

window.mmagicInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="5"><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Lumbridge Level 0<br>(Home Teleport)</td></tr><tr><td rowspan="2">Lumbridge Level 31<br>1<img src="./images/rune-earth.gif"> 3<img src="./images/rune-air.gif"> 1<img src="./images/rune-law.gif"></td></tr><tr></tr><tr><td rowspan="2">Tele Other Lumbridge Level 74<br>1<img src="./images/rune-soul.gif"> 1<img src="./images/rune-law.gif"> 1<img src="./images/rune-earth.gif"></td></tr><tr></tr></table></body>'}, 'geometry': {'type': 'Point', 'coordinates': [9835, 7251]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="5"><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td rowspan="2">Varrock Level 25<br>1<img src="./images/rune-fire.gif"> 3<img src="./images/rune-air.gif"> 1<img src="./images/rune-law.gif"></td></tr><tr></tr><tr></tr><tr></tr><tr><td><i>Note alternate location in Grand Exchange</i></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [9760, 5549]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="5"><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td rowspan="2">Varrock Level 25<br>1<img src="./images/rune-fire.gif"> 3<img src="./images/rune-air.gif"> 1<img src="./images/rune-law.gif"></td></tr><tr></tr><tr></tr><tr></tr><tr><td><i>Note alternate location in Varrock Square</i></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [9378, 5130]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Falador Level 37<br>1<img src="./images/rune-water.gif"> 3<img src="./images/rune-air.gif"> 1<img src="./images/rune-law.gif"></td></tr><tr><td>Tele Other Falador Level 82<br>1<img src="./images/rune-soul.gif"> 1<img src="./images/rune-water.gif"> 1<img src="./images/rune-law.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7757, 5956]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Camelot Level 45<br>5<img src="./images/rune-air.gif"> 1 <img src="./images/rune-law.gif"></td></tr><tr><td>Tele Other Camelot Level 90<br>2<img src="./images/rune-soul.gif"> 1<img src="./images/rune-law.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6077, 5142]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Ardougne Level 51<br>2<img src="./images/rune-water.gif"> 2 <img src="./images/rune-law.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5304, 6592]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Watchtower Level 58<br>2<img src="./images/rune-earth.gif"> 2 <img src="./images/rune-law.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4377, 8107]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>    Trollheim Level 61<br>2<img src="./images/rune-fire.gif"> 2 <img src="./images/rune-law.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7164, 3522]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Ape Atoll Level 64<br>2<img src="./images/rune-fire.gif"> 2<img src="./images/rune-water.gif">2 <img src="./images/rune-law.gif"> 1<img src="./images/banana.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6095, 10844]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Player Owned Home<br>Level 40<br>Rimmington<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Taverly, Pollnivneach, Rellekka, Brimhaven, Yanille</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7647, 7201]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Player Owned Home<br>Level 40<br>Taverly<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Pollnivneach, Rellekka, Brimhaven, Yanille</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7162, 5246]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Player Owned Home<br>Level 40<br>Pollnivneach<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Rellekka, Brimhaven, Yanille</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [10789, 9013]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Player Owned Home<br>Level 40<br>Rellekka<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Pollnivneach, Brimhaven, Yanille</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5366, 3903]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Player Owned Home<br>Level 40<br>Brimhaven<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Pollnivneach, Rellekka, Yanille</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6063, 7572]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/mmagic-info.png" width="60" height="60"></center><br><center><strong>Modern Magics</strong></center></td><td>Player Owned Home<br>Level 40<br>Yanille<br>1<img src="./images/rune-law.gif"> 3<img src="./images/rune-air.gif">  1<img src="./images/rune-earth.gif"><br>Note: alternates of Rimmington, Taverly, Pollnivneach, Rellekka, Brimhaven</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4348, 8231]} }
]

window.lmagicInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Lunar Isle Level 0 Home</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [750, 1601]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Ourania lvl 71<br> 2<img src="./images/rune-astral.gif"> 1 <img src="./images/rune-law.gif"> 6 <img src="./images/rune-earth.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [3743, 7015]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Moonclan Level 69<br>2<img src="./images/rune-astral.gif"> 1<img src="./images/rune-law.gif"> 2<img src="./images/rune-earth.gif"></td></tr><tr><td>Tele Group Moonclan lvl 70<br>2<img src="./images/rune-astral.gif"> 1<img src="./images/rune-law.gif"> 4<img src="./images/rune-earth.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [848, 1595]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Waterbirth lvl 72<br> 2<img src="./images/rune-astral.gif"> 1 <img src="./images/rune-law.gif"> 1 <img src="./images/rune-water.gif"></td></tr><tr><td>Tele Group Waterbirth lvl 73<br>2<img src="./images/rune-astral.gif"> 1<img src="./images/rune-law.gif"> 5<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4208, 3019]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Barbarian lvl 75<br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 3<img src="./images/rune-fire.gif"></td></tr><tr><td>Tele Group Barbarian lvl 76<br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 6<img src="./images/rune-fire.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4350, 4381]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Khazard lvl lvl 78 <br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 4<img src="./images/rune-water.gif"></td></tr><tr><td>Tele Group Khazard lvl 79<br>2<img src="./images/rune-astral.gif"> 2<img src="./images/rune-law.gif"> 8<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [5255, 7748]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Fishing Guild lvl 85<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 10<img src="./images/rune-water.gif"></td></tr><tr><td>Tele Group Fishing Guild lvl 86<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 14<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [4897, 5848]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Catherby lvl 87<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 10<img src="./images/rune-water.gif"></td></tr><tr><td>Tele Group Catherby lvl 88<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 15<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [6451, 5510]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table><tr><td rowspan="2"><center><img src="./images/lmagic-info.png" width="60" height="60"></center><br><center><strong>Lunar Magics</strong></center></td><td>Ice Plateau lvl 89<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 8<img src="./images/rune-water.gif"></td></tr><tr><td>Tele Group Ice Plateau lvl 90<br>3<img src="./images/rune-astral.gif"> 3<img src="./images/rune-law.gif"> 16<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7785, 1914]} },   
]                                           

window.amagicInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Edgeville lvl 0 Home</td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8724, 5009]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Paddewwa  lvl 54<br>2<img src="./images/rune-law.gif">  1<img src="./images/rune-fire.gif">  1<img src="./images/rune-air.gif"><br><center>(Underground, Edgeville Dungeon)</center></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8822, 5209]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Senntisten  lvl 60<br>2<img src="./images/rune-law.gif">  1<img src="./images/rune-soul.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [10625, 6275]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Kharyrll  lvl 66<br>2<img src="./images/rune-law.gif">  1<img src="./images/rune-blood.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [12025, 5188]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Lassar  lvl 72<br>2<img src="./images/rune-law.gif">  4<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [8056, 5208]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Dareeyak  lvl 78<br>2<img src="./images/rune-law.gif">  3<img src="./images/rune-fire.gif">  2<img src="./images/rune-air.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7752, 3361]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Carrallangar  lvl 84<br>2<img src="./images/rune-law.gif">  2<img src="./images/rune-soul.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [9364, 3629]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Annakarl  lvl 90<br>2<img src="./images/rune-law.gif">  2<img src="./images/rune-blood.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [10356, 1854]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg"><head><style>table, td {border: 1px solid black; border-collapse: collapse; padding: 6px;}</style></head><body style = "text-align:center"><table  width="100%"><tr><td><center><img src="./images/amagic-info.png" width="60" height="60"></center><br><center><strong>Ancient Magics</strong></center></td><td>Ghorrock  lvl 96<br>2<img src="./images/rune-law.gif">  2<img src="./images/rune-water.gif"></td></tr></table></body></div>'}, 'geometry': {'type': 'Point', 'coordinates': [7806, 1918]} },
]                                           

window.carpInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet: Shantay Pass<br><strong>Transport to:</strong><ul><li>Uzer 200 gp<li>Bedabin Camp 200 gp<li>North Pollnivneach 200 gp</ul></div>'}, 'geometry': {'type': 'Point', 'coordinates': [10560, 8154]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet : Bedabin Camp<br>Transport to:<br>Return to Shantay</div>'}, 'geometry': {'type': 'Point', 'coordinates': [9524,8682] } } ,
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet : North Pollnivneach<br>Transport to:<br>Return to Shantay</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10884, 9017] } } , 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet : South Pollnivneach<br>Transport (200 gp) to:<br>Nardah<br>Sophanem</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10838, 9486]  } } ,
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet : Uzer<br>Transport to:<br>Return to Shantay</div>'}, 'geometry': {'type': 'Point',   'coordinates': [11834, 8127] } } ,
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet : Nardah<br>Transport to:<br>Return to South Pollnivneach</div>'}, 'geometry': {'type': 'Point',   'coordinates': [11274, 9703]  } } ,
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Magic Carpet : Sophanem<br>Transport to:<br>Return to South Pollnivneach</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10375, 10530]  } } 
]
    
window.minecInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Grand Exchange<br>Gnome Mining Cart<br><strong>Transportation to:</strong><br>Keldagrim<br>(Only available after previously visiting the site.)</div>'}, 'geometry': {'type': 'Point',   'coordinates': [9192, 4913]}},
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Keldagrim<br>Gnome Mining Cart<br><strong>Transportation to:</strong><br>Grand Exchange<br>White Wolf Mountain<br>Ice Mountain<br>(Underground)</div>'}, 'geometry': {'type': 'Point',   'coordinates': [5870, 3290]}},
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">White Wolf Mountain<br>Gnome Mining Cart<br><strong>Transportation to:</strong><br>Keldagrim (100 gp)<br>(Underground)</div>'}, 'geometry': {'type': 'Point',   'coordinates': [7040, 5188]}},  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ice Mountain<br>Gnome Mining Cart<br><strong>Transportation to:</strong><br>Keldagrim (150 gp)<br>(Underground)</div>'}, 'geometry': {'type': 'Point',   'coordinates': [8117,5410]}},  
]

window.essminInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Essence Mine Teleport<br>Varrock : Aubrey</div>'}, 'geometry': {'type': 'Point',   'coordinates': [10082, 5782]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Essence Mine Teleport<br>Wizards\' Tower : Sedridor <br>(Underground)</div>'}, 'geometry': {'type': 'Point',   'coordinates': [8867, 7709]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Essence Mine Teleport<br>Ardougne : Cromperty</div>'}, 'geometry': {'type': 'Point',   'coordinates': [5464, 6393]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Essence Mine Teleport<br>Yanille : Distentor <br>(Lvl 66 Magic required)</div>'}, 'geometry': {'type': 'Point',   'coordinates': [4712, 8341]} },
]

window.combbInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Combat Bracelet<br>Champion\'s Guild</div>'}, 'geometry': {'type': 'Point',   'coordinates': [9588,6071]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Combat Bracelet<br>Monastery</div>'}, 'geometry': {'type': 'Point',   'coordinates': [8459,5199]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Combat Bracelet<br>Ranging Guild</div>'}, 'geometry': {'type': 'Point',   'coordinates': [5266,5467]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Combat Bracelet<br>Warrior\'s Guild</div>'}, 'geometry': {'type': 'Point',   'coordinates': [7058,4597]} }
]


window.dungeonInfo = [
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ogre Enclave                        <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 100]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Jiggig                              <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 150]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Lighthouse                          <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 200]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Underground Pass                    <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 250]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Temple of Light                     <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 300]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Kharazi Dungeon                     <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 350]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Experiment Cave                     <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 400]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Meiyerditch Dungeon                 <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 450]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Temple of Marimbo Dungeon           <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 500]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Evil Chicken\'s Lair                <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 550]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Grand Tree Tunnels                  <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 600]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ice Troll Caves                     <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 650]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Lunar Isle Mine                     <br><center>(Not Yet implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 700]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Mahjarrat Ritual Site Cavern        <br><center>(Not yet implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 750]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Poison Waste Slayer Dungeon         <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 800]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Underwater Tunnel                   <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 850]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Gu\'Tanoth                          <br><center>(Not Yet Implemented)</center></div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 900]} },

{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Asgarnian Ice Caves<br><a href="./dungeons/asgarnia/asgarnia-icedungeon.html">Dungeon Map </a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [8101,7804]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Taverley Dungeon<br><a href="./images/TaverleyDungeon-Woah-WTM.png">Dungeon Map</a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [7103,5782]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Falador Mole Lair                   </div>'}, 'geometry': {'type': 'Point',   'coordinates': [7954,5954]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Brine Rat Cavern                    </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 1100]} },

{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Mining Guild/Dwarven Mine<br><a href="./dungeons/dwarven/dwarvenguild.html">Dungeon Map </a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [8222,6261]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dwarven Mine/Mining Guild<br>Falador entrance<br><a href="./dungeons/dwarven/dwarvenguild.html">Dungeon Map </a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [8525,5963]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dwarven Mine/Mining Guild<br>Ice Mountain entrance<br><a href="./dungeons/dwarven/dwarvenguild.html">Dungeon Map </a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [8190,5373]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Fremennik Slayer Dungeon            </div>'}, 'geometry': {'type': 'Point',   'coordinates': [6392,4030]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Keldagrim                           </div>'}, 'geometry': {'type': 'Point',   'coordinates': [5867,3235]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Temple of Ikov                      </div>'}, 'geometry': {'type': 'Point',   'coordinates': [5429,5740]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ourania Cave                        </div>'}, 'geometry': {'type': 'Point',   'coordinates': [3626,7114]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Brimhaven Dungeon<br><a href="./dungeons/brimhaven/brimhaven-map.html">Dungeon Map </a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [5965,7783]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Karamja and Crandor Dungeon<br>Karamja entrance</div>'}, 'geometry': {'type': 'Point',   'coordinates': [6879,7658]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Karamja and Crandor Dungeon<br>Crandor entrance</div>'}, 'geometry': {'type': 'Point',   'coordinates': [6693,6942]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Jogre Dungeon                       </div>'}, 'geometry': {'type': 'Point',   'coordinates': [6611,8063]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Kalphite Hive                       </div>'}, 'geometry': {'type': 'Point',   'coordinates': [11038,7949]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Desert Slayer Dungeon               </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 1650]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Smoke Dungeon                       </div>'}, 'geometry': {'type': 'Point',   'coordinates': [10546,9329]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Edgeville Dungeon<br><a href="./images/varrock-edgeville-dungeon-WTM.png">Dungeon map</a>                   </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8804,5213]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dorgesh-Kaan South Dungeon          </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 1700]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Lumbridge Swamp Caves<br><a href="./dungeons/lumbridgeswamp/lumbridgeswamp.html">Dungeon Map </a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [9405,7624]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">H.A.M. Dungeon                      </div>'}, 'geometry': {'type': 'Point',   'coordinates': [9377,6984]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Draynor Sewers                      </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8987,7040]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Draynor Sewers<br><a href="./dungeons/draynor/draynorsewers-map.html">Dungeon Map</a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [8715,6820]} },

{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Stronghold of Security              </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8684,5600]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Stronghold of Player Safety         </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8643,5308]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Varrock Sewers<br><a href="./images/varrock-edgeville-dungeon-WTM.png">Dungeon Map</a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [9955,5303]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Abandoned Mine                      </div>'}, 'geometry': {'type': 'Point',   'coordinates': [11706,7037]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Barrows                             </div>'}, 'geometry': {'type': 'Point',   'coordinates': [12616,6693]} },

//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Shade Catacombs                     </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 2350]} },

{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Deep Wilderness Dungeon             </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8400,1515]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">King Black Dragon Lair              </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8171,2127]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Lava Maze Dungeon                   </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8610,2067]} },

// for below, confirm all chaos tunnel entrances
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Tunnels                       </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 2550]} },  
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Tunnels Entrance I   <br><a href="./dungeons/chaostunnels/chaostunnels-map.html">Dungeon Map</a><br><b>Warning</b><br><i>Some monsters within require use of slayer helmet or facemask!</i>  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8499,4547]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Tunnels Entrance II  <br><a href="./dungeons/chaostunnels/chaostunnels-map.html">Dungeon Map</a><br><b>Warning</b><br><i>Some monsters within require use of slayer helmet or facemask!</i>  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [9005,4377]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Tunnels Entrance III <br><a href="./dungeons/chaostunnels/chaostunnels-map.html">Dungeon Map</a><br><b>Warning</b><br><i>Some monsters within require use of slayer helmet or facemask!</i>  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [9370,4456]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Tunnels Entrance IV  <br><a href="./dungeons/chaostunnels/chaostunnels-map.html">Dungeon Map</a><br><b>Warning</b><br><i>Some monsters within require use of slayer helmet or facemask!</i>  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [8905,3825]} }, 
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Tunnels Entrance V   <br><a href="./dungeons/chaostunnels/chaostunnels-map.html">Dungeon Map</a><br><b>Warning</b><br><i>Some monsters within require use of slayer helmet or facemask!</i>  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [9352,3997]} }, 

//<br><b>Warning</b><br>Some monsters require<br>slayer helmet or facemask!

{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Chaos Temple Dungeon                </div>'}, 'geometry': {'type': 'Point',   'coordinates': [9969,4118]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ape Atoll Dungeon                   </div>'}, 'geometry': {'type': 'Point',   'coordinates': [6116,11432]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Dorgesh-Kaan South Dungeon          </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 2600]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Entrana Dungeon<br><a href="./dungeons/entrana/EntranaDungeon-Woah-WTM-01.png">Dungeon Map</a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [6580,5986]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">God Wars Dungeon                    </div>'}, 'geometry': {'type': 'Point',   'coordinates': [7348,2967]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Jatizso Mines                       </div>'}, 'geometry': {'type': 'Point',   'coordinates': [3168,2420]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Kalphite lair                       </div>'}, 'geometry': {'type': 'Point',   'coordinates': [9873,8143]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Miscellania & Etceteria Dungeon<br>Miscellania entrance </div>'}, 'geometry': {'type': 'Point',   'coordinates': [4062,2150]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Miscellania & Etceteria Dungeon<br>Etceteria entrance </div>'}, 'geometry': {'type': 'Point',   'coordinates': [4961,2000]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Mos Le\'Harmless Caves<br><a href="./dungeons/mosleharmless/mosleharmless-dungeon-WTM-woah.png">Dungeon Map</a></div>'}, 'geometry': {'type': 'Point',   'coordinates': [14105,9247]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Waterbirth Dungeon - West entrance  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [4168,3010]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Waterbirth Dungeon - East entrance  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [4339,3001]} },
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Goblin Cave                         </div>'}, 'geometry': {'type': 'Point',   'coordinates': [4983,5840]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Fremennik Slayer Dungeon            </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 3150]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Mountain Camp cave                  </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 3200]} },
//{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Taverley Slayer Dungeon             </div>'}, 'geometry': {'type': 'Point',   'coordinates': [1, 3250]}}

/*    
Additions?

Rogue's Guild
Heroe's Guild Dungeon
Troll Stronghold
Mining Guild
Sophanem Bank
Desert Mining Camp Mine
Black Arm Gang hideout
Brimhaven Agility Dungeon
Fist of Guthix
Salve Temple (Priest in Peril)
Morytania Swamp Tunnel
Zanaris Swamp Entrance
Runecrafting Guild Portal at Wizard's Tower
Draynor Dungeon above market
Count Draynor's basement
Varrock West Bank basement
Lumbridge Castle  under kitchen
Lumbridge Guides' house basement
Shilo village mine
Cairn Island cave
Ardougne/Witchhaven dungeon
Legends Guild dungeon
Seer's village Mind mine
Vampire's lair east of Combat Training Camp
West Ardougne Sewers
Dungeons East and South of Clocktower
Tree Gnome Village dungeon
Sinister Key dungeon
Observatory Dungeon
Underground Pass
Gnome Stronghold dungeon east of Terrorbirds
Piscatoris cavern
Arandar Cave
Mos Le'Harmless Tree resources cave entrances
Digsite riff
Dwarven Tunnels under White Wolf Mountain

*/
]                                                                                                                                             
                                                                                                                                              
                                                                                                                                              
/*                                                                                                                                            
window.ringweInfo = [                                                                                                                         
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Ring of Wealth : Grand Exchange</div>'}, 'geometry': {'type': 'Point',   'coordinates': [9359, 5254]} },
]

window.ringslInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Example Item Name 1, Location, Data</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3000, 3500]} },
]

window.balloonInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Example Item Name 1, Location, Data</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3000, 3600]} },
]

window.psceptInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Example Item Name 1, Location, Data</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3000, 3700]} },
]

window.ssceptInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Example Item Name 1, Location, Data</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3000, 3800]} },
]

window.ectoInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Example Item Name 1, Location, Data</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3000, 3900]} },
]

window.boatyInfo = [
{'type': 'Feature', 'properties': {'name': '<div id="borderimg">Example Item Name 1, Location, Data</div>'}, 'geometry': {'type': 'Point',   'coordinates': [3000, 3100]} },
]
*/









/* NOTES
    
Note: Entrana Teleports to Wilderness at  9732, 2823 north west of Ruins Level 31
*/
    
  // polygon
  /*
  window.polygon = [{
    x: 1528.5,
    y: 1524
  }, {
    x: 1532,
    y: 1571
  }, {
    x: 1559.5,
    y: 1620.5
  }, {
    x: 1541,
    y: 1612
  }, {
    x: 1562.5,
    y: 1634.5
  }, {
    x: 1548.5,
    y: 1655
  }, {
    x: 1567.5,
    y: 1651
  }, {
    x: 1598.5,
    y: 1666.5
  }, {
    x: 1576,
    y: 1713
  }, {
    x: 1562,
    y: 1718
  }, {
    x: 1584,
    y: 1722.5
  }, {
    x: 1586.5,
    y: 1736.5
  }, {
    x: 1550.5,
    y: 1750.5
  }, {
    x: 1505,
    y: 1743.5
  }, {
    x: 1505.5,
    y: 1752
  }, {
    x: 1493.5,
    y: 1754.5
  }, {
    x: 1480,
    y: 1745.5
  }, {
    x: 1462,
    y: 1742
  }, {
    x: 1448.5,
    y: 1733
  }, {
    x: 1431.5,
    y: 1737.5
  }, {
    x: 1421,
    y: 1755
  }, {
    x: 1403,
    y: 1740.5
  }, {
    x: 1377.5,
    y: 1741.5
  }, {
    x: 1370.5,
    y: 1751
  }, {
    x: 1349.5,
    y: 1733
  }, {
    x: 1367.5,
    y: 1725
  }, {
    x: 1400,
    y: 1715
  }, {
    x: 1417.5,
    y: 1704.5
  }, {
    x: 1445,
    y: 1709
  }, {
    x: 1463,
    y: 1696
  }, {
    x: 1436.5,
    y: 1703
  }, {
    x: 1427,
    y: 1690
  }, {
    x: 1415,
    y: 1679
  }, {
    x: 1397.5,
    y: 1683
  }, {
    x: 1386.5,
    y: 1667.5
  }, {
    x: 1424.5,
    y: 1655
  }, {
    x: 1428,
    y: 1632
  }, {
    x: 1406.5,
    y: 1636
  }, {
    x: 1435.5,
    y: 1613
  }, {
    x: 1457,
    y: 1614
  }, {
    x: 1467,
    y: 1593.5
  }, {
    x: 1457.5,
    y: 1572.5
  }, {
    x: 1467.5,
    y: 1551
  }, {
    x: 1528.5,
    y: 1524
  }]
*/  
}(window))
