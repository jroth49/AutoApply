
function wait() {
	for(let x = 0; x < 90000000; x++) { if(x == 89999999) { console.log("Starting Next Action..."); } else { console.log(); } }
}

function checkForError() {
	let ptag = document.getElementsByTagName("p");
	for (let z = 0; z < ptag.length; z++) {
		if(ptag[z].textContent.includes("Please enter a valid answer")) {
			return true;
		}
	}
	return false;
}

function main() {  

	let links = document.getElementsByClassName("disabled ember-view job-card-container__link job-card-list__title");
	let next = document.getElementsByClassName("artdeco-button artdeco-button--2 artdeco-button--primary ember-view");

	for(let i = 0; i < links.length; i++) {
		if(i != 0) { console.log("Next Job..."); }
		console.log("Job Title: " + links[i].textContent);
		links[i].click();
		wait();
		let apply = document.getElementsByClassName("jobs-apply-button artdeco-button artdeco-button--3 artdeco-button--primary ember-view");
		if(apply.length == 0) { console.log("You've already applied for this job"); continue; } else { apply[0].click(); wait(); }
		while (next[0].offsetParent != null) {
			console.log("Next page...");
			next[0].click(); wait();
			if (checkForError() == true) { console.log("Error Field Needs Info"); break; }
		}
		if (checkForError() == true) { break; }
		if(apply.length == 0) { console.log("No Apply Button Found..."); continue; }
		wait();
	}
}

main();
alert("You need to enter user info!");
