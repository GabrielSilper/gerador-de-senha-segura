import { nanoid } from "nanoid";

const bntGenerate = document.querySelector('button');
const displayPassword = document.querySelector('h2');

bntGenerate.addEventListener('click', () => {
    displayPassword.innerText = nanoid();
});