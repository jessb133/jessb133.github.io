
const intro = [
  'Jess Brisson',
  'The guy who wrote this silly HTML console',
  'jessbrisson@gmail.com',
  ' ',
  'Welcome to the Jess Brisson super minimalist console of awesomeness. The GUI has been ripped away from this site, however, you do have access to some commands to navigate around:',
  ' ',
  'intro <- Displays this intro',
  'clear <- Clears the console',
  'resume <- Displays my resume',
  'contact <- Opens an email client for you to contact me',
  ' ',
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
  '<p><strong>Languages:</strong> HTML5, CSS/SCSS, JavaScript/jQuery/ReactJS/VueJS, Python, PHP, SQL, Shell</p>',
  '<p><strong>Optimization:</strong> Semantics, SEO, Accessibility, UX & Responsive Design, Google Analytics</p>',
  '<p><strong>CMS/Frameworks:</strong> WordPress, HubSpot, CodeIgniter, Kentico, Flask, Bootstrap, Foundation</p>',
  '<p><strong>Version Control:</strong> Git, SVN</p>',
  '<p><strong>Extras:</strong> Adobe CC (Photoshop, Illustrator), Agile Development, Continuous Integration, Office Suite (Google, Microsoft)</p>',
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
function print_array_strings(arr, callback) {
  let iteration = 0;
  arr.forEach(function(v,i) {
    v.forEach(function(vv,ii) {
      setTimeout(function() {
        cmd_exec.innerHTML += vv;
        if(ii + 1 >= v.length)
          cmd_exec.innerHTML += '<br>';
      }, iteration);
      ii + 1 >= v.length ? iteration += 250 : iteration += 33;
    });
    if(i + 1 >= arr.length && typeof callback == 'function') {
      setTimeout(function() {
        callback();
      }, iteration += 300);
    }
  });
};

function print_intro() {
  print_array_strings.call(null, intro_split, function() {
    input.focus();
  });
};

function print_resume() {
  var interval = 0;
  resume.forEach(function(v) {
    setTimeout(function() {
      cmd_exec.innerHTML += v
    }, interval);
    interval += 77;
  });
};

function print_email_ascii(callback) {
  let interval = 0, ealen = emailASCII.length;
  emailASCII.forEach(function(v,i) {
    setTimeout(function() {
      // cce();
      let ei  = ealen - (i + 1),
          // cpr = ealen - ei,
          // ii  = 0,
          iii = 0;
      // while(ii < ei) {
      //   console.log(' ');
      //   ii++;
      // }
      // while(iii < ealen) {
        console.log(v);
        // iii++;

        if(ei === 0) {
          // setTimeout(function() {
            if(typeof callback === 'function') callback();
          // }, 100);
        }
      // }
    }, interval);
    interval += 33;
  });
};

function command_check() {
  document.onkeypress = function(ev) {
    if(ev.which == 13) {
      if(input.value == "clear") cce();
      if(input.value == "intro") print_intro();
      if(input.value == "resume") print_resume();
      if(input.value == "contact") print_email_ascii(
        function() {window.location.href = "mailto:jessbrisson@gmail.com?subject=Earth%20to%20Jess%20Brisson!%20Lets%20talk%20\.\.\.";
      });
      input.value = "";
    }
  }
};

command_check();
print_intro();

window.addEventListener('click', function() {
  input.focus();
});

//
