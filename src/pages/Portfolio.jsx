import noteTaker from "./images/noteTaker.png";
import techblog from "./images/TechBlog.png";
import plantSearch from "./images/PlantSearch.png";
export default function AboutMePage() {
  return (
    <div className="container">
      <h2>Completed Projects</h2>
      <strong>NoteTaker: Personal Project</strong>
      <a
        href="https://whispering-waters-08685-69b7651c2e53.herokuapp.com/notes"
        target="_blank"
      >
        <img
          className="image"
          src={noteTaker}
          alt="Placeholder image with text 200 width and 200 height "
        />
      </a>
      <strong>TechBlog: Personal Project</strong>
      <a href="https://sk-techblog-a5d429576b0b.herokuapp.com/" target="_blank">
        <img
          className="image"
          src={techblog}
          alt="Placeholder image with text 200 width and 200 height "
        />
      </a>
      <strong>PlantSearch: Group Project</strong>
      <a
        href="https://abigailjoy93.github.io/plant-search-project/"
        target="_blank"
      >
        <img
          className="image"
          src={plantSearch}
          alt="Placeholder image with text 200 width and 200 height "
        />
      </a>
    </div>
  );
}
