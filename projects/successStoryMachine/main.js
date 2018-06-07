var title = document.getElementById("story-title");
var link = document.getElementById("story-link");
var button = document.querySelector("#getStory");
var tweet = document.getElementById("tweet");
var stories = getDefaultStories();

function getDefaultStories(){
 return [
	{
		title: "How to Go From Hobbyist to Professional Developer",
		link: "https://medium.freecodecamp.com/how-to-go-from-hobbyist-to-professional-developer-11a8b8a52b5f"
	},
	{
		title: "I got a Web Developer job 1 month after finishing Free Code Camp",
		link: "https://forum.freecodecamp.com/t/i-got-a-web-developer-job-1-month-after-finishing-free-code-camp/124425"
	},
	{
		title: "How I convinced an employer to take a chance on me and pay me to learn to code.",
		link: "https://medium.freecodecamp.com/getting-your-first-developer-job-whats-the-best-way-1737d0bcba7a"
	},
	{
		title: "Got a react developer Job on my Day 97 of my 100Day Coding Challenge",
		link: "https://forum.freecodecamp.com/t/got-a-react-developer-job-on-my-day-97-of-my-100day-coding-challenge/119551"
	},
	{
		title: "0 to Frontend Developer (8 to 9 months)",
		link: "https://forum.freecodecamp.com/t/0-to-frontend-developer-8-to-9-months/97431"
	},
	{
		title: "Persistence is key!",
		link: "https://forum.freecodecamp.com/t/persistence-is-key/119482/7"
	},
	{
		title: "Landed my first job (full stack web dev)",
		link: "https://forum.freecodecamp.com/t/landed-my-first-job-full-stack-web-dev/115948"
	},
	{
		title: "How I Got My Dream Job (with resources) UPDATE",
		link: "https://forum.freecodecamp.com/t/how-i-got-my-dream-job-with-resources-update/54330"
	},
	{
		title: "45,000/year job thanks to FCC and this is story",
		link: "https://forum.freecodecamp.com/t/45-000-year-job-thanks-to-fcc-and-this-is-story/110912"
	},
	{
		title: "Job offer accepted! 20K more than current salary - thanks FCC! (Story of how I did it)",
		link: "https://forum.freecodecamp.com/t/job-offer-accepted-20k-more-than-current-salary-thanks-fcc-story-of-how-i-did-it/113848"
	},
	{
		title: "I Got a Developer Job!",
		link: "https://forum.freecodecamp.com/t/i-got-a-developer-job/74778"
	},
	{
		title: "So I got my first job as a front-end web developer",
		link: "https://forum.freecodecamp.com/t/so-i-got-my-first-job-as-a-front-end-web-developer/722/3"
	},
	{
		title: "How I went from zero to San Francisco software engineer in 12 months",
		link: "https://medium.freecodecamp.com/how-i-learned-to-code-and-earned-a-job-in-silicon-valley-changing-my-life-along-the-way-a3af854855fa"
	},
	{
		title: "How to Get a Developer Job in Less Than a Year",
		link: "https://medium.freecodecamp.com/how-to-get-a-developer-job-in-less-than-a-year-c27bbfe71645"
	},
	{
		title: "I got my first programming job after 3 months",
		link: "https://forum.freecodecamp.com/t/i-got-my-first-programming-job-after-3-months/74767/3"
	}
 ];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

	button.addEventListener("click", function(){
		document.getElementById("instructions").style.display = 'none';
		var min = 0;
		var max = stories.length;
	if(max === 0){
    stories = getDefaultStories();
    max = stories.length;
  }
  	var num = getRandomInt(min, max);
		var story = stories[num];
		var removeStory = stories.splice(num, 1);

		
		title.textContent = '"' + story.title + '"';
		link.href = story.link;

		//this line below empties the container so we don't get multiple tweet buttons
		document.getElementById("container").innerHTML = '';

		twttr.widgets.createShareButton(
  		'/',
		  document.getElementById('container'),
		  {
		    size: "large",
		    text: story.link
		  }
		);
	twttr.widgets.load()
		});




