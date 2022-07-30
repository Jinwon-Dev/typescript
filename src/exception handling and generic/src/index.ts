import {occurErrorMethod} from "./occur-error.method";

try {
    occurErrorMethod();
} catch (e) {
    console.error(`Error message : ${e.message}`);
}