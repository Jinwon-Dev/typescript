import Bird from "./bird";
import Fish from "./fish";

export const flyOrSwim = (animal: Bird | Fish): void => {
    if (animal instanceof Bird) {
        animal.fly();
    } else if (animal instanceof Fish) {
        animal.swim();
    }
}