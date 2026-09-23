import DomeGallery from '../../component/DomeGallery/DomeGallery.jsx';
import './Gallery.css'

export default function GalleryPage() {
  // Aap yahan apni custom birthday/crush pictures add kar sakte ho:
  const myImages = [
    { src: 'khushi 2.jpg', alt: 'Memory 1' },
    { src: 'khushi 3.png', alt: 'Memory 2' },
    { src: 'khushi 2.jpg', alt: 'Memory 3' },
    { src: 'khushi.png', alt: 'Memory 4' },
    { src: 'khushi 5.jpg', alt: 'Memory 5' },
    { src: 'khushi 6.jpg', alt: 'Memory 6'},
    { src: 'khushi 7.jpg', alt: 'Memory 7'}
  ];

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }} className="galley">
      <DomeGallery
        images={myImages}
        fit={0.8}
        minRadius={500}
        maxVerticalRotationDeg={0}
        segments={30}
        dragDampening={2}
        grayscale={false} // Color photos ke liye false rakha hai
      />
    </div>
  );
}