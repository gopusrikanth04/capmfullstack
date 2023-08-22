//const util = require('./util/util.js');
var xsenv = require('@sap/xsenv');

module.exports = (srv) => {


  srv.before('CREATE', 'Students', async (req) => {

    //Get transaction of the request
    const tx = cds.transaction(req);

    if (!req.data.ID) {
      req.data.ID = await autoID('Students', tx);
      console.log(req.data);
    }


  });

  srv.before('CREATE', 'Courses', async (req) => {

    //Get transaction of the request
    const tx = cds.transaction(req);

    if (!req.data.ID) {
      req.data.ID = await autoID('Courses', tx);
      console.log(req.data);
    }


  });


  srv.before('CREATE', 'ClassRooms', async (req) => {

    //Get transaction of the request
    const tx = cds.transaction(req);

    if (!req.data.ID) {
      req.data.ID = await autoID('ClassRooms', tx);
      console.log(req.data);
    }


  });


  srv.before('CREATE', 'Classes', async (req) => {

    //Get transaction of the request
    const tx = cds.transaction(req);

    let classes = await tx.read('school.Classes').where({ name: req.data.name });

    if (classes.length > 0)
      req.error(410, 'The class name need to be unique');



  });


  srv.before('READ', 'Classes', async (req) => {

    // Read the configuration for all bound service instances
   // var services = xsenv.readServices();
   // console.log(services.serviceInstance);
   
  });
}