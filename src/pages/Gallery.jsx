import nitCampusImg from '../assets/campus.png';
import posterImg from '../assets/poster.png';
import logoImg from '../assets/logo.png';

const galleryImages = [
  { src: nitCampusImg, caption: 'NIT Raipur Main Campus', alt: 'NIT Raipur Campus' },
  { src: posterImg, caption: 'CGCON 2027 Conference Poster', alt: 'Conference Poster' },
  { src: nitCampusImg, caption: 'Academic Block', alt: 'Academic Block' },
  { src: posterImg, caption: 'IEEE CGCON 2027 Banner', alt: 'Conference Banner' },
  { src: nitCampusImg, caption: 'Campus Gardens', alt: 'Campus Gardens' },
  { src: nitCampusImg, caption: 'Research Facilities', alt: 'Research Facilities' },
];

export default function Gallery() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Gallery</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Photo Gallery</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          NIT Raipur campus and conference visuals
        </p>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 aspect-video"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 text-sm mt-10">
          More photos from the conference will be added here after the event.
        </p>
      </section>
    </div>
  );
}
