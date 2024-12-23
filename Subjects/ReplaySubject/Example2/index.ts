import { ReplaySubject } from "rxjs";

const sub = new ReplaySubject(3);
const tharindu = document.getElementById('tharindu');
const lakshan = document.getElementById('lakshan');
const joinTharinduButton = document.getElementById('joinTharindu');
const joinLakshanButton = document.getElementById('joinLakshanButton');
const sendTharinduButton = document.getElementById('sendTharindu');
const sendLakshanButton = document.getElementById('sendLakshanButton');
const tharinduMessage = document.getElementById('tharinduMessage');
const lakshanMessage = document.getElementById('lakshanMessage');


// sub.next("Tharindu:Hi How are you?");
// sub.next("Lakshan:Hi I'm fine, How are you?");
// sub.next("Tharindu:I'm also fine, Thank you for asking.");
// sub.next("Lakshan:You're welcome.");
// sub.next("Tharindu:Goodbye!");
// sub.subscribe(console.log); // Output: 3, 4, 5

joinTharinduButton!.addEventListener('click', () => {
    joinTharindu();
});

joinLakshanButton!.addEventListener('click', () => {
    joinLakshan();
});

sendTharinduButton!.addEventListener('click', () => {
    const tharinduValue = (tharindu as HTMLInputElement).value;
    sendMessage('Tharindu',tharinduValue);
});

sendLakshanButton!.addEventListener('click', () => {
    const lakshanValue = (lakshan as HTMLInputElement).value;
    sendMessage('Lakshan',lakshanValue);
})

export interface Message {
    sender: string;
    message: string;
}

function sendMessage(sender: string, message: string) {
    sub.next({ sender, message });
}

function joinTharindu() {
    console.log(`Tharindu`);
    sub.subscribe((msg:any) => {
        console.log(`Tharindu`,msg);
        const li = document.createElement('li');
        li.textContent = `${msg.sender}: ${msg.message}`;
        tharinduMessage!.appendChild(li);
    });
}

function joinLakshan() {
    console.log(`Lakshan`);
    sub.subscribe((msg:any) => {
        console.log(`Lakshan`,msg);
        const li = document.createElement('li');
        li.textContent = `${msg.sender}: ${msg.message}`;
        lakshanMessage!.appendChild(li);
    });
}

