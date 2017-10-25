
const intro = [
  'Jess Brisson',
  'The guy whom wrote this silly HTML console',
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

const resume = [
  'Resume and more coming soon ...'
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
  print_array_strings.call(null, resume_split, function() {
    input.focus();
  });
}

function command_check() {
  document.onkeypress = function(ev) {
    if(ev.which == 13) {
      if(input.value == "clear") cmd_exec.innerHTML = "";
      if(input.value == "intro") print_intro();
      if(input.value == "resume") print_resume();
      if(input.value == "contact") window.location.href = "mailto:jessbrisson@gmail.com?subject=Earth%20to%20Jess%20Brisson!";
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
