import { Beatle, Guitarist } from "./9-class-definitions.js";


const paul = new Beatle("PM", "bass", 2, 15);
const ringo = new Beatle("RS", "drums", 4, 10);
const jl = new Guitarist("JL", 'rhythm guitar', 1, 10, "Rickenbacker");
const gh = new Guitarist("GH", 'lead guitar', 3, 10, "Gibson");

paul.sayHi();
ringo.sayHi();
jl.sayHi();
jl.logMe();
gh.sayHi();
gh.logMe();
