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
const email_ASCII = [
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
const non_valid_request = [
  "is not a command, to see valid commands please type \"commands\" and press enter/return.", 
  " ", 
  "Remember, commands are case-sensitive", 
  " "
];
const resume = "https://docs.google.com/document/d/1sR0BGYcJSHVV1sRXLOf0kKNuAyrWxFYkiMeS9d0qQEU/edit?usp=sharing";
const cmd_exec = document.getElementById('cmd-exec');
const input = document.querySelector('input');
const clock = document.querySelector('header #clock');
const my_email = "mailto:jessbrisson@gmail.com?subject=Earth%20to%20Jess%20Brisson!%20Lets%20talk%20\.\.\.";

let cnsl_bsy = false; 
let attempted_command = false;
let input_value = "";

/*
  Funcs
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

function consoleReady() {
  input_value = "";
  input.focus();
  cnsl_bsy = false;
  if (attempted_command === true) {
    input.style.color = "#1abc9c";
    input.value = input.value.substr(0, input.value.indexOf(" <-"));
  }
  attempted_command = false;
}

function consoleBusy() {
  input.blur();
  cnsl_bsy = true;
  if (attempted_command == true) {
    input_value = !input_value.length ? input.value : input_value;
    input.style.color = "#f00";
    input.value = "";
    input.value = `${input_value} <- Command executing, please wait.`;
  }
}

function arrayStringSplitter(arr) {
  return arr.map(function(str) {
    return str.split('');
  });
}

function printArraystrings(arr) {
  consoleBusy();
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
        consoleReady();
      }, interval);
    }
  });
}

function printByLine(arr, breaks = false) {
  consoleBusy();
  var interval = 0;
  arr.forEach((str, ind) => {
    setTimeout(() => {
      cmd_exec.innerHTML += str
      breaks && (cmd_exec.innerHTML += '<br>');
      if (ind + 1 >= arr.length) {
        consoleReady();
      }
    }, interval);
    interval += 50;
  });
}

function printEmailAscii(callback) {
  let interval = 0; 
  let ealen = email_ASCII.length;
  email_ASCII.forEach((str,ind) => {
    setTimeout(() => {
      let ei = ealen - (ind + 1);
        console.log(str);
        if (ei === 0 && typeof callback === "function") {
          callback();
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
          printArraystrings(
            arrayStringSplitter(intro)
          );
          break;
        case "resume":
          window.open(resume);
          break;
        case "commands":
          printByLine(commands, true);
          break;
        case "contact":
          printEmailAscii(() => {
              window.location.href = my_email;
          });
          break;
        case "rsnake":
          document.querySelector('#rsnake').style.display = "block";
          document.querySelector('#gameboard').focus();
          break;
        default:
          printArraystrings(
            arrayStringSplitter([
            `"${input.value}"` + non_valid_request[0], 
            non_valid_request[1], 
            non_valid_request[2], 
            non_valid_request[3]
          ]), null);
      }
      input.value = "";
    } else {
      attempted_command = true;
      consoleBusy();
    }
  }
}

setInterval(clockTick, 1000);
printArraystrings(
  arrayStringSplitter(intro)
);
window.addEventListener('click', ev => {
  if (ev.target == document.querySelector('#gameboard')) {
    document.querySelector('#gameboard').focus();
  } else {
    input.focus();
  }
});