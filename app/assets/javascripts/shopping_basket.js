function helloworld(){
    console.log('hello world');
  }

var noOfboxesChecked = 0;
var totalAmounttoPay = 0;
var twoDP_total = totalAmounttoPay.toFixed(2);
var doesEmptyExist = false;

function checkbox1() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");

    
    if(document.getElementById('register').checked){
        // sessionStorage.removeItem('register');
        sessionStorage.setItem('register', 'true');

       var li_register = document.createElement("LI");
       li_register.setAttribute("id", "register_id");
       var tn_register = document.createTextNode("Register - Official Copy");
       var litn_register = li_register.appendChild(tn_register);
       list.insertBefore(li_register, list.childNodes[0]);
       
       var cost_li_register = document.createElement("LI");
       cost_li_register.setAttribute("id", "register_cost");
       var cost_tn_register = document.createTextNode("£3.00");
       var cost_litn_register = cost_li_register.appendChild(cost_tn_register);
       total_list.insertBefore(cost_li_register, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked += 1;
       areBoxesticked();

       sessionStorage.setItem('TestingStorage', twoDP_total);
 
     }
     else{
    //    a = sessionStorage.setItem('register', 'null');
       sessionStorage.removeItem('register');

       register_id.remove();
       register_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked -= 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }

function checkbox1A() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");

    
    if(document.getElementById('register_current').checked){
        // sessionStorage.removeItem('register');
        sessionStorage.setItem('register1A', 'true');

       var li_registerA = document.createElement("LI");
       li_registerA.setAttribute("id", "register_idA");
       var tn_registerA = document.createTextNode("Register - Current - Official Copy");
       var litn_registerA = li_registerA.appendChild(tn_registerA);
       list.insertBefore(li_registerA, list.childNodes[0]);
       
       var cost_li_registerA = document.createElement("LI");
       cost_li_registerA.setAttribute("id", "register_costA");
       var cost_tn_registerA = document.createTextNode("£3.00");
       var cost_litn_registerA = cost_li_registerA.appendChild(cost_tn_registerA);
       total_list.insertBefore(cost_li_registerA, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked += 1;
       areBoxesticked();

       sessionStorage.setItem('TestingStorage', twoDP_total); 
 
     }
     else{
    //    a = sessionStorage.setItem('register', 'null');
       sessionStorage.removeItem('register1A');

       register_idA.remove();
       register_costA.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked -= 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }

function checkbox1B() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");

    
    if(document.getElementById('register_sixteen').checked){
        // sessionStorage.removeItem('register');
        sessionStorage.setItem('register1B', 'true');

       var li_registerB = document.createElement("LI");
       li_registerB.setAttribute("id", "register_idB");
       var tn_registerB = document.createTextNode("Register - 2016 - Non-official Copy");
       var litn_registerB = li_registerB.appendChild(tn_registerB);
       list.insertBefore(li_registerB, list.childNodes[0]);
       
       var cost_li_registerB = document.createElement("LI");
       cost_li_registerB.setAttribute("id", "register_costB");
       var cost_tn_registerB = document.createTextNode("£3.00");
       var cost_litn_registerB = cost_li_registerB.appendChild(cost_tn_registerB);
       total_list.insertBefore(cost_li_registerB, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked += 1;
       areBoxesticked();

       sessionStorage.setItem('TestingStorage', twoDP_total); 
 
     }
     else{
    //    a = sessionStorage.setItem('register', 'null');
       sessionStorage.removeItem('register1B');

       register_idB.remove();
       register_costB.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked -= 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
}


function checkbox1C() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");

    
    if(document.getElementById('register_02').checked){
        // sessionStorage.removeItem('register');
        sessionStorage.setItem('register1C', 'true');

       var li_registerC = document.createElement("LI");
       li_registerC.setAttribute("id", "register_idC");
       var tn_registerC = document.createTextNode("Register - 2002 - Non-official Copy");
       var litn_registerC = li_registerC.appendChild(tn_registerC);
       list.insertBefore(li_registerC, list.childNodes[0]);
       
       var cost_li_registerC = document.createElement("LI");
       cost_li_registerC.setAttribute("id", "register_costC");
       var cost_tn_registerC = document.createTextNode("£3.00");
       var cost_litn_registerC = cost_li_registerC.appendChild(cost_tn_registerC);
       total_list.insertBefore(cost_li_registerC, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked += 1;
       areBoxesticked();

       sessionStorage.setItem('TestingStorage', twoDP_total); 
 
     }
     else{
    //    a = sessionStorage.setItem('register', 'null');
       sessionStorage.removeItem('register1C');

       register_idC.remove();
       register_costC.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
 
       noOfboxesChecked -= 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
}



 function checkbox2() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan').checked){
        // sessionStorage.removeItem('titleplan');
        sessionStorage.setItem('titleplan', 'true');
       
        bool_title_plan = true;
       
        var li_title_plan = document.createElement("LI");
       li_title_plan.setAttribute("id", "title_plan_id");
       var tn_title_plan = document.createTextNode("Title Plan - Official Copy");
       var litn_title_plan = li_title_plan.appendChild(tn_title_plan);
       list.insertBefore(li_title_plan, list.childNodes[0]);
       
       var cost_li_title_plan = document.createElement("LI");
       cost_li_title_plan.setAttribute("id", "title_plan_cost");
       var cost_tn_title_plan = document.createTextNode("£3.00");
       var cost_litn_title_plan = cost_li_title_plan.appendChild(cost_tn_title_plan);
       total_list.insertBefore(cost_li_title_plan, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

       
     }
     else{
    //    b = sessionStorage.setItem('titleplan', 'null');

       sessionStorage.removeItem('titleplan');

       bool_title_plan = false;


       title_plan_id.remove();
       title_plan_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }


 function checkbox2A() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_current').checked){
        // sessionStorage.removeItem('titleplan');
        sessionStorage.setItem('titleplanA', 'true');
              
        var li_title_planA = document.createElement("LI");
       li_title_planA.setAttribute("id", "title_plan_idA");
       var tn_title_planA = document.createTextNode("Title Plan - Current - Official Copy");
       var litn_title_planA = li_title_planA.appendChild(tn_title_planA);
       list.insertBefore(li_title_planA, list.childNodes[0]);
       
       var cost_li_title_planA = document.createElement("LI");
       cost_li_title_planA.setAttribute("id", "title_plan_costA");
       var cost_tn_title_planA = document.createTextNode("£3.00");
       var cost_litn_title_planA = cost_li_title_planA.appendChild(cost_tn_title_planA);
       total_list.insertBefore(cost_li_title_planA, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

       
     }
     else{
    //    b = sessionStorage.setItem('titleplan', 'null');

       sessionStorage.removeItem('titleplanA');

       title_plan_idA.remove();
       title_plan_costA.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }


 function checkbox2B() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_16').checked){
        // sessionStorage.removeItem('titleplan');
        sessionStorage.setItem('titleplanB', 'true');
              
        var li_title_planB = document.createElement("LI");
       li_title_planB.setAttribute("id", "title_plan_idB");
       var tn_title_planB = document.createTextNode("Title Plan - 2016 - Non-official Copy");
       var litn_title_planB = li_title_planB.appendChild(tn_title_planB);
       list.insertBefore(li_title_planB, list.childNodes[0]);
       
       var cost_li_title_planB = document.createElement("LI");
       cost_li_title_planB.setAttribute("id", "title_plan_costB");
       var cost_tn_title_planB = document.createTextNode("£3.00");
       var cost_litn_title_planB = cost_li_title_planB.appendChild(cost_tn_title_planB);
       total_list.insertBefore(cost_li_title_planB, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

       
     }
     else{
    //    b = sessionStorage.setItem('titleplan', 'null');

       sessionStorage.removeItem('titleplanB');

       title_plan_idB.remove();
       title_plan_costB.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 } 


 function checkbox2C() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_02').checked){
        // sessionStorage.removeItem('titleplan');
        sessionStorage.setItem('titleplanC', 'true');
              
        var li_title_planC = document.createElement("LI");
       li_title_planC.setAttribute("id", "title_plan_idC");
       var tn_title_planC = document.createTextNode("Title Plan - 2002 - Non-official Copy");
       var litn_title_planC = li_title_planC.appendChild(tn_title_planC);
       list.insertBefore(li_title_planC, list.childNodes[0]);
       
       var cost_li_title_planC = document.createElement("LI");
       cost_li_title_planC.setAttribute("id", "title_plan_costC");
       var cost_tn_title_planC = document.createTextNode("£3.00");
       var cost_litn_title_planC = cost_li_title_planB.appendChild(cost_tn_title_planC);
       total_list.insertBefore(cost_li_title_planC, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

       
     }
     else{
    //    b = sessionStorage.setItem('titleplan', 'null');

       sessionStorage.removeItem('titleplanC');

       title_plan_idC.remove();
       title_plan_costC.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }  


 function checkbox3() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_map').checked){
        // sessionStorage.removeItem('titleplanmap');
        sessionStorage.setItem('titleplanmap', 'true');       
       
        bool_title_plan_map = true;
       var li_title_plan_map = document.createElement("LI");
       li_title_plan_map.setAttribute("id", "title_plan_map_id");
       var tn_title_plan_map = document.createTextNode("Title Plan Map - Official Copy");
       var litn_title_plan_map = li_title_plan_map.appendChild(tn_title_plan_map);
       list.insertBefore(li_title_plan_map, list.childNodes[0]);
       
       var cost_li_title_plan_map = document.createElement("LI");
       cost_li_title_plan_map.setAttribute("id", "title_plan_map_cost");
       var cost_tn_title_plan_map = document.createTextNode("£3.00");
       var cost_litn_title_plan = cost_li_title_plan_map.appendChild(cost_tn_title_plan_map);
       total_list.insertBefore(cost_li_title_plan_map, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('titleplanmap');
        // sessionStorage.setItem('titleplanmap', 'false');
       
        bool_title_plan = false;

       title_plan_map_id.remove();
       title_plan_map_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }

function checkbox3A() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_map_current').checked){
        // sessionStorage.removeItem('titleplanmap');
        sessionStorage.setItem('titleplanmap3A', 'true');       
       
        var li_title_plan_map3A = document.createElement("LI");
       li_title_plan_map3A.setAttribute("id", "title_plan_map_id3A");
       var tn_title_plan_map3A = document.createTextNode("Title Plan Map - Current - Official Copy");
       var litn_title_plan_map3A = li_title_plan_map3A.appendChild(tn_title_plan_map3A);
       list.insertBefore(li_title_plan_map3A, list.childNodes[0]);
       
       var cost_li_title_plan_map3A = document.createElement("LI");
       cost_li_title_plan_map3A.setAttribute("id", "title_plan_map_cost3A");
       var cost_tn_title_plan_map3A = document.createTextNode("£3.00");
       var cost_litn_title_plan3A = cost_li_title_plan_map3A.appendChild(cost_tn_title_plan_map3A);
       total_list.insertBefore(cost_li_title_plan_map3A, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('titleplanmap3A');
        // sessionStorage.setItem('titleplanmap', 'false');
       
        title_plan_map_id3A.remove();
       title_plan_map_cost3A.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
}

function checkbox3B() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_map_16').checked){
        // sessionStorage.removeItem('titleplanmap');
        sessionStorage.setItem('titleplanmap3B', 'true');       
       
        var li_title_plan_map3B = document.createElement("LI");
       li_title_plan_map3B.setAttribute("id", "title_plan_map_id3B");
       var tn_title_plan_map3B = document.createTextNode("Title Plan Map - 2016 - Non-official Copy");
       var litn_title_plan_map3B = li_title_plan_map3B.appendChild(tn_title_plan_map3B);
       list.insertBefore(li_title_plan_map3B, list.childNodes[0]);
       
       var cost_li_title_plan_map3B = document.createElement("LI");
       cost_li_title_plan_map3B.setAttribute("id", "title_plan_map_cost3B");
       var cost_tn_title_plan_map3B = document.createTextNode("£3.00");
       var cost_litn_title_plan3B = cost_li_title_plan_map3B.appendChild(cost_tn_title_plan_map3B);
       total_list.insertBefore(cost_li_title_plan_map3B, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('titleplanmap3B');
        // sessionStorage.setItem('titleplanmap', 'false');
       
        title_plan_map_id3B.remove();
       title_plan_map_cost3B.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
}

function checkbox3C() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_map_02').checked){
        // sessionStorage.removeItem('titleplanmap');
        sessionStorage.setItem('titleplanmap3C', 'true');       
       
        var li_title_plan_map3C = document.createElement("LI");
       li_title_plan_map3C.setAttribute("id", "title_plan_map_id3C");
       var tn_title_plan_map3C = document.createTextNode("Title Plan Map - 2002 - Non-official Copy");
       var litn_title_plan_map3C = li_title_plan_map3C.appendChild(tn_title_plan_map3C);
       list.insertBefore(li_title_plan_map3C, list.childNodes[0]);
       
       var cost_li_title_plan_map3C = document.createElement("LI");
       cost_li_title_plan_map3C.setAttribute("id", "title_plan_map_cost3C");
       var cost_tn_title_plan_map3C = document.createTextNode("£3.00");
       var cost_litn_title_plan3C = cost_li_title_plan_map3C.appendChild(cost_tn_title_plan_map3C);
       total_list.insertBefore(cost_li_title_plan_map3C, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('titleplanmap3C');
        // sessionStorage.setItem('titleplanmap', 'false');
       
        title_plan_map_id3C.remove();
       title_plan_map_cost3C.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
}


 function checkbox4() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('deed').checked){
        // sessionStorage.removeItem('deed');
        sessionStorage.setItem('deed', 'true');  

        bool_deed = true;


       var li_deed = document.createElement("LI");
       li_deed.setAttribute("id", "deed_id");
       var tn_deed = document.createTextNode("Deed");
       var litn_deed = li_deed.appendChild(tn_deed);
       list.insertBefore(li_deed, list.childNodes[0]);
       
       var cost_li_deed = document.createElement("LI");
       cost_li_deed.setAttribute("id", "deed_cost");
       var cost_tn_deed = document.createTextNode("£3.00");
       var cost_litn_deed = cost_li_deed.appendChild(cost_tn_deed);
       total_list.insertBefore(cost_li_deed, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

       
     }
     else{
        sessionStorage.removeItem('deed');
        // sessionStorage.setItem('deed', 'false');  

       bool_deed = false;

       deed_id.remove();
       deed_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 } 


 function checkbox5() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('lease').checked){
        // sessionStorage.removeItem('lease');
        sessionStorage.setItem('lease', 'true');  

        bool_lease = true;

       var li_lease = document.createElement("LI");
       li_lease.setAttribute("id", "lease_id");
       var tn_lease = document.createTextNode("Lease");
       var litn_lease = li_lease.appendChild(tn_lease);
       list.insertBefore(li_lease, list.childNodes[0]);
       
       var cost_li_lease = document.createElement("LI");
       cost_li_lease.setAttribute("id", "lease_cost");
       var cost_tn_lease = document.createTextNode("£3.00");
       var cost_litn_deed = cost_li_lease.appendChild(cost_tn_lease);
       total_list.insertBefore(cost_li_lease, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('lease');
        // sessionStorage.setItem('lease', 'false'); 

       bool_lease = false;

       lease_id.remove();
       lease_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 } 

 function checkbox6() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('transfer_Afour').checked){
        // sessionStorage.removeItem('transfer_afour');
        sessionStorage.setItem('transfer_afour', 'true'); 

        bool_transfer_Afour = true;

       
       var li_transfer_Afour = document.createElement("LI");
       li_transfer_Afour.setAttribute("id", "transfer_Afour_id");
       var tn_transfer_Afour = document.createTextNode("Transfer");
       var litn_transfer_Afour = li_transfer_Afour.appendChild(tn_transfer_Afour);
       list.insertBefore(li_transfer_Afour, list.childNodes[0]);
       
       var cost_li_transfer_Afour = document.createElement("LI");
       cost_li_transfer_Afour.setAttribute("id", "transfer_Afour_cost");
       var cost_tn_transfer_Afour = document.createTextNode("£3.00");
       var cost_litn_transfer_Afour = cost_li_transfer_Afour.appendChild(cost_tn_transfer_Afour);
       total_list.insertBefore(cost_li_transfer_Afour, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('transfer_afour');
        // sessionStorage.setItem('transfer_afour', 'false'); 

        bool_transfer_Afour = false;


        transfer_Afour_id.remove();
        transfer_Afour_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 } 
 
 function checkbox7() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('transfer_Aeight').checked){
        // sessionStorage.removeItem('transfer_aeight');
        sessionStorage.setItem('transfer_aeight', 'true'); 
        bool_transfer_Aeight = true;


       var li_transfer_Aeight = document.createElement("LI");
       li_transfer_Aeight.setAttribute("id", "transfer_Aeight_id");
       var tn_transfer_Aeight = document.createTextNode("Transfer");
       var litn_transfer_Aeight = li_transfer_Aeight.appendChild(tn_transfer_Aeight);
       list.insertBefore(li_transfer_Aeight, list.childNodes[0]);
       
       var cost_li_transfer_Aeight = document.createElement("LI");
       cost_li_transfer_Aeight.setAttribute("id", "transfer_Aeight_cost");
       var cost_tn_transfer_Aeight = document.createTextNode("£3.00");
       var cost_litn_transfer_Aeight = cost_li_transfer_Aeight.appendChild(cost_tn_transfer_Aeight);
       total_list.insertBefore(cost_li_transfer_Aeight, total_list.childNodes[0]);
       
       totalAmounttoPay += 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked += 1; 
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
     else{
        sessionStorage.removeItem('transfer_aeight');
        // sessionStorage.setItem('transfer_aeight', 'false'); 
        bool_transfer_Aeight = false;

        transfer_Aeight_id.remove();
        transfer_Aeight_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       sessionStorage.setItem('TestingStorage', twoDP_total);

     }
 }

 function areBoxesticked(){
	if (noOfboxesChecked == 1 && totalAmounttoPay == 3 && doesEmptyExist === false){
    	var empty_button = document.createElement("BUTTON");
        empty_button.setAttribute("id", "empty_button_id");
        empty_button.setAttribute("onclick", "emptyTheBasket()");
        empty_button.setAttribute("type", "button");
        empty_button.setAttribute("class", "govuk-button govuk-button--warning");
		empty_button.innerHTML = "Empty";      
        // here experimentation begins
        var element = document.getElementById("side_container");
        element.appendChild(empty_button);
        var Emptyelement = document.getElementById("empty_wording");
        Emptyelement.style.display = "none";

		
        // here it ends
        // document.body.appendChild(empty_button);
        doesEmptyExist = true;
    }
    else if (noOfboxesChecked == 0 && totalAmounttoPay ==0){
        empty_button_id.remove();	
        doesEmptyExist = false;
        var Emptyelement = document.getElementById("empty_wording");
        Emptyelement.style.display = "block";
    }
}

function emptyTheBasket(){
	noOfboxesChecked = 0; 
    totalAmounttoPay = 0;
    var twoDP_total = totalAmounttoPay.toFixed(2);
    document.getElementById("total_cost").innerHTML= twoDP_total;
    
    if(document.getElementById('register').checked){
	  document.getElementById('register').checked = false;
	  register_id.remove();
      register_cost.remove();
	}
    if(document.getElementById('register_current').checked){
        document.getElementById('register_current').checked = false;
        register_idA.remove();
        register_costA.remove();
      }
    
    if(document.getElementById('register_sixteen').checked){
    document.getElementById('register_sixteen').checked = false;
    register_idB.remove();
    register_costB.remove();
    }  

    if(document.getElementById('register_02').checked){
        document.getElementById('register_02').checked = false;
        register_idC.remove();
        register_costC.remove();
        }

    if(document.getElementById('title_plan').checked){
	  document.getElementById('title_plan').checked = false;
	  title_plan_id.remove();
      title_plan_cost.remove();
	}

    if(document.getElementById('title_plan_current').checked){
        document.getElementById('title_plan_current').checked = false;
        title_plan_idA.remove();
        title_plan_costA.remove();
      }

    if(document.getElementById('title_plan_16').checked){
    document.getElementById('title_plan_16').checked = false;
    title_plan_idB.remove();
    title_plan_costB.remove();
    }

    if(document.getElementById('title_plan_02').checked){
    document.getElementById('title_plan_02').checked = false;
    title_plan_idC.remove();
    title_plan_costC.remove();
    }  

    if(document.getElementById('title_plan_map').checked){
        document.getElementById('title_plan_map').checked = false;
        title_plan_map_id.remove();
        title_plan_map_cost.remove();
      }

    if(document.getElementById('title_plan_map_current').checked){
    document.getElementById('title_plan_map_current').checked = false;
    title_plan_map_id3A.remove();
    title_plan_map_cost3A.remove();
    }  

    if(document.getElementById('title_plan_map_16').checked){
        document.getElementById('title_plan_map_16').checked = false;
        title_plan_map_id3B.remove();
        title_plan_map_cost3B.remove();
        }  

    if(document.getElementById('title_plan_map_02').checked){
        document.getElementById('title_plan_map_02').checked = false;
        title_plan_map_id3B.remove();
        title_plan_map_cost3B.remove();
        } 

    if(document.getElementById('deed').checked){
        document.getElementById('deed').checked = false;
        deed_id.remove();
        deed_cost.remove();
      }  
    if(document.getElementById('lease').checked){
        document.getElementById('lease').checked = false;
        lease_id.remove();
        lease_cost.remove();
    }

    if(document.getElementById('transfer_Afour').checked){
        document.getElementById('transfer_Afour').checked = false;
        transfer_Afour_id.remove();
        transfer_Afour_cost.remove();
    }


    if(document.getElementById('transfer_Aeight').checked){
        document.getElementById('transfer_Aeight').checked = false;
        transfer_Aeight_id.remove();
        transfer_Aeight_cost.remove();
    }


    empty_button_id.remove();
    doesEmptyExist = false;

}

function whatwasCheckedBefore(){

        var regValue = sessionStorage.getItem('register');
        var titleplanValue = sessionStorage.getItem('titleplan');
        var titleplanmapValue = sessionStorage.getItem('titleplanmap');
        var deedValue = sessionStorage.getItem('deed');
        var leaseValue = sessionStorage.getItem('lease');
        var transfer_a4Value = sessionStorage.getItem('transfer_afour');
        var transfer_a8Value = sessionStorage.getItem('transfer_aeight');


        if (sessionStorage.getItem("register") === null){
            var one = document.getElementById("register_row");
            one.remove();
        }

        if (sessionStorage.getItem("titleplan") === null){
            var two = document.getElementById("title_plan_row");
            two.remove();
        }

        if (sessionStorage.getItem("titleplanmap")=== null){
            var three = document.getElementById("title_plan_map_row");
            three.remove();
        }

        if (sessionStorage.getItem("deed")=== null){
            var four = document.getElementById("deed_row");
            four.remove();
        }

        if (sessionStorage.getItem("lease")=== null){
            var five = document.getElementById("lease_row");
            five.remove();
        }

        if (sessionStorage.getItem("transfer_afour")=== null){
            var six = document.getElementById("transfer_Afour_row");
            six.remove();
        }

        if (sessionStorage.getItem("transfer_aeight")=== null){
            var seven = document.getElementById("transfer_Aeight_row");
            seven.remove();
        }


}

function whatwasCheckedBeforeHistorical(){


    if (sessionStorage.getItem("register1A") === null){
        var oneA = document.getElementById("register1A_row");
        oneA.remove();
    }

    if (sessionStorage.getItem("register1B") === null){
        var oneB = document.getElementById("register1B_row");
        oneB.remove();
    }

    if (sessionStorage.getItem("register1C") === null){
        var oneC = document.getElementById("register1C_row");
        oneC.remove();
    }

    if (sessionStorage.getItem("titleplanA") === null){
        var twoA = document.getElementById("title_plan2A_row");
        twoA.remove();
    }

    if (sessionStorage.getItem("titleplanB") === null){
        var twoB = document.getElementById("title_plan2B_row");
        twoB.remove();
    }

    if (sessionStorage.getItem("titleplanC") === null){
        var twoC = document.getElementById("title_plan2C_row");
        twoC.remove();
    }

    if (sessionStorage.getItem("titleplanmap3A") === null){
        var threeA = document.getElementById("title_plan_map3A_row");
        threeA.remove();
    }

    if (sessionStorage.getItem("titleplanmap3B") === null){
        var threeB = document.getElementById("title_plan_map3B_row");
        threeB.remove();
    }

    if (sessionStorage.getItem("titleplanmap3C") === null){
        var threeC = document.getElementById("title_plan_map3C_row");
        threeC.remove();
    }


    if (sessionStorage.getItem("deed")=== null){
        var four4 = document.getElementById("deed_row");
        four4.remove();
    }

    if (sessionStorage.getItem("lease")=== null){
        var five5 = document.getElementById("lease_row");
        five5.remove();
    }

    if (sessionStorage.getItem("transfer_afour")=== null){
        var six6 = document.getElementById("transfer_Afour_row");
        six6.remove();
    }

    if (sessionStorage.getItem("transfer_aeight")=== null){
        var seven7 = document.getElementById("transfer_Aeight_row");
        seven7.remove();
    }


}

function LogTotalCost(){
    sessionStorage.setItem('Question','Mark');
}