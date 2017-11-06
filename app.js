const message = prompt('Choose an Option\n1: Show messages\n2: Add a message\n3: Delete a message\n0: Quit');

// alert('Your input is: ' + message)
const output = document.getElementById("output")

const messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
]

if (message == '1') {
    document.write(messages.join("<br>"));
} else if (message == '2') {
    const messageAdd = prompt('Enter a new message:');
    messages.push(messageAdd);
    document.write(messages.join("<br>"));
} else if (message == '3') {
    msdel = prompt('Enter the message index (between 1 and 5)');
    msdel --;
    delete messages[msdel];
    document.write(messages.join("<br>"));

} else if (message == '0') {
    document.write("Good Bye")
} else {
    document.write("Please refresh and input a valid option.")
}