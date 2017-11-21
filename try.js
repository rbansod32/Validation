    
function funfname(){
	var fname = document.getElementById('first').value;
	if(fname==null || fname==""){
		document.getElementById("errFirst").innerHTML = "<span style='color: red'>Please enter your first name!</span>";
}else
        document.getElementById("errFirst").innerHTML = "<span style='color: green'>Ok!</span>";
}

function funlname(){
	var lname = document.getElementById('last').value;
	if(lname==null || lname==""){
		document.getElementById("errLast").innerHTML = "<span style='color: red'>Please enter your last name!</span>";
}else
        document.getElementById("errLast").innerHTML = "<span style='color: green'>Ok!</span>";
}

function funemail(){
    var email = document.getElementById('email').value;
	if(email==null || email==""){
		document.getElementById("errEmail").innerHTML = "<span style='color: red'>Please enter your email!</span>";
}
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
        document.getElementById('errEmail').innerHTML = "<span style='color: red'>Enter a valid email address!</span>";
    else
        document.getElementById('errEmail').innerHTML = "<span style='color: green'>Ok!</span>";

}

function funuid(){
	var uid = document.getElementById('uid').value;
	if(uid==null || uid==""){
		document.getElementById("errUid").innerHTML = "<span style='color: red'>Please enter your uid!</span>";
}else
        document.getElementById('errUid').innerHTML = "<span style='color: green'>Ok!</span>";
}

function funpass(){
	var password = document.getElementById('password').value;
	if(password==null || password==""){
		document.getElementById("errPassword").innerHTML = "<span style='color: red'>Please enter your password!</span>";
}else
        document.getElementById('errPassword').innerHTML = "<span style='color: green'>Ok!</span>";
}

function funcnfpass(){
	var first = document.getElementById('password').value;
    var second = document.getElementById('confirm').value;
        if (second != first)
            document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
        else
            document.getElementById('errConfirm').innerHTML = "<span style='color: green'>Ok!</span>";
}


