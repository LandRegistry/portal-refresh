var howmanyMembersSelected = 0;
var anyMemberSelected = false;
var AaronFlynn, AlexBlewett, AndyCarr, DuncanAnderson, JamesThomas, JohnBaptisteKelly, JohnJames, JohnTaylor, JonParker, JuanPintodelRio, LukasKroeningMaynard, MarkHornsby, MelviaMathew, NeilButler, NicolaAndrews, PatGannon, RomaniDavies, SimonSkidmore, SueWatchman, TonyWatson;
AaronFlynn= AlexBlewett= AndyCarr= DuncanAnderson= JamesThomas= JohnBaptisteKelly= JohnJames= JohnTaylor= JonParker= JuanPintodelRio= LukasKroeningMaynard= MarkHornsby= MelviaMathew= NeilButler= NicolaAndrews= PatGannon= RomaniDavies= SimonSkidmore= SueWatchman= TonyWatson = false;

function TeamMemberSelected(){

    var TeamMember = document.getElementById("cat").value;

    if ((TeamMember === 'AaronFlynn') && (AaronFlynn === false)){
        AaronFlynnSelected();
    }

    if ((TeamMember === 'AlexBlewett') && (AlexBlewett === false)){
        AlexBlewettSelected();
    }

    if ((TeamMember === 'AndyCarr') && (AndyCarr === false)){
        AndyCarrSelected();
    }

    if ((TeamMember === 'DuncanAnderson') && (DuncanAnderson === false)){
        DuncanAndersonSelected();
    }

    if ((TeamMember === 'JamesThomas') && (JamesThomas === false)){
        JamesThomasSelected();
    }

    if ((TeamMember === 'JohnBaptisteKelly') && (JohnBaptisteKelly === false)){
        JohnBaptisteKellySelected();
    }

    if ((TeamMember === 'JohnJames') && (JohnJames === false)){
        JohnJamesSelected();
    }

    if ((TeamMember === 'JohnTaylor') && (JohnTaylor === false)){
        JohnTaylorSelected();
    }

    if ((TeamMember === 'JonParker') && (JonParker === false)){
        JonParkerSelected();
    }

    if ((TeamMember === 'JuanPintodelRio') && (JuanPintodelRio === false)){
        JuanPintodelRioSelected();
    }
    
    if ((TeamMember === 'LukasKroeningMaynard') && (LukasKroeningMaynard === false)){
        LukasKroeningMaynardSelected();
    }

    if ((TeamMember === 'MarkHornsby') && (MarkHornsby === false)){
        MarkHornsbySelected();
    }

    if ((TeamMember === 'MelviaMathew') && (MelviaMathew === false)){
        MelviaMathewSelected();
    }

    if ((TeamMember === 'NeilButler') && (NeilButler === false)){
        NeilButlerSelected();
    }

    if ((TeamMember === 'NicolaAndrews') && (NicolaAndrews === false)){
        NicolaAndrewsSelected();
    }

    if ((TeamMember === 'PatGannon') && (PatGannon === false)){
        PatGannonSelected();
    }

    if ((TeamMember === 'RomaniDavies') && (RomaniDavies === false)){
        RomaniDaviesSelected();
    }

    if ((TeamMember === 'SimonSkidmore') && (SimonSkidmore === false)){
        SimonSkidmoreSelected();
    }

    if ((TeamMember === 'SueWatchman') && (SueWatchman === false)){
        SueWatchmanSelected();
    }

    if ((TeamMember === 'TonyWatson') && (TonyWatson === false)){
        TonyWatsonSelected();
    }

}

function CreateDeleteHeading(){
    if ((howmanyMembersSelected === 1) && (anyMemberSelected === false)){
        anyMemberSelected = true;
        console.log('CREATE HEADING');

        var header = document.getElementById("addHeaderhere");
        var li_header = document.createElement('LI');
        li_header.setAttribute("id", "header_id");
        li_header.setAttribute("class", "govuk-label form-label-bold");
        li_header.setAttribute("style", "margin-top:25px;");

        var tn_header = document.createTextNode("Select the product owner");
        var litn_header = li_header.appendChild(tn_header);
        header.insertBefore(li_header, header.childNodes[0]);
    }
    if ((howmanyMembersSelected === 0) && (anyMemberSelected === true)){
        anyMemberSelected = false;
        console.log('DELETE HEADING');

        header_id.remove();
    }
}


// // AARON FLYNN

// function AaronFlynnSelected() {

// 	var listOfMembers = document.getElementById("addMemberListhere");

// 	var li_AaronFlynn = document.createElement('LI');
// 	li_AaronFlynn.setAttribute('id', 'AaronFlynn_id');

// 	var checkbox_AaronFlynn = document.createElement('input');
//     checkbox_AaronFlynn.type = 'checkbox';
//     checkbox_AaronFlynn.id = 'AaronFlynn_checkbox';
//     checkbox_AaronFlynn.name = 'AaronFlynn';
//     checkbox_AaronFlynn.value = 'AaronFlynn';
//     checkbox_AaronFlynn.setAttribute('class', 'govuk-checkboxes__input');


//     // document.getElementById("AaronFlynn_checkbox").className = "govuk-checkboxes__input";
    
//   	var label_AaronFlynn = document.createElement('label');
//     label_AaronFlynn.htmlFor = 'AaronFlynn';
//     label_AaronFlynn.appendChild(document.createTextNode('Aaron Flynn'));
//     label_AaronFlynn.setAttribute('class', 'govuk-label govuk-checkboxes__label');
//     label_AaronFlynn.setAttribute('style', 'padding: 8px 8px 5px 15px;');
    
//   	var button_AaronFlynn = document.createElement('button');
//   	button_AaronFlynn.setAttribute('id', 'AaronFlynn_id_remove');
//     button_AaronFlynn.setAttribute('class', 'removeButton');
// 	  button_AaronFlynn.setAttribute('onclick', 'remove_AaronFlynn()');
//     button_AaronFlynn.setAttribute('style', 'padding-left:0px;');
//     tn_button_AaronFlynn = document.createTextNode("remove");
//     litn_button_AaronFlynn = button_AaronFlynn.appendChild(tn_button_AaronFlynn);
    
 
//     listOfMembers.appendChild(li_AaronFlynn);
//   	li_AaronFlynn.appendChild(checkbox_AaronFlynn);
//     li_AaronFlynn.appendChild(label_AaronFlynn);
//     li_AaronFlynn.appendChild(button_AaronFlynn);
    
//   	howmanyMembersSelected += 1;
//     CreateDeleteHeading();
//     }
    
// function remove_AaronFlynn(){
// 	AaronFlynn_id.remove();
//   	howmanyMembersSelected -= 1;
//     CreateDeleteHeading();

    
// }

// AARON FLYNN

function AaronFlynnSelected() {
  AaronFlynn = true;

	var listOfMembers = document.getElementById("MembersGoHere");

	var div_AaronFlynn = document.createElement('DIV');
	div_AaronFlynn.setAttribute('id', 'AaronFlynn_id');
  div_AaronFlynn.setAttribute('class', 'govuk-checkboxes__item');
  div_AaronFlynn.setAttribute('style', 'position: absolute;');



	var checkbox_AaronFlynn = document.createElement('input');
    checkbox_AaronFlynn.type = 'checkbox';
    checkbox_AaronFlynn.id = 'AaronFlynn_checkbox';
    checkbox_AaronFlynn.name = 'AaronFlynn';
    checkbox_AaronFlynn.value = 'AaronFlynn';
    // checkbox_AaronFlynn.setAttribute('class', 'govuk-checkboxes__input');
    checkbox_AaronFlynn.className = "govuk-checkboxes__input";
    
  	var label_AaronFlynn = document.createElement('label');
    label_AaronFlynn.htmlFor = 'AaronFlynn';
    label_AaronFlynn.appendChild(document.createTextNode('Aaron Flynn'));
    label_AaronFlynn.setAttribute('class', 'govuk-label govuk-checkboxes__label');
    label_AaronFlynn.setAttribute('style', 'padding: 11.5px 10px 5px 0px;');
    
  	var button_AaronFlynn = document.createElement('button');
    console.log('button created');
  	button_AaronFlynn.setAttribute('id', 'AaronFlynn_id_remove');
    button_AaronFlynn.setAttribute('class', 'removeButton');
	  button_AaronFlynn.setAttribute('onclick', 'remove_AaronFlynn()');
    button_AaronFlynn.setAttribute('style', 'padding-left:6px;');
    tn_button_AaronFlynn = document.createTextNode("remove");
    litn_button_AaronFlynn = button_AaronFlynn.appendChild(tn_button_AaronFlynn);
    console.log('button complete');
    
 
    listOfMembers.appendChild(div_AaronFlynn);
  	div_AaronFlynn.appendChild(checkbox_AaronFlynn);
    div_AaronFlynn.appendChild(label_AaronFlynn);
    label_AaronFlynn.appendChild(button_AaronFlynn);


    
  	howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }
    
function remove_AaronFlynn(){
	AaronFlynn_id.remove();
  	howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    AaronFlynn = false;

    
}

// ALEX BLEWETT

function AlexBlewettSelected(){
  AlexBlewett = true;

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
    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_AlexBlewett(){
	AlexBlewett_id.remove();
    howmanyMembersSelected -= 1;
    CreateDeleteHeading();

    AlexBlewett = false;
}

// ANDY CARR
function AndyCarrSelected(){
  AndyCarr = true;

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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_AndyCarr(){
	AndyCarr_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
    AndyCarr = false;
}

// DUNCAN ANDERSON

function DuncanAndersonSelected(){
  DuncanAnderson = true;

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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_DuncanAnderson(){
	DuncanAnderson_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
    DuncanAnderson = false;
}

// JAMES THOMAS
function JamesThomasSelected(){
  JamesThomas = true;
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_JamesThomas(){
	JamesThomas_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
    JamesThomas = false;

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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_JohnBaptisteKelly(){
	JohnBaptisteKelly_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_JohnJames(){
	JohnJames_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_JohnTaylor(){
	JohnTaylor_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_JonParker(){
	JonParker_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_JuanPintodelRio(){
	JuanPintodelRio_id.remove();
    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_LukasKroeningMaynard(){
	LukasKroeningMaynard_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // MARK HORNSBY
function MarkHornsbySelected(){
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

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_MarkHornsby(){
	MarkHornsby_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}


// // MELVIA MATHEW

function MelviaMathewSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_MelviaMathew = document.createElement('LI');
    li_MelviaMathew.setAttribute("id", "MelviaMathew_id");
  	var tn_MelviaMathew = document.createTextNode("Melvia Mathew");
  	var litn_MelviaMathew = li_MelviaMathew.appendChild(tn_MelviaMathew);
  	listOfMembers.insertBefore(li_MelviaMathew, listOfMembers.childNodes[0]);
    
    var li_MelviaMathew_remove = document.createElement('BUTTON');
    li_MelviaMathew_remove.setAttribute("id", "MelviaMathew_id_remove");
  	li_MelviaMathew_remove.setAttribute("class", "remove_styling");
  	li_MelviaMathew_remove.setAttribute("onclick", "remove_MelviaMathew()");
  	var tn_MelviaMathew_remove = document.createTextNode("Remove");
    
  	var litn_MelviaMathew_remove = li_MelviaMathew_remove.appendChild(tn_MelviaMathew_remove);
  	li_MelviaMathew.appendChild(li_MelviaMathew_remove);

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_MelviaMathew(){
	MelviaMathew_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // NEIL BUTLER

function NeilButlerSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_NeilButler = document.createElement('LI');
    li_NeilButler.setAttribute("id", "NeilButler_id");
  	var tn_NeilButler = document.createTextNode("Neil Butler");
  	var litn_NeilButler = li_NeilButler.appendChild(tn_NeilButler);
  	listOfMembers.insertBefore(li_NeilButler, listOfMembers.childNodes[0]);
    
    var li_NeilButler_remove = document.createElement('BUTTON');
    li_NeilButler_remove.setAttribute("id", "NeilButler_id_remove");
  	li_NeilButler_remove.setAttribute("class", "remove_styling");
  	li_NeilButler_remove.setAttribute("onclick", "remove_NeilButler()");
  	var tn_NeilButler_remove = document.createTextNode("Remove");
    
  	var litn_NeilButler_remove = li_NeilButler_remove.appendChild(tn_NeilButler_remove);
  	li_NeilButler.appendChild(li_NeilButler_remove);

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_NeilButler(){
	NeilButler_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // NICOLA ADAMS

function NicolaAndrewsSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_NicolaAndrews = document.createElement('LI');
    li_NicolaAndrews.setAttribute("id", "NicolaAndrews_id");
  	var tn_NicolaAndrews = document.createTextNode("Nicola Andrews");
  	var litn_NicolaAndrews = li_NicolaAndrews.appendChild(tn_NicolaAndrews);
  	listOfMembers.insertBefore(li_NicolaAndrews, listOfMembers.childNodes[0]);
    
    var li_NicolaAndrews_remove = document.createElement('BUTTON');
    li_NicolaAndrews_remove.setAttribute("id", "NicolaAndrews_id_remove");
  	li_NicolaAndrews_remove.setAttribute("class", "remove_styling");
  	li_NicolaAndrews_remove.setAttribute("onclick", "remove_NicolaAndrews()");
  	var tn_NicolaAndrews_remove = document.createTextNode("Remove");
    
  	var litn_NicolaAndrews_remove = li_NicolaAndrews_remove.appendChild(tn_NicolaAndrews_remove);
  	li_NicolaAndrews.appendChild(li_NicolaAndrews_remove);

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_NicolaAndrews(){
	NicolaAndrews_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // PAT GANNON
function PatGannonSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_PatGannon = document.createElement('LI');
    li_PatGannon.setAttribute("id", "PatGannon_id");
  	var tn_PatGannon = document.createTextNode("Pat Gannon");
  	var litn_PatGannon = li_PatGannon.appendChild(tn_PatGannon);
  	listOfMembers.insertBefore(li_PatGannon, listOfMembers.childNodes[0]);
    
    var li_PatGannon_remove = document.createElement('BUTTON');
    li_PatGannon_remove.setAttribute("id", "PatGannon_id_remove");
  	li_PatGannon_remove.setAttribute("class", "remove_styling");
  	li_PatGannon_remove.setAttribute("onclick", "remove_PatGannon()");
  	var tn_PatGannon_remove = document.createTextNode("Remove");
    
  	var litn_PatGannon_remove = li_PatGannon_remove.appendChild(tn_PatGannon_remove);
  	li_PatGannon.appendChild(li_PatGannon_remove);

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_PatGannon(){
	PatGannon_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // ROMANI DAVIES

function RomaniDaviesSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_RomaniDavies = document.createElement('LI');
    li_RomaniDavies.setAttribute("id", "RomaniDavies_id");
  	var tn_RomaniDavies = document.createTextNode("Romani Davies");
  	var litn_RomaniDavies = li_RomaniDavies.appendChild(tn_RomaniDavies);
  	listOfMembers.insertBefore(li_RomaniDavies, listOfMembers.childNodes[0]);
    
    var li_RomaniDavies_remove = document.createElement('BUTTON');
    li_RomaniDavies_remove.setAttribute("id", "RomaniDavies_id_remove");
  	li_RomaniDavies_remove.setAttribute("class", "remove_styling");
  	li_RomaniDavies_remove.setAttribute("onclick", "remove_RomaniDavies()");
  	var tn_RomaniDavies_remove = document.createTextNode("Remove");
    
  	var litn_RomaniDavies_remove = li_RomaniDavies_remove.appendChild(tn_RomaniDavies_remove);
  	li_RomaniDavies.appendChild(li_RomaniDavies_remove);

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_RomaniDavies(){
	RomaniDavies_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // // SIMON SKIDMORE

function SimonSkidmoreSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_SimonSkidmore = document.createElement('LI');
    li_SimonSkidmore.setAttribute("id", "SimonSkidmore_id");
  	var tn_SimonSkidmore = document.createTextNode("Simon Skidmore");
  	var litn_SimonSkidmore = li_SimonSkidmore.appendChild(tn_SimonSkidmore);
  	listOfMembers.insertBefore(li_SimonSkidmore, listOfMembers.childNodes[0]);
    
    var li_SimonSkidmore_remove = document.createElement('BUTTON');
    li_SimonSkidmore_remove.setAttribute("id", "SimonSkidmore_id_remove");
  	li_SimonSkidmore_remove.setAttribute("class", "remove_styling");
  	li_SimonSkidmore_remove.setAttribute("onclick", "remove_SimonSkidmore()");
  	var tn_SimonSkidmore_remove = document.createTextNode("Remove");
    
  	var litn_SimonSkidmore_remove = li_SimonSkidmore_remove.appendChild(tn_SimonSkidmore_remove);
  	li_SimonSkidmore.appendChild(li_SimonSkidmore_remove);

    howmanyMembersSelected += 1;
    CreateDeleteHeading();
    }

function remove_SimonSkidmore(){
	SimonSkidmore_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // // SUE WATCHMAN

function SueWatchmanSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_SueWatchman = document.createElement('LI');
    li_SueWatchman.setAttribute("id", "SueWatchman_id");
  	var tn_SueWatchman = document.createTextNode("Sue Watchman");
  	var litn_SueWatchman = li_SueWatchman.appendChild(tn_SueWatchman);
  	listOfMembers.insertBefore(li_SueWatchman, listOfMembers.childNodes[0]);
    
    var li_SueWatchman_remove = document.createElement('BUTTON');
    li_SueWatchman_remove.setAttribute("id", "SueWatchman_id_remove");
  	li_SueWatchman_remove.setAttribute("class", "remove_styling");
  	li_SueWatchman_remove.setAttribute("onclick", "remove_SueWatchman()");
  	var tn_SueWatchman_remove = document.createTextNode("Remove");
    
  	var litn_SueWatchman_remove = li_SueWatchman_remove.appendChild(tn_SueWatchman_remove);
  	li_SueWatchman.appendChild(li_SueWatchman_remove);

      howmanyMembersSelected += 1;
      CreateDeleteHeading();
    }

function remove_SueWatchman(){
	SueWatchman_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}

// // // TONY WATSON
function TonyWatsonSelected(){
	var listOfMembers = document.getElementById("addMemberListhere");
    
    var li_TonyWatson = document.createElement('LI');
    li_TonyWatson.setAttribute("id", "TonyWatson_id");
  	var tn_TonyWatson = document.createTextNode("Tony Watson");
  	var litn_TonyWatson = li_TonyWatson.appendChild(tn_TonyWatson);
  	listOfMembers.insertBefore(li_TonyWatson, listOfMembers.childNodes[0]);
    
    var li_TonyWatson_remove = document.createElement('BUTTON');
    li_TonyWatson_remove.setAttribute("id", "TonyWatson_id_remove");
  	li_TonyWatson_remove.setAttribute("class", "remove_styling");
  	li_TonyWatson_remove.setAttribute("onclick", "remove_TonyWatson()");
  	var tn_TonyWatson_remove = document.createTextNode("Remove");
    
  	var litn_TonyWatson_remove = li_TonyWatson_remove.appendChild(tn_TonyWatson_remove);
  	li_TonyWatson.appendChild(li_TonyWatson_remove);

      howmanyMembersSelected += 1;
      CreateDeleteHeading();
    }

function remove_TonyWatson(){
	TonyWatson_id.remove();

    howmanyMembersSelected -= 1;
    CreateDeleteHeading();
}