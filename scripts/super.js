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

const resume = "https://docs.google.com/document/d/1sR0BGYcJSHVV1sRXLOf0kKNuAyrWxFYkiMeS9d0qQEU/edit?usp=sharing";

let cnsl_bsy = false, attempted_command = false;

function clockTick() {
  const clock = document.querySelector('header #clock');
  return function() {
    let date = new Date();
    let hour = date.getHours() - 12 < 0 ? 
      [date.getHours() === 0  ? 12 : date.getHours(), 'AM'] : 
      [date.getHours() === 12 ? 12 : date.getHours() - 12, 'PM'];
    let minutes = date.getMinutes() < 10 ? 
      "0" + date.getMinutes() : 
      date.getMinutes();
    clock.textContent = `${hour[0]}:${minutes} ${hour[1]}`;
  }
}

let tickingClock = clockTick();

setInterval(tickingClock, 1000);

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

function array_string_splitter(arr) {
  return arr.map(function(v,i) {
    return v.split('');
  });
}

const intro_split = array_string_splitter(intro);
const cmd_exec = document.getElementById('cmd-exec');
const input = document.querySelector('input');

function cce() {
  cmd_exec.innerHTML = "";
}

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

function print_by_line(arr, breaks = false) {
  console_busy();
  var interval = 0;
  arr.forEach((v, i) => {
    setTimeout(() => {
      cmd_exec.innerHTML += v
      breaks && (cmd_exec.innerHTML += '<br>');
      if(i + 1 >= arr.length) {
        console_ready();
      }
    }, interval);
    interval += 50;
  });
}

function print_commands() {
  print_by_line(commands, true);
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
        if(input.value === "resume") window.open(resume);
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