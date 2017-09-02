	//helper functions

	function appendWithTemplate(element,template,value){
		var formatted = template.replace("%data%", value);
		element.append(formatted);
	}
	
	var bio = {
		name: "Helena Jagodnik Kuhar",
		role : "Front-End Web Developer",
		contacts: {
			mobile: "(650) 862-2568",
			location: "Palo Alto, CA",
			email: "helena.jagodnik@gmail.com",
			github: "HelenaJagodnikKuhar",
			twitter: "strawberry0_0"
		},
		welcomeMessage: "Enger to see what I can develop in the future.", 
		skills: ["HTML5, CSS3","jQuery","Javascript","Node.js, Express, MongoDB, Heroku ","Black-box Testing","SAP Accounting"],
		biopic: "images/helena.jpg",
		display: function (){
			var formattedName = HTMLheaderName.replace("%data%", this.name);
			var formattedRole= HTMLheaderRole.replace("%data%", this.role);
			$('#header').prepend(formattedName,formattedRole);

			function add_li(template,value){
				var html = template.replace("%data%",value);
				$('#topContacts').append(html);
				$('#footerContacts').append(html);
			}

			add_li(HTMLmobile,this.contacts.mobile);
			add_li(HTMLlocation,this.contacts.location);
			add_li(HTMLemail,this.contacts.email);
			add_li(HTMLtwitter,this.contacts.twitter);
			add_li(HTMLgithub,this.contacts.github);

			var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
			var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
			$('#header').append(formattedBioPic,formattedWelcomeMessage);

			var skillsh3 = $(HTMLskillsStart);
			$('#header').append(skillsh3);

			this.skills.forEach(function(element){
				var formattedSkills = HTMLskills.replace("%data%", element);
				//console.log(element);
				$('#skills').append(formattedSkills);
			})
		}
	};
	var education = {
		schools: [{
			name: "Bachelor of Economics",
			location: "University Of Ljubljana, Faculty of Economics, Slovenia",
			degree: "Bachelor Degree",
			majors: ["Accounting","Audit"],
			dates: "10-1-2007",
			url: "http://www.ef.uni-lj.si/en"
		}],
		onlineCourses: [{
				title: "Build Websites from Scratch with HTML & CSS",
				school: "Udemy",
				dates: "8-10-2015",
				url:"https://www.udemy.com/build-website-scratch/learn/v4/overview"
			},
			{
				title: "Javascript for Beginners Learn by Doing Practical Exercises",
				school: "Udemy",
				dates: "9-24-2016",
				url: "https://www.udemy.com/javascript-for-beginners-introduction-learn-fast-easy/learn/v4/content"
			},
			{
				title: "Node and MongoDB Foundation",
				school: "Node.university",
				dates: "2-5-2016",
				url: "https://node.university/p/node-npm-and-mongodb-foundation"
			}
		],
		display: function (){

			var educationEntry = $(HTMLschoolStart);
			$('#education').append(educationEntry);

			this.schools.forEach(function(e){
				//console.log(e);
				var formattedSchoolName = HTMLschoolName.replace("%data%", e.name );
				var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", e.degree);
				educationEntry.append(formattedSchoolName + formattedSchoolDegree);

				appendWithTemplate(educationEntry,HTMLschoolDates,e.dates);
				appendWithTemplate(educationEntry,HTMLonlineURL,e.url);
				appendWithTemplate(educationEntry,HTMLschoolLocation,e.location);
				appendWithTemplate(educationEntry,HTMLschoolMajor,e.majors);
			})

			var educationEntryOnline =  $(HTMLonlineClasses);
			$('#education').append(educationEntryOnline);

			this.onlineCourses.forEach(function(e){
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", e.title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", e.school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", e.dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", e.url);

				educationEntryOnline.append(formattedOnlineTitle + formattedOnlineSchool);
				educationEntryOnline.append(formattedOnlineDates,formattedOnlineURL);
			})
		}
	};

	var work = {
		jobs: [{
				employer:"A1 Slovenia",
				title: "Accountant",
				location: "Slovenia",
				dates: "March 2009",
				description: "A1 Slovenia company is the largest telecommunications company in Slovenia, part of a global Telekom Austria Group."
			},
			{
				employer:"Welocalize Inc.",
				title: "Data Analyst",
				location: "Cupertino",
				dates: "May 2014",
				description: "Analyzed data for Voice recognition and Apple maps for localization."
			},
			{
				employer:"Azumio Inc.",
				title: "Mobile app tester and community manager",
				location: "Palo Alto",
				dates: "August 2015",
				description: "Azumio is a successful health & fitness startup based in Palo Alto. With apps downloaded more than 75M times across iOS and Android."
			}
		],
		display: function() {


			// //Declare b inside of a.
			// display.projects(workEntry,template,value);

			this.jobs.forEach(function(e) {
				//console.log(e);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", e.employer);
				var formattedTitle  = HTMLworkTitle.replace("%data%", e.title);
				
				var workEntry = $(HTMLworkStart);
				$('#workExperience').append(workEntry);
				workEntry.append(formattedEmployer + formattedTitle);

				appendWithTemplate(workEntry,HTMLworkDates,e.dates);
				appendWithTemplate(workEntry, HTMLworkLocation, e.location);
				appendWithTemplate(workEntry, HTMLworkDescription, e.description);
			})
		}
	};

	var projects = {
		projects: [{
				title: "MENOPAUSE",
				dates: "5-5-2016",
				description: "Solely created a fully functional website helping woman in Menopause. Project For a client’s start-up. I gain the ability to deploy a full website from client to server to database.",
				images: "https://www.metaboliceffect.com/wp-content/uploads/Mature-woman-jogging-000093491971_Large.jpg"
			},
			{
				title: "WHAT TO WEAR FOR RUNNING",
				dates: "3-5-2017",
				description: "An App shows what to wear for running based on the weather conditions. Solely responsive for idea and implementing back-end work. My friend promised me a design and I am still waiting for it.",
				images: "https://s-media-cache-ak0.pinimg.com/originals/30/d0/c9/30d0c98bb950b783854b646baa363740.jpg"
			},
			{
				title: "TCT THERAPIST",
				dates: "8-3-2016",
				description: "I created a functional website for TCT Therapist. Project for a friend's start-up. She has just graduated and her idea was to start her own business. Project is still ongoing.",
				images: "https://www.wellsanfrancisco.com/wp-content/uploads/2014/10/sound-therapy.jpg"
			}
		],
		display: function (){
			var projectEntry = $(HTMLprojectStart);
			$('#projects').append(projectEntry);



			this.projects.forEach(function(e){
				//console.log(e);
				appendWithTemplate(projectEntry,HTMLprojectTitle, e.title);
				appendWithTemplate(projectEntry,HTMLprojectDates, e.dates);
				appendWithTemplate(projectEntry,HTMLprojectDescription, e.description);
				appendWithTemplate(projectEntry,HTMLprojectImage, e.images);
			})
		}
	};

	var array = [bio,education,work,projects];
	array.forEach(function(elem){
		elem.display();
		//console.log(elem);
	})

//map

$('#mapDiv').append(googleMap);

