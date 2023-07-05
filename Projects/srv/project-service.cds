using my.db as my from '../db/schema';

service ProjectService {

 entity Projects as projection on my.Projects;

//    entity Projects as projection on my.Projects
//    actions{
//        function getOrders1() returns String
//    };

 function getOrders() returns array of Projects;


}