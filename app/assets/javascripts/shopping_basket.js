const session = require("express-session");

var noOfboxesChecked = 0;
var totalAmounttoPay = 0;
var twoDP_total = totalAmounttoPay.toFixed(2);
var doesEmptyExist = false;

// the booleans used for checkout page
var bool_register = false;
var bool_title_plan = false;
var bool_title_plan_map = false;
var bool_deed = false;
var bool_lease = false;
var bool_transfer_Afour = false;
var bool_transfer_Aeight = false;

// trying out session storage
// var a = sessionStorage.setItem('register', 'null');
// var b = sessionStorage.setItem('titleplan', 'null');
// sessionStorage.setItem('titleplanmap', 'false');
// sessionStorage.setItem('deed', 'false');
// sessionStorage.setItem('lease', 'false');
// sessionStorage.setItem('transfer_afour', 'false');
// sessionStorage.setItem('transfer_aeight', 'false');



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
 
     }
 }

 function checkbox2() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan').checked){
        // sessionStorage.removeItem('titleplan');
        sessionStorage.setItem('titleplan', 'true');
              
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
 
       
     }
     else{
    //    b = sessionStorage.setItem('titleplan', 'null');

       sessionStorage.removeItem('titleplan');

       title_plan_id.remove();
       title_plan_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       
     }
 }


 function checkbox3() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('title_plan_map').checked){
        // sessionStorage.removeItem('titleplanmap');
        sessionStorage.setItem('titleplanmap', 'true');       
       
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
 
       
     }
     else{
        sessionStorage.removeItem('titleplanmap');
        // sessionStorage.setItem('titleplanmap', 'false');
       
       title_plan_map_id.remove();
       title_plan_map_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       
     }
 }


 function checkbox4() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('deed').checked){
        // sessionStorage.removeItem('deed');
        sessionStorage.setItem('deed', 'true');  

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
 
       
     }
     else{
        sessionStorage.removeItem('deed');
        // sessionStorage.setItem('deed', 'false');  

       deed_id.remove();
       deed_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       
     }
 } 


 function checkbox5() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('lease').checked){
        // sessionStorage.removeItem('lease');
        sessionStorage.setItem('lease', 'true');  

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
 
       
     }
     else{
        sessionStorage.removeItem('lease');
        // sessionStorage.setItem('lease', 'false'); 

       lease_id.remove();
       lease_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       
     }
 } 

 function checkbox6() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('transfer_Afour').checked){
        // sessionStorage.removeItem('transfer_afour');
        sessionStorage.setItem('transfer_afour', 'true'); 
       
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
 
       
     }
     else{
        sessionStorage.removeItem('transfer_afour');
        // sessionStorage.setItem('transfer_afour', 'false'); 


        transfer_Afour_id.remove();
        transfer_Afour_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       
     }
 } 
 
 function checkbox7() {
    var list = document.getElementById("basket_item");
    var total_list = document.getElementById("items_cost");
 
    
    if(document.getElementById('transfer_Aeight').checked){
        // sessionStorage.removeItem('transfer_aeight');
        sessionStorage.setItem('transfer_aeight', 'true'); 

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
 
       
     }
     else{
        sessionStorage.removeItem('transfer_aeight');
        // sessionStorage.setItem('transfer_aeight', 'false'); 

        transfer_Aeight_id.remove();
        transfer_Aeight_cost.remove();
       
       totalAmounttoPay -= 3; 
       var twoDP_total = totalAmounttoPay.toFixed(2);
       document.getElementById("total_cost").innerHTML= twoDP_total;
       
       noOfboxesChecked -= 1;
       areBoxesticked();
 
       
     }
 }

 function areBoxesticked(){
	if (noOfboxesChecked == 1 && totalAmounttoPay == 3 && doesEmptyExist === false){
    	var empty_button = document.createElement("BUTTON");
        empty_button.setAttribute("id", "empty_button_id");
        empty_button.setAttribute("onclick", "emptyTheBasket()");
        empty_button.setAttribute("class", "govuk-button govuk-button--warning");
		empty_button.innerHTML = "Empty";      
        // here experimentation begins
        var element = document.getElementById("side_container");
        element.appendChild(empty_button);
		
        // here it ends
        // document.body.appendChild(empty_button);
        doesEmptyExist = true;
    }
    else if (noOfboxesChecked == 0 && totalAmounttoPay ==0){
        empty_button_id.remove();	
        doesEmptyExist = false;
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
    if(document.getElementById('title_plan').checked){
	  document.getElementById('title_plan').checked = false;
	  title_plan_id.remove();
      title_plan_cost.remove();
	}
    if(document.getElementById('title_plan_map').checked){
        document.getElementById('title_plan_map').checked = false;
        title_plan_map_id.remove();
        title_plan_map_cost.remove();
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
    // var testing_testing = document.createElement("BUTTON");
    //     testing_testing.setAttribute("id", "empty_button_id");
    //     testing_testing.setAttribute("onclick", "emptyTheBasket()");
    //     testing_testing.setAttribute("class", "govuk-button govuk-button--warning");
	// 	testing_testing.innerHTML = "Empty";      
    //     var telement = document.getElementById("side_container");
    //     telement.appendChild(testing_testing);
        // var hello_world = document.getElementById("register_row");
        // hello_world.remove();
    
    
        // here begins the real function
    // if(bool_lease === true){
    //     var hello_world = document.getElementById("lease_row");
    //     hello_world.remove();
    // }

        // var regValue = JSON.parse(window.localStorage.getItem('register'));
        // var regValue = sessionStorage.getItem('register');
        // var titleplanValue = sessionStorage.getItem('titleplan');
        // var titleplanmapValue = sessionStorage.getItem('titleplanmap');
        // var deedValue = sessionStorage.getItem('deed');
        // var leaseValue = sessionStorage.getItem('lease');
        // var transfer_a4Value = sessionStorage.getItem('transfer_afour');
        // var transfer_a8Value = sessionStorage.getItem('transfer_aeight');

        // printTotal_atCheckout();

        // const element = document.getElementById("printCost_inTable");
        // element.innerHTML= "Hello world";

        // document.getElementById("printCost_inTable").innerHTML= "Hello world";


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

        printTheTotal();

        // document.getElementById("printCost_inTable").textContent= "Hello world";


}

// function printTotal_atCheckout(){
//     document.getElementById("printCost_inTable").textContent= "Hello world";
// }

function printTheTotal(){
    var paragraphNode = document.getElementById("printCost_inTable");
    var printCost = document.createTextNode();
    var twoDP_total = totalAmounttoPay.toFixed(2);

}

function logTotalCost(){
    // var twoDP_total = totalAmounttoPay.toFixed(2);
    // var x = String(twoDP_total);
    sessionStorage.setItem("BasketTotal", "Hello world");
    var y = sessionStorage.getItem("BasketTotal");
    console.log(y);
}