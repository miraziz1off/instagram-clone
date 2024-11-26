import { Story } from "./components/StoryComponent.js";
import { reload } from "./utils/reload.js";


fetch('http://localhost:3001/stories')
    .then(response => response.json())
    .then(data => reload(data, document.querySelector('.story__list'), Story))