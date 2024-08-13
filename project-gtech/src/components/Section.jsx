// src/components/Section.jsx
import React from "react";
import "primeflex/primeflex.css";
const Section = () => {
  const sectionsData = [
    {
      title: "Produtos em alta",
      position: "right",
      link: { text: "Ver mais", href: "https://redirect.link" },
    },
  ];

  return (
    <div className="section bg-black-alpha-20 border-1">
      {sectionsData.map((section, index) => (
        // <div key={index} className="section_box ">
        <div
          className="section_h w-full"
          style={{ textAlign: section.position }}
        >
          <p className="title border-2">{section.title}</p>
          {section.link && (
            <a href={section.link.href} className="section-link border-2">
              {section.link.text} &rarr;
            </a>
          )}
        </div>
        // </div>
      ))}
    </div>
  );
};

export default Section;
