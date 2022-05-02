function fun1() {
	var rng=document.getElementById('r1'); 
	var i1=document.getElementById('i1'); 
 i1.value=rng.value;
}


function add_r(i1) {
	a = document.getElementById('i1');
	a.value = a.value + i1;
}

		
function f_Date(el,n) {

	el.value = el.value.replace(/[^0-9]/g,'');

	if(el.value.length>n)el.value=el.value.substr(n);

	if(el.value.length==n) el.nextSibling.nextSibling.focus();

}

