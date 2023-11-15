import resumepdf from "./images/Resume.pdf";
export default function AboutMePage() {
  return (
    <div className="container">
      <h2>Resume</h2>
      <object data={resumepdf} type="application/pdf">
        <iframe src={resumepdf}></iframe>
      </object>
      <p>
        I am a seasoned professional with a diverse background, blending a
        strong work ethic with a passion for various pursuits. My professional
        journey began with roles in the culinary industry, where I honed my
        skills as a line cook at Mezcalito Butcher and served patrons at
        Wahlburgers. Complementing my hospitality experience, I held a cashier
        position at Culver's, gaining valuable insights into customer service
        and operational efficiency. Beyond the culinary realm, I have embarked
        on a multifaceted career, encompassing contract work in IT, bathroom
        remodeling, and electrical services. This diverse skill set reflects my
        adaptability and commitment to excellence in every endeavor. I graduated
        with honors from Shakopee High School and pursued academic enrichment at
        Normandale, participating in the Post-Secondary Enrollment Options
        (PSEO) program for two years during high school. This educational
        foundation has equipped me with a robust knowledge base, contributing to
        my success in both technical and hands-on roles. My dedication to
        professional growth, combined with a strong sense of responsibility, has
        been integral to my multifaceted career journey.
      </p>
    </div>
  );
}
