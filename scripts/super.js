
const intro = [
  'Jess Brisson',
  'The guy who wrote this silly HTML console',
  'jessbrisson@gmail.com',
  ' ',
  'Welcome to the Jess Brisson super minimalist console of awesomeness. The GUI has been ripped away from this site, however, you do have access to some commands to navigate around:',
  ' ',
  'intro <- Displays this intro',
  'commands <- Displays the command list',
  'clear <- Clears the console',
  'resume <- Clears the console and displays my resume',
  'contact <- Opens an email client for you to contact me',
  ' ',
  'Type in a command then press enter/return execute it',
  'NOTE: Commands ARE case-sensitive',
  ' '
];

const commands = [
  'intro <- Displays the intro<br>',
  'commands <- Displays the command list<br>',
  'clear <- Clears the console<br>',
  'resume <- Clears the console and displays my resume<br>',
  'contact <- Opens an email client for you to contact me<br>',
  '<br>'
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
  // '@@                                                     @@',
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@',
  ''
]
//.map(function(v,i) {
//   return v.replace(/\s/g, '&nbsp;');
// });

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
  '<p><small>August 2013-December 2015 *Degree Earned</small></p>',
  '<p>Web Development & Design. 3.9gpa</p>',
  '<br>',
  '<br>',
  '<h2>SKILLS:</h2>',
  '<p><strong>Languages:</strong> HTML5, CSS/SCSS, JavaScript/jQuery/ReactJS/VueJS, PHP, SQL, Shell</p>',
  '<p><strong>Optimization:</strong> Semantics, SEO, Accessibility, UX & Responsive Design, Google Analytics</p>',
  '<p><strong>CMS/Frameworks:</strong> WordPress, HubSpot, CodeIgniter, Kentico, Bootstrap, Foundation</p>',
  '<p><strong>Version Control:</strong> Git, SVN</p>',
  '<p><strong>Extras:</strong> Adobe CC (Photoshop, Illustrator), Agile Development, Office Suite (Google, Microsoft)</p>',
  '<br>',
  '<br>',
  '<h2>EXPERIENCE:</h2>',
  '<h3>Element Creative</h3>',
  '<p><small>May 16 – Current</small></p>',
  '<p>Web Development With WordPress, HubSpot, CodeIgniter, ReactJS, Kentico</p>',
  '<br>',
  '<h2>Stellar Blue Technologies</h2>',
  '<p><small>September 15 – May 16</small></p>',
  '<p>Front-End Web Development With WordPress</p>',
  '<br>',
  '<h2>WebFitters</h2>',
  '<p><small>May 15 – August 15</small></p>',
  '<p>Front-End Web Development With Codeigniter & Magento</p>',
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
  if(attempted_command == true) {
    input.style.color = "#fff";
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
};

let intro_split = array_string_splitter.call(null, intro);
let resume_split = array_string_splitter.call(null, resume);

const cmd_exec = document.getElementById('cmd-exec');
const input = document.querySelector('input');

function cce() {
  cmd_exec.innerHTML = "";
}

// Print out the array strings created from array_string_splitter
function print_array_strings(arr) {
  console_busy();
  let interval = 0;
  arr.forEach(function(v,i) {
    v.forEach(function(vv,ii) {
      setTimeout(function() {
        cmd_exec.innerHTML += vv;
        if(ii + 1 >= v.length)
          cmd_exec.innerHTML += '<br>';
      }, interval);
      ii + 1 >= v.length ? interval += 250 : interval += 33;
    });
    if(i + 1 >= arr.length) {
      setTimeout(function() {
        console_ready();
      }, interval);
    }
  });
};

function print_intro() {
  print_array_strings(intro_split);
};

function print_by_line(arr) {
  console_busy();
  var interval = 0;
  arr.forEach(function(v, i) {
    setTimeout(function() {
      cmd_exec.innerHTML += v
      if(i + 1 >= arr.length) {
        console_ready();
      }
    }, interval);
    interval += 50;
  });
};

function print_resume() {
  cce();
  print_by_line(resume);
}

function print_commands() {
  print_by_line(commands);
}

function print_email_ascii(callback) {
  let interval = 0, ealen = emailASCII.length;
  emailASCII.forEach(function(v,i) {
    setTimeout(function() {
      let ei  = ealen - (i + 1),
          iii = 0;
        console.log(v);

        if(ei === 0) {
          if(typeof callback === 'function') callback();
        }
    }, interval);
    interval += 33;
  });
};

function command_check() {
  document.onkeypress = function(ev) {
    if(ev.which == 13) {
      if(!cnsl_bsy) {
        if(input.value == "clear") cce();
        if(input.value == "intro") print_intro();
        if(input.value == "resume") print_resume();
        if(input.value == "commands") print_commands();
        if(input.value == "contact") print_email_ascii(
          function() {window.location.href = "mailto:jessbrisson@gmail.com?subject=Earth%20to%20Jess%20Brisson!%20Lets%20talk%20\.\.\.";
        });
        if(input.value != "clear"  && input.value != "intro"   &&
           input.value != "resume" && input.value != "contact" &&
           input.value != "commands") {
           print_array_strings(array_string_splitter(["'" + input.value + "' is not a command, to see valid commands please type 'commands' and press enter/return.", "", "Remember, commands are case-sensitive", " "]), null);
        }
        input.value = "";
      } else {
        attempted_command = true;
        console_busy();
      }
    }
  }
};

command_check();
print_intro();

window.addEventListener('click', function() {
  input.focus();
});

//
