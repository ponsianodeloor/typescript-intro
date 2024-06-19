const skills: string[] = ['PHP', 'JAVA', 'POSTGRES'];
const user = {
    name: 'John',
    age: 30,
    skills: skills
};

console.log(user);

interface User {
    name: string,
    age: number,
    skills: string[]
}

const user2: User = {
    name: 'John',
    age: 30,
    skills: ['PHP', 'JAVA', 'POSTGRES']
};

console.log(user2);

export{};
