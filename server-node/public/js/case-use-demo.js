

//// WINDOW SELECTORS ////

const WindowSizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const CanvasElement = document.querySelector("canvas.webgl");
const TitleBlock = document.querySelector(".titlebar");

const InfoPanels = document.querySelectorAll(".infopanel");
const AboutSteveInfoPanel = document.querySelector("#AboutSteve");
const AboutThisPageInfoPanel = document.querySelector("#AboutThisPage");
const MacOfBkInfoPanel = document.querySelector("#MacOfBk");
const VirtualRealityInfoPanel = document.querySelector("#VirtualReality");
const InstallationsInfoPanel = document.querySelector("#Installations");
const ExhibitDesignInfoPanel = document.querySelector("#ExhibitDesign");
const MobileVRInfoPanel = document.querySelector("#MobileVR");
const Interactive3DInfoPanel = document.querySelector("#Interactive");
const AugmentedRealityInfoPanel = document.querySelector("#AugmentedReality");
const ContactButton = document.querySelector(".contact");
const ContactInfoPanel = document.querySelector("#Contact");

// Cursor
const ScreenCursorPosition = new THREE.Vector2();
let RaycastActive = false;

// Loading bar

const LoadingBarElement = document.querySelector(".loadingbar")



// Baked mesh textures

const BakedMaterials = new Array();

const PlatformMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/PlatformsBakedFade.jpg")});
const DesktopMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/DesktopBaked.jpg")});
const MobileVRMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/MobileVRBaked.jpg")});
const WebStreamingMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/WebStreamingBaked.jpg")});
const ARMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/ARBaked.jpg")});
const ExhibitDesignMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/DesignBaked.jpg")});
const KioskMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/KioskBaked.jpg")});
const VRMaterial = new THREE.MeshBasicMaterial({map: TextureLoader.load("./images/VRBaked.jpg")});

BakedMaterials.push(
    PlatformMaterial, 
    DesktopMaterial,
    MobileVRMaterial,
    WebStreamingMaterial,
    ARMaterial,
    ExhibitDesignMaterial,
    KioskMaterial,
    VRMaterial
);

for (let material of BakedMaterials) {
    material.map.flipY = false;
    material.map.encoding = THREE.sRGBEncoding;
};

//// OBJECTS ////

const MeshObjects = new THREE.Group();
MeshObjects.name = "Mesh Objects";

const AboutSteveClickArea = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(0.4, 0.4, 1.8, 3, 1),
    new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0
    })
);









function OpenContact() {
    if (ContactInfoPanel.classList.contains("open")){
        InfoPanels.forEach(function(panel) {
            panel.classList.remove("open");
        });

        return;
    } else {
        InfoPanels.forEach(function(panel) {
            panel.classList.remove("open");
        });
        ContactInfoPanel.classList.add("open");
    }
}

// Event Listeners

ContactButton.addEventListener("pointerup", OpenContact);

// Anim