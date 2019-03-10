const commands = [
  'intro <- Displays the intro',
  'commands <- Displays the command list',
  'clear <- Clears the console',
  'resume <- Clears the console and displays my resume',
  'contact <- Opens an email client for you to contact me',
  'rsnake <- Play my React version of Snake (press an arrow key to start)',
  ' '
];

const intro = [
  'Jess Brisson',
  'jessbrisson@gmail.com',
  ' ',
  'Welcome to my interactive console. The GUI has been ripped away from this site, however, you do have access to some commands to navigate around:',
  ' ',
  ...commands,
  'Type in a command then press enter/return execute it',
  'NOTE: Commands ARE case-sensitive',
  ' '
];

let emailASCII = [
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
  '@@                                                     @@',
  '@@ @@@                                             @@@ @@',
  '@@ @@@ @@@@                                   @@@@ @@@ @@',
  '@@     @@@@ @@@@                         @@@@ @@@@     @@',
  '@@          @@@@ @@@@               @@@@ @@@@          @@',
  '@@               @@@@ @@@@     @@@@ @@@@               @@',
  '@@                    @@@@ @@@ @@@@                    @@',
  '@@                         @@@                         @@',
  '@@                                                     @@',
  '@@      m a i l t o : j e s s b r i s s o n [a t]      @@',
  '@@                                                     @@',
  '@@               g m a i l [d o t] c o m               @@',
  '@@                                                     @@',
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
  ''
];

const resume = [
  '<h1>JESS BRISSON</h1>',
  '<a href="mailto:jessbrisson@gmail.com">jessbrisson@gmail.com</a><br>',
  '<a href="tel:19208437675">1.920.843.7675</a>',
  '<br><br>',
  '<h2>MY MISSION:</h2>',
  '<p>To become a member of a strong and innovative company; one where I will grow and expand as a professional, and never fall behind the curve. To be an integral member of a team of professionals that seek expansion and success. To deliver, and leave each project with a sense of accomplishment. This is my mission.</p>',
  '<br>',
  '<br>',
  '<h2>EDUCATION:</h2>',
  '<h3>Fox Valley Technical College</h3>',
  '<p><small>August 2013-December 2015</small></p>',
  '<p>Web Development & Design. 3.9gpa. Associates Degree Earned</p>',
  '<p>HTML, CSS, JavaScript, PHP, Photoshop, Agile Development, Accessibility, UX, and Project Management.</p>',
  '<br>',
  '<br>',
  '<h2>SKILLS:</h2>',
  '<p>HTML5: Semantics are important for accessibility and SEO. </p>',
  '<p>I deliver clean, concise markup that is accessible to its users.</p>',
  '<br>',
  '<p>CSS: Modern development with SCSS, CSS Flexbox, Bootstrap, can drive a design from start to finish faster than before. </p>',
  '<p>Implementing these technologies while keeping the code minimalist and clean is how I roll.</p>',
  '<br>',
  '<p>JavaScript: The web language that started it all with me. </p>',
  '<p>ES6 with Babel, React, Vue, and even Typescript are some of the technologies I utilize daily. </p>',
  '<p>Programming paradigms such as functional and OOP have kept my code clean and consistent. </p>',
  '<p>While this may seem contradictive, knowing such paradigms keeps me flexible as a developer.</p>',
  '<br>',
  '<p>PHP: PHP has been the main back-end language I have been utilizing. </p>',
  '<p>From simple page layouts, to full MVC structured programs, on the fly report generating systems, and AJAX driven blog pages, growth in the back-end has led me to be a well-rounded full stack developer.</p>',
  '<br>',
  '<p>Git: This technology, while so simple, is so powerful. </p>',
  '<p>Another technology I adore and use daily.</p>',
  '<br>',
  '<p>It doesn\'t stop there however. I am looking to be part of a team that utilizes modern technologies; My passion for the front-end, especially JavaScript, has me looking for amazing opportunities to fulfill my purpose as a JavaScript applications developer.</p>',
  '<br>',
  '<br>',
  '<p><em>Skills Summary: JavaScript, CSS/SCSS, Gulp, Babel, HTML5, REST API, JSON, jQuery, React, VueJS, AJAX, Bootstrap, PHP, Shell(Bash), WordPress, HubSpot, CodeIgniter, Foundation for emails, Photoshop, Git, Agile Development, Office Suite (Google, Microsoft).</em></p>',
  '<br>',
  '<br>',
  '<h2>EXPERIENCE:</h2>',
  '<h3>Freelance Web Developer</h3>',
  '<p><small>August 18 - Current</small></p>',
  '<br>',
  '<h3>Element Creative</h3>',
  '<p><small>May 16 – August 18</small></p>',
  '<p>JavaScript, PHP, HTML5, SCSS/CSS, Foundation for Emails, Bootstrap, WordPress, HubSpot, CodeIgniter</p>',
  '<p>Examples of work: <a href="http://abouthealth.com/" target="_blank">abouthealth.com</a>, <a href="https://sadoff.com/" target="_blank">sadoff.com</a>, <a href="https://1855beef.com/" target="_blank">1855beef.com</a>, <a href="https://www.unisoncu.org/" target="_blank">unisoncu.org</a>, <a href="https://www.faithtechnologies.com/careers/" target="_blank">faithtechnologies.com/careers</a>, <a href="https://www.dbsbenefits.com/" target="_blank">dbsbenefits.com</a></p>',
  '<br>',
  '<h2>Stellar Blue Technologies</h2>',
  '<p><small>September 15 – May 16</small></p>',
  '<p>Front-End Web Development With WordPress</p>',
  '<p>Examples of work: <a href="https://riverviewgardens.org/" target="_blank">riverviewgardens.org</a>, <a href="http://castlepierce.com/" target="_blank">castlepierce.com</a>, <a href="http://gbbg.org/" target="_blank">gbbg.org</a>, <a href="https://crytycal.com/" target="_blank">crytycal.com</a>, <a href="http://ati-ae.com/" target="_blank">ati-ae.com</a>',
  '<br>',
  '<h2>WebFitters</h2>',
  '<p><small>May 15 – August 15</small></p>',
  '<p>Front-End Web Development on the Codeigniter platform</p>',
  '<br>',
  '<h2>Fox Valley Technical College</h2>',
  '<p><small>August 14-December 15</small></p>',
  '<p>PHP, JavaScript, CSS, HTML Tutor</p>',
  '<br>',
  '<br>',
  '<p><em>To get more info give me a jingle or type "contact" in the console!</em></p>',
  '<br>'
];

let cnsl_bsy = false, attempted_command = false;

function console_ready() {
  input.focus();
  cnsl_bsy = false;
  if(attempted_command === true) {
    input.style.color = "#1abc9c";
    input.value = input.value.substr(0, input.value.indexOf(" <-"));
  }
  attempted_command = false;
}

function console_busy() {
  input.blur();
  cnsl_bsy = true;
  if(attempted_command == true) {
    input.style.color = "#f00";
    input.value += " <- Command executing, please wait.";
  }
}

// Function that splits strings contained in arrays
function array_string_splitter(arr) {
  return arr.map(function(v,i) {
    return v.split('');
  });
}

const intro_split = array_string_splitter(intro);
const resume_split = array_string_splitter(resume);
const cmd_exec = document.getElementById('cmd-exec');
const input = document.querySelector('input');

function cce() {
  cmd_exec.innerHTML = "";
}

// Print out the array strings created from array_string_splitter
function print_array_strings(arr) {
  console_busy();
  let interval = 0;
  arr.forEach((v,i) => {
    v.forEach((vv,ii) => {
      setTimeout(() => {
        cmd_exec.innerHTML += vv;
        if(ii + 1 >= v.length)
          cmd_exec.innerHTML += '<br>';
      }, interval);
      ii + 1 >= v.length ? interval += 250 : interval += 33;
    });
    if(i + 1 >= arr.length) {
      setTimeout(() => {
        console_ready();
      }, interval);
    }
  });
}

function print_intro() {
  print_array_strings(intro_split);
}

function print_by_line(arr) {
  console_busy();
  var interval = 0;
  arr.forEach((v, i) => {
    setTimeout(() => {
      cmd_exec.innerHTML += v
      if(i + 1 >= arr.length) {
        console_ready();
      }
    }, interval);
    interval += 50;
  });
}

function print_resume() {
  cce();
  print_by_line(resume);
}

function print_commands() {
  print_by_line(commands);
}

function print_email_ascii(callback) {
  let interval = 0, ealen = emailASCII.length;
  emailASCII.forEach((v,i) => {
    setTimeout(() => {
      let ei  = ealen - (i + 1);
        console.log(v);

        if(ei === 0) {
          if(typeof callback === 'function') callback();
        }
    }, interval);
    interval += 33;
  });
}

function command_check() {
  document.onkeypress = ev => {
    if(ev.which == 13) {
      if(!cnsl_bsy) {
        if(input.value === "clear") cce();
        if(input.value === "intro") print_intro();
        if(input.value === "resume") print_resume();
        if(input.value === "commands") print_commands();
        if(input.value === "contact") print_email_ascii(
          function() {window.location.href = "mailto:jessbrisson@gmail.com?subject=Earth%20to%20Jess%20Brisson!%20Lets%20talk%20\.\.\.";
        });
        if(input.value !== "clear"  && input.value !== "intro"   &&
          input.value !== "resume" && input.value !== "contact" &&
          input.value !== "commands" && input.value !== "rsnake") {
           print_array_strings(array_string_splitter(["'" + input.value + "' is not a command, to see valid commands please type 'commands' and press enter/return.", "", "Remember, commands are case-sensitive", " "]), null);
        }
        if(input.value === "rsnake") {
          document.querySelector('#rsnake').style.display = "block";
          document.querySelector('#gameboard').focus();
        }
        input.value = "";
      } else {
        attempted_command = true;
        console_busy();
      }
    }
  }
}

command_check();
print_intro();

window.addEventListener('click', ev => {
  if(ev.target == document.querySelector('#gameboard'))
    document.querySelector('#gameboard').focus();
  else
    input.focus();
});