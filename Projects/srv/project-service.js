const cds = require('@sap/cds');

module.exports = function (srv) {
    srv.after('READ', 'Projects', (each) => {
        if (each.id) {
            each.status = 'Active';
        }
    });



    srv.on('READ', 'Projects', (each) => {
        if (each.id) {
            each.status = 'Active';
        }
    });

    srv.on('getOrders', async (req) => {
        return [
            {
                id: 1,
                name: "IBAN",
                description: "IBAN Project",
            },
            {
                id: 1,
                name: "MRO",
                description: "MRO Project",
            },
            {
                id: 1,
                name: "Clause Designer",
                description: "Clause Designer",
            }
        ]
    });
    // srv.before('CREATE', 'Projects', async(req)=>{
    //     const Project = {}
    // })//getOpenOrders
}

