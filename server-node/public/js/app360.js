const pan = document.querySelector('.panolens');
const images = './images/veropeso3d.jpg';

const panorama = new PANOLENS.ImagePanorama( images );
const viewer = new PANOLENS.Viewer({ 
    container:pan 
});
viewer.add( panorama );