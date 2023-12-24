import { wallFromFloorComponent, placeOnWallComponent } from './components.js';

// Register your custom components with A-Frame
AFRAME.registerComponent('wall-from-floor', wallFromFloorComponent);
AFRAME.registerComponent('place-on-wall', placeOnWallComponent);

// Additional JavaScript for AR scene and interaction management
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the scene, add event listeners, etc.
    // This is where you'd add your logic for handling user interactions and scene updates
});
