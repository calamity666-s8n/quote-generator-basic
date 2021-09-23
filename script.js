const insultButton = document.querySelector('#insult');
const member = document.querySelector('#category')

const h3 = document.querySelector('#test')


const dadArray = ["I'm afraid for the calendar. Its days are numbered.",
    "My wife said I should do lunges to stay in shape. That would be a big step forward.",
    "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!",
    "Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.",
    "What do a tick and the Eiffel Tower have in common?",
    "What do you call a fish wearing a bowtie? ...Sofishticated.",
    "How do you follow Will Smith in the snow? You follow the fresh prints.",
    "If April showers bring May flowers, what do May flowers bring? Pilgrims.",
    "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along."
]
const momArray = [`Yo mama's so ugly, she threw a boomerang and it refused to come back.`,
    `Yo mama's so old, her social security number is one.`,
    `Yo mama's so ugly, she made a blind kid cry.`,
    `Yo mama's so ugly, her portraits hang themselves.`,
    `Yo mama's so old, she walked out of a museum and the alarm went off.`,
    `Yo mama's teeth are so yellow when she smiles at traffic, it slows down.`,
    `Yo mama's armpits are so hairy, it looks like she's got Buckwheat in a headlock.`,
    `Yo mama's so ugly, when she was little, she had to trick-or-treat by phone.`,
    `Yo mama's so ugly, her birth certificate is an apology letter.`,
    `Yo mama's so ugly, she looked out the window and was arrested for mooning.`
]
const checkAgain = () => {
        console.log(member.value)
    }
    //insult logic
const checkForMember = () => {
        if (member.value == 'dad') {

            return 'dad'
        } else if (member.value == 'mom') {
            return 'mom'

        } else if (member.value == 'sis') {
            return "sister"

        } else if (member.value == 'bro') {
            return 'brother'

        } else if (member.value == 'individual') {
            return null;
        }
    }
    //dad logic 
const insultDad = () => {

        const element = Math.floor(Math.random() * dadArray.length);

        const dadInsult = dadArray[element]

        return dadInsult;

    }
    //mom logic
const insultMom = () => {
    const element = Math.floor(Math.random() * momArray.length);

    const momInsult = momArray[element]

    return momInsult;

}
insultButton.addEventListener("click", () => {

    if (checkForMember == 'dad') {
        const p = h3.textContent = insultDad();
        console.log(p);

    }
    if (checkForMember() == 'mom') {
        const p = h3.textContent == insultMom();
        console.log(p);
    }
    console.log(checkForMember(), checkAgain());

})