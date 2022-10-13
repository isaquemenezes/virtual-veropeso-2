const pan = document.querySelector('.panolens');
const images = './planet.png';



const panorama = new PANOLENS.ImagePanorama( images );
    const viewer = new PANOLENS.Viewer({ container:pan });
     
viewer.add( panorama );