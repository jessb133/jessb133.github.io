/*
  Vars
*/
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
  'Welcome to my interactive console. As there is a lack of a proper GUI, you will have to execute commands!',
  'Here is the list of commands available:',
  ' ',
  ...commands,
  'NOTE: Commands ARE case-sensitive',
  ' '
];
const emailASCII = [
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
const cmd_exec = document.getElementById('cmd-exec');
const input = document.querySelector('input');
const clock = document.querySelector('header #clock');

let cnsl_bsy = false; 
let attempted_command = false;

/*
  Functions
*/
function clockTick() {
  let date = new Date();
  let hour = date.getHours() - 12 < 0 ? 
    [date.getHours() === 0  ? 12 : date.getHours(), 'AM'] : 
    [date.getHours() === 12 ? 12 : date.getHours() - 12, 'PM'];
  let minutes = date.getMinutes() < 10 ? 
    "0" + date.getMinutes() : 
    date.getMinutes();
  clock.textContent = `${hour[0]}:${minutes} ${hour[1]}`;
}

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
    let inputValue = input.value;
    input.style.color = "#f00";
    input.value = "";
    input.value = `${inputValue} <- Command executing, please wait.`;
  }
}

function array_string_splitter(arr) {
  return arr.map(function(str) {
    return str.split('');
  });
}

function print_array_strings(arr) {
  console_busy();
  let interval = 0;
  arr.forEach((str,ind) => {
    str.forEach((char,iind) => {
      setTimeout(() => {
        cmd_exec.innerHTML += char;
        if (iind + 1 >= str.length) {
          cmd_exec.innerHTML += '<br>';
        }
      }, interval);
      iind + 1 >= str.length ? interval += 250 : interval += 33;
    });
    if (ind + 1 >= arr.length) {
      setTimeout(() => {
        console_ready();
      }, interval);
    }
  });
}

function print_by_line(arr, breaks = false) {
  console_busy();
  var interval = 0;
  arr.forEach((str, ind) => {
    setTimeout(() => {
      cmd_exec.innerHTML += str
      breaks && (cmd_exec.innerHTML += '<br>');
      if(ind + 1 >= arr.length) {
        console_ready();
      }
    }, interval);
    interval += 50;
  });
}

function print_email_ascii(callback) {
  let interval = 0, ealen = emailASCII.length;
  emailASCII.forEach((str,ind) => {
    setTimeout(() => {
      let ei  = ealen - (ind + 1);
        console.log(str);
        if(ei === 0) {
          if(typeof callback === 'function') callback();
        }
    }, interval);
    interval += 33;
  });
}

/*
  Calls
*/
document.onkeypress = ev => {
  if (ev.which == 13) {
    if (!cnsl_bsy) {
      switch (input.value) {
        case "clear":
          cmd_exec.innerHTML = "";
          break;
        case "intro":
          print_array_strings(
            array_string_splitter(intro)
          );
          break;
        case "resume":
          window.open(resume);
          break;
        case "commands":
          print_by_line(commands, true);
          break;
        case "contact":
          print_email_ascii(() => {
              window.location.href = `
              mailto:jessbrisson@gmail.com
              ?subject=Earth%20to%20Jess%20Brisson!%20Lets%20talk%20\.\.\.
              `;
          });
          break;
        case "rsnake":
          document.querySelector('#rsnake').style.display = "block";
          document.querySelector('#gameboard').focus();
          break;
        default:
          print_array_strings(
            array_string_splitter([
            `"${input.value}" is not a command, to see valid commands please type "commands" and press enter/return.`, 
            " ", 
            "Remember, commands are case-sensitive", 
            " "]),
          null);
      }
      input.value = "";
    } else {
      attempted_command = true;
      console_busy();
    }
  }
}

setInterval(clockTick, 1000);
print_array_strings(
  array_string_splitter(intro)
);
window.addEventListener('click', ev => {
  if (ev.target == document.querySelector('#gameboard')) {
    document.querySelector('#gameboard').focus();
  } else {
    input.focus();
  }
});