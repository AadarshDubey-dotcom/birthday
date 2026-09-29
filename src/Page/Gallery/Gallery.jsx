import DomeGallery from '../../component/DomeGallery/DomeGallery.jsx';
import './Gallery.css'

export default function GalleryPage() {
  const myImages = [
    { src: '/khushi 2.jpg', alt: 'Birthday memory 1' },
    { src: '/khushi 3.png', alt: 'Birthday memory 2' },
    { src: '/khushi.png', alt: 'Birthday memory 3' },
    { src: '/khushi 5.jpg', alt: 'Birthday memory 4' },
    { src: '/khushi 6.jpg', alt: 'Birthday memory 5' },
    { src: '/khushi 7.jpg', alt: 'Birthday memory 6' },
    { src: '/khushi 4.jpg', alt: 'Birthday memory 7' }
  ];

  return (
    <div className="gallery-page">
      <DomeGallery
        images={myImages}
        fit={0.72}
        minRadius={280}
        maxVerticalRotationDeg={0}
        segments={30}
        dragDampening={0.8}
        grayscale={false}
      />
    </div>
  );
}