import ProtVista from "ProtVista";

export function main (el, service, entity, state, config) {
    //protVista expects an accession, so convert intermine id to accession
    //TODO: How do we handle multiple values, e.g. list ids?
    var imEntity = entity.Protein;
    var columnToConvert = config.columnMapping[imEntity.class][imEntity.format];
    var accession = new imjs.Service(service)
        .findById(imEntity.class, imEntity.value)
        .then(function(response) {
            var instance = new ProtVista({
                el: el,
                uniprotacc: response[columnToConvert]
        });
    });
}
