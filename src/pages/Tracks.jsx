import TrackCard from '../components/ui/TrackCard';
import { tracks } from '../data/tracks';

export default function Tracks() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Topics</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Conference Tracks</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Papers are invited in the following areas of interest, but not limited to
        </p>
      </div>

      {/* Tracks grid */}
      <section className="section-pad">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track, index) => (
            <TrackCard key={track.id} track={track} index={index} />
          ))}
        </div>

        <div className="mt-12 bg-orange-50 rounded-2xl p-8 text-center border border-primary/20">
          <p className="text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
            <strong>Note:</strong> This list is indicative, not exhaustive. Papers on related topics that fall within
            the broad scope of Intelligent Computing, Sustainable Energy, and Smart Industrial Automation are also welcome.
          </p>
          <a
            href="https://cmt3.research.microsoft.com/CGCON2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 btn-primary"
          >
            Submit Your Paper
          </a>
        </div>
      </section>
    </div>
  );
}
