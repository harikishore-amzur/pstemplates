
function allsites(context){
  var data  = Object.values(context).map(function(site){
    return {
        id: site.id,
        name: site.name,
        stations: site.chargingStations.map(function(cs){return cs.id}),
        csoo: site.csoo.id,
        location: site.address.state
    }
  });

  return {sites:data};
}