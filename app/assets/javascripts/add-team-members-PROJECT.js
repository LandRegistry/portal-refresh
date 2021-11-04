

function TeamMemberSelected(){

    var TeamMember = document.getElementById("cat").value;

    if (TeamMember === 'AaronFlynn'){
        AaronFlynnSelected();
    }

    if (TeamMember === 'AlexBlewett'){
        AlexBlewettSelected();
    }

    if (TeamMember === 'AndyCarr'){
        AndyCarrSelected();
    }

    if (TeamMember === 'DuncanAnderson'){
        DuncanAndersonSelected();
    }

    if (TeamMember === 'JamesThomas'){
        JamesThomasSelected();
    }

    if (TeamMember === 'JohnBaptisteKelly'){
        JohnBaptisteKellySelected();
    }

    if (TeamMember === 'JohnJames'){
        JohnJamesSelected();
    }

    if (TeamMember === 'JohnTaylor'){
        JohnTaylorSelected();
    }

    if (TeamMember === 'JonParker'){
        JonParkerSelected();
    }

    if (TeamMember === 'JuanPintodelRio'){
        JuanPintodelRioSelected();
    }
    
    if (TeamMember === 'LukasKroeningMaynard'){
        LukasKroeningMaynardSelected();
    }

    if (TeamMember === 'MarkHornsby'){
        MarkHornsbySelected();
    }
}

// AARON FLYNN

function AaronFlynnSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_AaronFlynn = document.createElement('LI');
    li_AaronFlynn.setAttribute("id", "AaronFlynn_id");
  	var tn_AaronFlynn = document.createTextNode("Aaron Flynn");
  	var litn_AaronFlynn = li_AaronFlynn.appendChild(tn_AaronFlynn);
  	listOfMembers.insertBefore(li_AaronFlynn, listOfMembers.childNodes[0]);
    
    var li_AaronFlynn_remove = document.createElement('BUTTON');
    li_AaronFlynn_remove.setAttribute("id", "AaronFlynn_id_remove");
  	li_AaronFlynn_remove.setAttribute("class", "remove_styling");
  	li_AaronFlynn_remove.setAttribute("onclick", "remove_AaronFlynn()");
  	var tn_AaronFlynn_remove = document.createTextNode("Remove");
    
  	var litn_AaronFlynn_remove = li_AaronFlynn_remove.appendChild(tn_AaronFlynn_remove);
  	li_AaronFlynn.appendChild(li_AaronFlynn_remove);
    }

function remove_AaronFlynn(){
	AaronFlynn_id.remove();
}

// ALEX BLEWETT

function AlexBlewettSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_AlexBlewett = document.createElement('LI');
    li_AlexBlewett.setAttribute("id", "AlexBlewett_id");
  	var tn_AlexBlewett = document.createTextNode("Alex Blewett");
  	var litn_AlexBlewett = li_AlexBlewett.appendChild(tn_AlexBlewett);
  	listOfMembers.insertBefore(li_AlexBlewett, listOfMembers.childNodes[0]);
    
    var li_AlexBlewett_remove = document.createElement('BUTTON');
    li_AlexBlewett_remove.setAttribute("id", "AlexBlewett_id_remove");
  	li_AlexBlewett_remove.setAttribute("class", "remove_styling");
  	li_AlexBlewett_remove.setAttribute("onclick", "remove_AlexBlewett()");
  	var tn_AlexBlewett_remove = document.createTextNode("Remove");
    
  	var litn_AlexBlewett_remove = li_AlexBlewett_remove.appendChild(tn_AlexBlewett_remove);
  	li_AlexBlewett.appendChild(li_AlexBlewett_remove);
    }

function remove_AlexBlewett(){
	AlexBlewett_id.remove();
}

// ANDY CARR
function AndyCarrSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_AndyCarr = document.createElement('LI');
    li_AndyCarr.setAttribute("id", "AndyCarr_id");
  	var tn_AndyCarr = document.createTextNode("Andy Carr");
  	var litn_AndyCarr = li_AndyCarr.appendChild(tn_AndyCarr);
  	listOfMembers.insertBefore(li_AndyCarr, listOfMembers.childNodes[0]);
    
    var li_AndyCarr_remove = document.createElement('BUTTON');
    li_AndyCarr_remove.setAttribute("id", "AndyCarr_id_remove");
  	li_AndyCarr_remove.setAttribute("class", "remove_styling");
  	li_AndyCarr_remove.setAttribute("onclick", "remove_AndyCarr()");
  	var tn_AndyCarr_remove = document.createTextNode("Remove");
    
  	var litn_AndyCarr_remove = li_AndyCarr_remove.appendChild(tn_AndyCarr_remove);
  	li_AndyCarr.appendChild(li_AndyCarr_remove);
    }

function remove_AndyCarr(){
	AndyCarr_id.remove();
}

// DUNCAN ANDERSON

function DuncanAndersonSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_DuncanAnderson = document.createElement('LI');
    li_DuncanAnderson.setAttribute("id", "DuncanAnderson_id");
  	var tn_DuncanAnderson = document.createTextNode("Duncan Anderson");
  	var litn_DuncanAnderson = li_DuncanAnderson.appendChild(tn_DuncanAnderson);
  	listOfMembers.insertBefore(li_DuncanAnderson, listOfMembers.childNodes[0]);
    
    var li_DuncanAnderson_remove = document.createElement('BUTTON');
    li_DuncanAnderson_remove.setAttribute("id", "DuncanAnderson_id_remove");
  	li_DuncanAnderson_remove.setAttribute("class", "remove_styling");
  	li_DuncanAnderson_remove.setAttribute("onclick", "remove_DuncanAnderson()");
  	var tn_DuncanAnderson_remove = document.createTextNode("Remove");
    
  	var litn_DuncanAnderson_remove = li_DuncanAnderson_remove.appendChild(tn_DuncanAnderson_remove);
  	li_DuncanAnderson.appendChild(li_DuncanAnderson_remove);
    }

function remove_DuncanAnderson(){
	DuncanAnderson_id.remove();
}

// JAMES THOMAS
function JamesThomasSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_JamesThomas = document.createElement('LI');
    li_JamesThomas.setAttribute("id", "JamesThomas_id");
  	var tn_JamesThomas = document.createTextNode("James Thomas");
  	var litn_JamesThomas = li_JamesThomas.appendChild(tn_JamesThomas);
  	listOfMembers.insertBefore(li_JamesThomas, listOfMembers.childNodes[0]);
    
    var li_JamesThomas_remove = document.createElement('BUTTON');
    li_JamesThomas_remove.setAttribute("id", "JamesThomas_id_remove");
  	li_JamesThomas_remove.setAttribute("class", "remove_styling");
  	li_JamesThomas_remove.setAttribute("onclick", "remove_JamesThomas()");
  	var tn_JamesThomas_remove = document.createTextNode("Remove");
    
  	var litn_JamesThomas_remove = li_JamesThomas_remove.appendChild(tn_JamesThomas_remove);
  	li_JamesThomas.appendChild(li_JamesThomas_remove);
    }

function remove_JamesThomas(){
	JamesThomas_id.remove();
}

// JOHN BAPTISTE KELLY
function JohnBaptisteKellySelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_JohnBaptisteKelly = document.createElement('LI');
    li_JohnBaptisteKelly.setAttribute("id", "JohnBaptisteKelly_id");
  	var tn_JohnBaptisteKelly = document.createTextNode("John Baptiste-Kelly");
  	var litn_JohnBaptisteKelly = li_JohnBaptisteKelly.appendChild(tn_JohnBaptisteKelly);
  	listOfMembers.insertBefore(li_JohnBaptisteKelly, listOfMembers.childNodes[0]);
    
    var li_JohnBaptisteKelly_remove = document.createElement('BUTTON');
    li_JohnBaptisteKelly_remove.setAttribute("id", "JohnBaptisteKelly_id_remove");
  	li_JohnBaptisteKelly_remove.setAttribute("class", "remove_styling");
  	li_JohnBaptisteKelly_remove.setAttribute("onclick", "remove_JohnBaptisteKelly()");
  	var tn_JohnBaptisteKelly_remove = document.createTextNode("Remove");
    
  	var litn_JohnBaptisteKelly_remove = li_JohnBaptisteKelly_remove.appendChild(tn_JohnBaptisteKelly_remove);
  	li_JohnBaptisteKelly.appendChild(li_JohnBaptisteKelly_remove);
    }

function remove_JohnBaptisteKelly(){
	JohnBaptisteKelly_id.remove();
}

// JOHN JAMES
function JohnJamesSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_JohnJames = document.createElement('LI');
    li_JohnJames.setAttribute("id", "JohnJames_id");
  	var tn_JohnJames = document.createTextNode("John James");
  	var litn_JohnJames = li_JohnJames.appendChild(tn_JohnJames);
  	listOfMembers.insertBefore(li_JohnJames, listOfMembers.childNodes[0]);
    
    var li_JohnJames_remove = document.createElement('BUTTON');
    li_JohnJames_remove.setAttribute("id", "JohnJames_id_remove");
  	li_JohnJames_remove.setAttribute("class", "remove_styling");
  	li_JohnJames_remove.setAttribute("onclick", "remove_JohnJames()");
  	var tn_JohnJames_remove = document.createTextNode("Remove");
    
  	var litn_JohnJames_remove = li_JohnJames_remove.appendChild(tn_JohnJames_remove);
  	li_JohnJames.appendChild(li_JohnJames_remove);
    }

function remove_JohnJames(){
	JohnJames_id.remove();
}

// JOHN TAYLOR
function JohnTaylorSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_JohnTaylor = document.createElement('LI');
    li_JohnTaylor.setAttribute("id", "JohnTaylor_id");
  	var tn_JohnTaylor = document.createTextNode("John Taylor");
  	var litn_JohnTaylor = li_JohnTaylor.appendChild(tn_JohnTaylor);
  	listOfMembers.insertBefore(li_JohnTaylor, listOfMembers.childNodes[0]);
    
    var li_JohnTaylor_remove = document.createElement('BUTTON');
    li_JohnTaylor_remove.setAttribute("id", "JohnTaylor_id_remove");
  	li_JohnTaylor_remove.setAttribute("class", "remove_styling");
  	li_JohnTaylor_remove.setAttribute("onclick", "remove_JohnTaylor()");
  	var tn_JohnTaylor_remove = document.createTextNode("Remove");
    
  	var litn_JohnTaylor_remove = li_JohnTaylor_remove.appendChild(tn_JohnTaylor_remove);
  	li_JohnTaylor.appendChild(li_JohnTaylor_remove);
    }

function remove_JohnTaylor(){
	JohnTaylor_id.remove();
}

// JON PARKER
function JonParkerSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_JonParker = document.createElement('LI');
    li_JonParker.setAttribute("id", "JonParker_id");
  	var tn_JonParker = document.createTextNode("Jon Parker");
  	var litn_JonParker = li_JonParker.appendChild(tn_JonParker);
  	listOfMembers.insertBefore(li_JonParker, listOfMembers.childNodes[0]);
    
    var li_JonParker_remove = document.createElement('BUTTON');
    li_JonParker_remove.setAttribute("id", "JonParker_id_remove");
  	li_JonParker_remove.setAttribute("class", "remove_styling");
  	li_JonParker_remove.setAttribute("onclick", "remove_JonParker()");
  	var tn_JonParker_remove = document.createTextNode("Remove");
    
  	var litn_JonParker_remove = li_JonParker_remove.appendChild(tn_JonParker_remove);
  	li_JonParker.appendChild(li_JonParker_remove);
    }

function remove_JonParker(){
	JonParker_id.remove();
}

// JUAN PINTO DEL RIO
function JuanPintodelRioSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_JuanPintodelRio = document.createElement('LI');
    li_JuanPintodelRio.setAttribute("id", "JuanPintodelRio_id");
  	var tn_JuanPintodelRio = document.createTextNode("Juan Pinto-del-Rio");
  	var litn_JuanPintodelRio = li_JuanPintodelRio.appendChild(tn_JuanPintodelRio);
  	listOfMembers.insertBefore(li_JuanPintodelRio, listOfMembers.childNodes[0]);
    
    var li_JuanPintodelRio_remove = document.createElement('BUTTON');
    li_JuanPintodelRio_remove.setAttribute("id", "JuanPintodelRio_id_remove");
  	li_JuanPintodelRio_remove.setAttribute("class", "remove_styling");
  	li_JuanPintodelRio_remove.setAttribute("onclick", "remove_JuanPintodelRio()");
  	var tn_JuanPintodelRio_remove = document.createTextNode("Remove");
    
  	var litn_JuanPintodelRio_remove = li_JuanPintodelRio_remove.appendChild(tn_JuanPintodelRio_remove);
  	li_JuanPintodelRio.appendChild(li_JuanPintodelRio_remove);
    }

function remove_JuanPintodelRio(){
	JuanPintodelRio_id.remove();
}

// LUKAS KROENING MAYNARD
function LukasKroeningMaynardSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_LukasKroeningMaynard = document.createElement('LI');
    li_LukasKroeningMaynard.setAttribute("id", "LukasKroeningMaynard_id");
  	var tn_LukasKroeningMaynard = document.createTextNode("Lukas Kroening-Maynard");
  	var litn_LukasKroeningMaynard = li_LukasKroeningMaynard.appendChild(tn_LukasKroeningMaynard);
  	listOfMembers.insertBefore(li_LukasKroeningMaynard, listOfMembers.childNodes[0]);
    
    var li_LukasKroeningMaynard_remove = document.createElement('BUTTON');
    li_LukasKroeningMaynard_remove.setAttribute("id", "LukasKroeningMaynard_id_remove");
  	li_LukasKroeningMaynard_remove.setAttribute("class", "remove_styling");
  	li_LukasKroeningMaynard_remove.setAttribute("onclick", "remove_LukasKroeningMaynard()");
  	var tn_LukasKroeningMaynard_remove = document.createTextNode("Remove");
    
  	var litn_LukasKroeningMaynard_remove = li_LukasKroeningMaynard_remove.appendChild(tn_LukasKroeningMaynard_remove);
  	li_LukasKroeningMaynard.appendChild(li_LukasKroeningMaynard_remove);
    }

function remove_LukasKroeningMaynard(){
	LukasKroeningMaynard_id.remove();
}

// MARK HORNSBY
​​​​​​​​​function MarkHornsbySelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_MarkHornsby = document.createElement('LI');
    li_MarkHornsby.setAttribute("id", "MarkHornsby_id");
  	var tn_MarkHornsby = document.createTextNode("Mark Hornsby");
  	var litn_MarkHornsby = li_MarkHornsby.appendChild(tn_MarkHornsby);
  	listOfMembers.insertBefore(li_MarkHornsby, listOfMembers.childNodes[0]);
    
    var li_MarkHornsby_remove = document.createElement('BUTTON');
    li_MarkHornsby_remove.setAttribute("id", "MarkHornsby_id_remove");
  	li_MarkHornsby_remove.setAttribute("class", "remove_styling");
  	li_MarkHornsby_remove.setAttribute("onclick", "remove_MarkHornsby()");
  	var tn_MarkHornsby_remove = document.createTextNode("Remove");
    
  	var litn_MarkHornsby_remove = li_MarkHornsby_remove.appendChild(tn_MarkHornsby_remove);
  	li_MarkHornsby.appendChild(li_MarkHornsby_remove);
    }

function remove_MarkHornsby(){
	MarkHornsby_id.remove();
}