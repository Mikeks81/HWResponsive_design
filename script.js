function show(){
	var nav = document.getElementById('navi');
	var cc = document.getElementById('cc');
	
	if ((nav.style.display === "") || (nav.style.display === "none") ){
		nav.style.display="block";
		cc.style.marginTop = '170px';
	}
	else if (nav.style.display === 'block'){
		nav.style.display = 'none';
		cc.style.marginTop = '0px'; 
	}
}