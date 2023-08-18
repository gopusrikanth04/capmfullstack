using my.db as my from '../db/schema';

service ProjectService {

 entity Projects as projection on my.Projects;

 entity Projects2 as projection on my.Projects2;

//    entity Projects as projection on my.Projects
//    actions{
//        function getOrders1() returns String
//    };

 function getOrders() returns array of Projects;


}