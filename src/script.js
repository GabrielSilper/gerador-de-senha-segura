import { nanoid } from "nanoid";
import './style.css'

const bntGenerate = document.querySelector('button');
const displayPassword = document.querySelector('h2');

bntGenerate.addEventListener('click', () => {
    displayPassword.innerText = nanoid();
});