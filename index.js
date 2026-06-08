/* global L */
;(function (window) {
  function init (mapid) {
    var minZoom = 2
    var maxZoom = 6
    var img = [
      15104,
      12800

    ]

    // create the map
    var map = L.map(mapid, {
      minZoom: minZoom,
      maxZoom: maxZoom
    })

    // assign map and image dimensions
    var rc = new L.RasterCoords(map, img)

    // expose map and rasterCoords globally for cross-frame communication (fairy ring pop-over)
    window.mapInstance = map
    window.mapInstance.rasterCoords = rc

    // set the view on a marker ...
    map.setView(rc.unproject([9815,7258]), 5)

    // add layer control object
    L.control.layers({}, {
     // 'Polygon': layerPolygon(map, rc),
     // 'Countries': layerCountries(map, rc),
     //'Bounds': layerBounds(map, rc, img),// comment this after all coordinates established!
//Locations
     
     'Fairy Rings': layerFring(map, rc),   
     'Spirit Trees': layerSpirit(map, rc),
     'Essence mining': layerEssmin(map, rc),
     'Dungeons': layerDungeon(map, rc),  
                     
//Convenyances                     
      'Boats': layerBoats(map, rc),               
      'Canoe Stations': layerCanoe(map, rc),
      'Gnome Gliders': layerGlider(map, rc),  
      'Magic Carpets': layerCarp(map, rc),
      'Mine Carts': layerMinec(map, rc),
      'Karamja Carts': layerKcarts(map, rc),
      
//Spells                     
      'Modern Magics': layerMmagic(map, rc),
      'Lunar Magics': layerLmagic(map, rc),
      'Ancient Magics': layerAmagic(map, rc),               

//Enchanted items                    
      'Dueling Ring': layerDuel(map, rc),
      'Glory Amulet': layerGlory(map, rc), 
      'Games Necklace': layerGames(map, rc),  
      'Skills Necklace': layerSkills(map, rc),                       
      'Combat Bracelet': layerCombb(map, rc),                     
      'Ring of Wealth': layerRingwe(map, rc),
      'Ring of Slaying': layerRingsl(map, rc),
      'Pharaoh\'s Scepter': layerPscept(map, rc),
      'Stronghold Scepter': layerSscept(map, rc),
      'Ectophial': layerEcto(map, rc),               
      'Digsite Pendant': layerDig(map, rc),     
      'Explorer(3) Ring': layerExploRing(map, rc), 
      
//    'Info': layerGeo(map, rc),                     
//    'Balloons': layerBalloon(map, rc),
//    'Small Boats': layerBoaty(map, rc),
//    'Circles': layerCircles(map, rc)
    }).addTo(map)

    // the tile layer containing the image generated with gdal2tiles --leaflet ...
    L.tileLayer('./tiles/{z}/{x}/{y}.png', {
      noWrap: true,
      attribution: '<a href="https://2009scape.org/site/terms/terms.html">Data &copy; 2009scape project and contributors</a>'
    }).addTo(map)
  }



  /* BEG Explorer(3) Ring */
function layerExploRing (map, rc) {
    var imgDir = 'images/'
    var exploRingMarker = L.icon({
      iconUrl: imgDir + 'Explorer-Ring-85x85.png',
      iconRetinaUrl: imgDir + 'Explorer-Ring-85x85.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerExploRing = L.geoJson(window.exploRingInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: exploRingMarker
        })
      }
    })
    map.addLayer(layerExploRing)
    return layerExploRing
  }
/* FIN Explorere(3) Ring */
  
  /* BEG layer pharaoh's scepter */
function layerPscept (map, rc) {
    var imgDir = 'images/'
    var psceptMarker = L.icon({
      iconUrl: imgDir + 'LOC-pharaoh-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-pharaoh-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerPscept = L.geoJson(window.psceptInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: psceptMarker
        })
      }
    })
    map.addLayer(layerPscept)
    return layerPscept
  }
/* FIN layer pharaoh's scepter */
  
/* BEG layer stronghold scepter */
function layerSscept (map, rc) {
    var imgDir = 'images/'
    var ssceptMarker = L.icon({
      iconUrl: imgDir + 'LOC-stronghold-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-stronghold-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerSscept = L.geoJson(window.ssceptInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: ssceptMarker
        })
      }
    })
    map.addLayer(layerSscept)
    return layerSscept
  }
/* FIN layer stronghold scepter */  
  
 /**
   * layer with markers
   */
  function layerBounds (map, rc, img) {
    // set marker at the image bound edges
    var layerBounds = L.layerGroup([
      L.marker(rc.unproject([0, 0])).bindPopup('[0,0]'),
      L.marker(rc.unproject(img)).bindPopup(JSON.stringify(img))
    ])
    map.addLayer(layerBounds)

    // set markers on click events in the map
    map.on('click', function (event) {
      // to obtain raster coordinates from the map use `project`
      var coord = rc.project(event.latlng)
      // to set a marker, ... in raster coordinates in the map use `unproject`
      var marker = L.marker(rc.unproject(coord))
        .addTo(layerBounds)
      marker.bindPopup('[' + Math.floor(coord.x) + ',' + Math.floor(coord.y) + ']')
        .openPopup()
    })

    return layerBounds
  }

  /**
   * layer using geoJson data for countries adding a circle marker
   */
  function layerCountries (map, rc) {
    var layerCountries = L.geoJson(window.countries, {
      // correctly map the geojson coordinates on the image
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
          radius: 8,
          fillColor: '#800080',
          color: '#D107D1',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        })
      }
    })
    map.addLayer(layerCountries)
    return layerCountries
  }

  /**
   * layer with red markers
   */
  function layerGeo (map, rc) {
    var imgDir = 'images/'
    var redMarker = L.icon({
      iconUrl: imgDir + 'marker-icon-red.png',
      iconRetinaUrl: imgDir + 'marker-icon-red-2x.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerGeo = L.geoJson(window.geoInfo, {
      // correctly map the geojson coordinates on the image
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: redMarker
        })
      }
    })
    map.addLayer(layerGeo)
    return layerGeo
  }
/**
  * BEG layer Fairy Rings
 */ 

function layerFring (map, rc) {
    var imgDir = 'images/'
    var fringMarker = L.icon({
      iconUrl: imgDir + 'fring-60.gif',
      iconRetinaUrl: imgDir + 'fring-60.gif',
      iconSize: [30, 30],
      iconAnchor: [14, 15],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerFring = L.geoJson(window.fringInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: fringMarker
        })
      }
    })
    map.addLayer(layerFring)
    return layerFring
  }
/* FIN layer Fairy Rings  */


/* BEG NESTED LAYER GROUP EXPERIMENT */




/* BEG layer Karamja Carts */
function layerKcarts (map, rc) {
    var imgDir = 'images/'
    var psceptMarker = L.icon({
      iconUrl: imgDir + 'Cart-85x85.png',
      iconRetinaUrl: imgDir + 'Cart-85x85.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerKcarts = L.geoJson(window.karamjaCartsInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: psceptMarker
        })
      }
    })
    map.addLayer(layerKcarts)
    return layerKcarts
  }
/* FIN layer Karamja Carts */



  
/* BEG layer Dueling Ring */
function layerDuel (map, rc) {
    var imgDir = 'images/'
    var duelMarker = L.icon({
      iconUrl: imgDir + 'RING-dueling-85x85.png',
      iconRetinaUrl: imgDir + 'RING-dueling-85x85.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [40, 40],
      shadowAnchor: [20, 20]
    })
    var layerDuel = L.geoJson(window.duelInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: duelMarker
        })
      }
    })
    map.addLayer(layerDuel)
    return layerDuel
}
/* FIN layer dueling ring */

/* BEG layer Ring of Slaying */
function layerRingsl (map, rc) {
    var imgDir = 'images/'
    var RingslMarker = L.icon({
      iconUrl: imgDir + 'RING-slaying-85x85.png',
      iconRetinaUrl: imgDir + 'RING-slaying-85x85.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [40, 40],
      shadowAnchor: [20, 20]
    })
    var layerRingsl = L.geoJson(window.ringslInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: RingslMarker
        })
      }
    })
    map.addLayer(layerRingsl)
    return layerRingsl
}
/* FIN layer Ring of Slaying */

/* BEG layer Ring of Wealth */
function layerRingwe (map, rc) {
    var imgDir = 'images/'
    var ringweMarker = L.icon({
      iconUrl: imgDir + 'RING-wealth-85x85.png',
      iconRetinaUrl: imgDir + 'RING-wealth-85x85.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [40, 40],
      shadowAnchor: [20, 20]
    })
    var layerRingwe = L.geoJson(window.ringweInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: ringweMarker
        })
      }
    })
    map.addLayer(layerRingwe)
    return layerRingwe
}
/* FIN layer Ring of Wealth */

/* BEG layer games necklace */
function layerGames (map, rc) {
    var imgDir = 'images/'
    var gamesMarker = L.icon({
      iconUrl: imgDir + 'NECK-games-120x120.png',
      iconRetinaUrl: imgDir + 'NECK-games-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerGames = L.geoJson(window.gamesInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: gamesMarker
        })
      }
    })
    map.addLayer(layerGames)
    return layerGames
  }
/* FIN layer games necklace */

/* BEG layer digsite pendant */
function layerDig (map, rc) {
    var imgDir = 'images/'
    var digMarker = L.icon({
      iconUrl: imgDir + 'NECK-digsite-120x120.png',
      iconRetinaUrl: imgDir + 'NECK-digsite-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerDig = L.geoJson(window.digInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: digMarker
        })
      }
    })
    map.addLayer(layerDig)
    return layerDig
  }
/* FIN layer digsite pendant */

/* BEG layer spirit trees */
function layerSpirit (map, rc) {
    var imgDir = 'images/'
    var spiritMarker = L.icon({
      iconUrl: imgDir + 'LOC-spirittree-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-spirittree-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerSpirit = L.geoJson(window.spiritInfo, {
      coordsToLatLng: function (coords) {
      return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: spiritMarker
        })
      }
    })
    map.addLayer(layerSpirit)
    return layerSpirit
  }
/* FIN layer spirit trees */

/* BEG layer boats */
function layerBoats (map, rc) {
    var imgDir = 'images/'
    var boatsMarker = L.icon({
      iconUrl: imgDir + 'boat-60.gif',
      iconRetinaUrl: imgDir + 'boat-60.gif',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      //iconSize: [30, 30],
      //iconAnchor: [18, 18],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerBoats = L.geoJson(window.boatsInfo, {
        coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: boatsMarker
        })
      }
    })
    map.addLayer(layerBoats)
    return layerBoats
  }
/* FIN layer boats  */

/* BEG layer canoe */
function layerCanoe (map, rc) {
    var imgDir = 'images/'
    var canoeMarker = L.icon({
      iconUrl: imgDir + 'LOC-canoe-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-canoe-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerCanoe = L.geoJson(window.canoeInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: canoeMarker
        })
      }
    })
    map.addLayer(layerCanoe)
    return layerCanoe
  }
/* FIN layer canoe */

/* BEG layer glider */
function layerGlider (map, rc) {
    var imgDir = 'images/'
    var gliderMarker = L.icon({
      iconUrl: imgDir + 'glider-30.gif',
      iconRetinaUrl: imgDir + 'glider-30.gif',
      iconSize: [30, 30],
      iconAnchor: [14, 15],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerGlider = L.geoJson(window.gliderInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: gliderMarker
        })
      }
    })
    map.addLayer(layerGlider)
    return layerGlider
  }
/* FIN layer glider */

/* BEG layer mmagic */
function layerMmagic (map, rc) {
    var imgDir = 'images/'
    var mmagicMarker = L.icon({
      iconUrl: imgDir + 'mmagics-58x94.png',
      iconRetinaUrl: imgDir + 'mmagics-58x94.png',
      iconSize: [29, 49],
      iconAnchor: [12, 41],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerMmagic = L.geoJson(window.mmagicInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: mmagicMarker
        })
      }
    })
    map.addLayer(layerMmagic)
    return layerMmagic
  }
/* FIN layer mmagic */

/* BEG layer lmagic */
function layerLmagic (map, rc) {
    var imgDir = 'images/'
    var lmagicMarker = L.icon({
      iconUrl: imgDir + 'lmagics-58x94.png',
      iconRetinaUrl: imgDir + 'lmagics-58x94.png',
      iconSize: [29, 49],
      iconAnchor: [12, 41],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerLmagic = L.geoJson(window.lmagicInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: lmagicMarker
        })
      }
    })
    map.addLayer(layerLmagic)
    return layerLmagic
  }
/* FIN layer lmagic */

/* BEG layer amagic */
function layerAmagic (map, rc) {
    var imgDir = 'images/'
    var amagicMarker = L.icon({
      iconUrl: imgDir + 'amagics-58x94.png',
      iconRetinaUrl: imgDir + 'amagics-58x94.png',
      iconSize: [29, 49],
      iconAnchor: [12, 41],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + 'marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [14, 41]
    })
    var layerAmagic = L.geoJson(window.amagicInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: amagicMarker
        })
      }
    })
    map.addLayer(layerAmagic)
    return layerAmagic
  }
/* FIN layer amagic */

/* BEG layer glory */
function layerGlory (map, rc) {
    var imgDir = 'images/'
    var gloryMarker = L.icon({
      iconUrl: imgDir + 'AMM-glory-120x120.png',
      iconRetinaUrl: imgDir + 'AMM-glory-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerGlory = L.geoJson(window.gloryInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: gloryMarker
        })
      }
    })
    map.addLayer(layerGlory)
    return layerGlory
  }

/* FIN layer glory */


/* BEG layer carp */
function layerCarp (map, rc) {
    var imgDir = 'images/'
    var carpMarker = L.icon({
      iconUrl: imgDir + 'LOC-carpet-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-carpet-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerCarp = L.geoJson(window.carpInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: carpMarker
        })
      }
    })
    map.addLayer(layerCarp)
    return layerCarp
  }
/* FIN layer carp */

/* BEG layer minec */
function layerMinec (map, rc) {
    var imgDir = 'images/'
    var minecMarker = L.icon({
      iconUrl: imgDir + 'LOC-minecart-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-minecart-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerMinec = L.geoJson(window.minecInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: minecMarker
        })
      }
    })
    map.addLayer(layerMinec)
    return layerMinec
  }

/* FIN layer minec */

/* BEG Essence Mining */
function layerEssmin (map, rc) {
    var imgDir = 'images/'
    var essminMarker = L.icon({
      iconUrl: imgDir + 'LOC-essence-85x85.png',
      iconRetinaUrl: imgDir + 'LOC-essence-85x85.png',
      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [40, 40],
      shadowAnchor: [20, 20]
    })
    var layerEssmin = L.geoJson(window.essminInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: essminMarker
        })
      }
    })
    map.addLayer(layerEssmin)
    return layerEssmin
  }
/* FIN Essence Mining */

/* BEG Combat Bracelet */
function layerCombb (map, rc) {
    var imgDir = 'images/'
    var combbMarker = L.icon({
      iconUrl: imgDir + 'BRACE-combat-120x120.png',
      iconRetinaUrl: imgDir + 'BRACE-combat-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerCombb = L.geoJson(window.combbInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: combbMarker
        })
      }
    })
    map.addLayer(layerCombb)
    return layerCombb
  }
/* FIN Combat Bracelet */

/* BEG layer skills necklace */
function layerSkills (map, rc) {
    var imgDir = 'images/'
    var skillsMarker = L.icon({
      iconUrl: imgDir + 'NECK-skills-120x120.png',
      iconRetinaUrl: imgDir + 'NECK-skills-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerSkills = L.geoJson(window.skillsInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: skillsMarker
        })
      }
    })
    map.addLayer(layerSkills)
    return layerSkills
  }
/* FIN layer skills necklace */

/* BEG layer ectophial */
function layerEcto (map, rc) {
    var imgDir = 'images/'
    var ectoMarker = L.icon({
      iconUrl: imgDir + 'LOC-ectophial-120x120.png',
      iconRetinaUrl: imgDir + 'LOC-ectophial-120x120.png',
      iconSize: [50, 50],
      iconAnchor: [25, 25],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '120x120-back.png',
      shadowSize: [50, 50],
      shadowAnchor: [25, 25]
    })
    var layerEcto = L.geoJson(window.ectoInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: ectoMarker
        })
      }
    })
    map.addLayer(layerEcto)
    return layerEcto
  }
/* FIN layer ectophial */

/* BEG layer dungeons */
function layerDungeon (map, rc) {
    var imgDir = 'images/'
    var dungeonMarker = L.icon({
      iconUrl: imgDir + 'dungeon-85x85.png',
      iconRetinaUrl: imgDir + 'dungeon-85x85.png',
      iconSize: [20, 20],
      iconAnchor: [7, 14],
      popupAnchor: [-0, -31],
      shadowUrl: imgDir + '85x85-back.png',
      shadowSize: [30, 30],
      shadowAnchor: [12, 18]
    })
    var layerDungeon = L.geoJson(window.dungeonInfo, {
      coordsToLatLng: function (coords) {
        return rc.unproject(coords)
      },
      // add a popup content to the marker
      onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name)
        }
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: dungeonMarker
        })
      }
    })
    map.addLayer(layerDungeon)
    return layerDungeon
}
/* FIN layer dungeons */



/**
   * layer drawing a polygon
   */
  function layerPolygon (map, rc) {
    var points = window.polygon.map(function (point) {
      return rc.unproject([point.x, point.y])
    })
    var layerPolygon = L.polygon([points])
    map.addLayer(layerPolygon)
    return layerPolygon
  }

  /**
   * layer drawing some cicles
   */
  function layerCircles (map, rc) {
    /*
    // using circle may cause displaying a ellipse at the edges of the image
    // radius is painful to adjust - simply don't use
    const circle = L.circle(rc.unproject([200, 1000]), { radius: 1e6 })
    */

    /*
    // drawing a circle with a polyline
    // Not so nice because of the visible steps
    function circlePoints ([x, y], r, steps = 360) {
      var p = []
      for (var i = 0; i < steps; i++) {
        p.push(rc.unproject([
          (x + r * Math.cos(2 * Math.PI * i / steps)),
          (y + r * Math.sin(2 * Math.PI * i / steps))
        ]))
      }
      return p
    }
    const polyline = L.polygon([circlePoints([200, 200], 200)], {
      fillColor: '#3388ff',
      color: '#fb0000'
    })
    */

    // Custom marker prototype - credits to Arkensor
    L.CircleMarkerScaling = L.CircleMarker.extend({
      _project: function () {
        this._point = this._map.latLngToLayerPoint(this._latlng);
        this._radius = 2 * this.options.radius * this._map.getZoomScale(this._map.getZoom(), this._map.getMaxZoom());
        this._updateBounds();
      }
    })
    L.circleMarkerScaling = function (latlng, options) {
      return new L.CircleMarkerScaling(latlng, options);
    }

    const custom = L.circleMarkerScaling(rc.unproject([200, 200]), {
      radius: 200,
      fillColor: '#3388ff',
      color: '#fbff2c',
    })

    const layer = L.featureGroup([/*circle, polyline,*/ custom])
    map.addLayer(layer)
    return layer
  }
  init('map')
}(window))
