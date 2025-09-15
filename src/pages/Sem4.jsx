import React from "react";

// SectionCard Component
function SectionCard({
  title,
  schoolName = "",
  description = "",
  imgs = [],
  imgLabels = [],
  videos = [],
}) {
  let gridColsClass = "grid-cols-1";
  if (imgs.length === 2) gridColsClass = "sm:grid-cols-2";
  else if (imgs.length >= 3) gridColsClass = "sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-8 space-y-5">
        <h2 className="text-3xl font-extrabold text-blue-900">{title}</h2>
        {schoolName && (
          <p className="text-indigo-600 font-semibold">{schoolName}</p>
        )}
        {description && (
          <p className="text-gray-700 leading-relaxed">{description}</p>
        )}

        {imgs.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {imgs.map((src, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md p-2 w-60 rounded-lg transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={`img ${idx}`}
                  className="w-full h-60 object-cover rounded"
                />
                {imgLabels[idx] && (
                  <p className="mt-2 text-center text-sm text-gray-600 font-semibold">
                    {imgLabels[idx]}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {videos.length > 0 && (
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {videos.map((videoUrl, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md p-2 w-80 rounded-lg transform hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-video rounded overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={videoUrl}
                    title={`${title} Video ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mt-2 text-center text-sm text-gray-600 font-semibold">
                  {`Video ${idx + 1}`}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
// Sem4 Component
export default function Sem4() {
  const sections = [
    {
      title: "MORNING EXERCISE AND PRAYER",
      description:
        "Students start their day with morning exercise and prayer, promoting physical fitness, mental well-being, and a disciplined routine.",
      imgs: [
      'prayer.jpg',
      'prayer2.jpg',
      'prayer3.jpg' 
      
      ],
      imgLabels: ["Morning Exercise", "Morning Prayer"],
    },
    {
      title: "MEHNDI DESIGNING",
      description:
        "Students showcase their creativity by designing intricate mehndi patterns. This activity encourages artistic expression and attention to detail.",
      imgs: [
      'mehnd_1.jpg',
      'mehnd_2.jpg',
      'mehnd_3.jpg',
      'mehnd_4.jpg',
      'mehnd_5.jpg',
      'mehnd_6.jpg',
      
      ],
      imgLabels: ["Mehndi Design 1", "Mehndi Design 2", "Mehndi Design 3"],
    },
    {
      title: "PAPER CUTTING",
      description:
        "Paper cutting activity helps students develop fine motor skills, creativity, and patience. Students create beautiful designs using simple tools.",
      imgs: [
      'papercut_1.jpg',
      'papercut_2.jpg',
      'papercut_3.jpg',
      'papercut_4.jpg',
      'papercut_5.jpg',
      'papercut_6.jpg',

      
      ],
      imgLabels: ["Paper Cutting 1", "Paper Cutting 2"],
    },
    {
      title:
        "MAINTAINING HYGIENE WHILE COOKING FOOD FOR CHILDREN IN ZPHS, KAVERAMMAPETA, MAHABUBNAGAR",
      description:
        "Students learn and practice proper hygiene techniques while preparing food for children, ensuring safety and cleanliness. This section focuses only on images without a video.",
      imgs: [
      'cooking.jpg',
       'cooking2.jpg',
       'cooking3.jpg',
      
      ],
      imgLabels: [
        "Cooking Hygiene 1",
        "Cooking Hygiene 2",
        "Cooking Hygiene 3",
      ],
    },
    {
      title: "DRAWING",
      description:
        "Students participate in drawing activities, expressing their creativity and improving their artistic skills through various techniques and themes.",
      imgs: [
      "drawing_4.jpg",
      "drawing_1.jpg",
      "drawing_3.jpg",
      "drawing_2.jpg"
      
      ],
      imgLabels: ["Drawing 1", "Drawing 2"],
    },
    {
      title: "SCIENCE CLASS",
      description:
        "Interactive science classes allow students to explore concepts practically, encouraging curiosity, experimentation, and a deeper understanding of scientific principles.",
      imgs: [
        "class (1).jpg",
        "class (2).jpg",
        "class (3).jpg",
        "class (4).jpg",
        "class (5).jpg",
        "class (6).jpg",
        "class (7).jpg",
        "class (8).jpg",
        "class (9).jpg",
      ],
      imgLabels: [
        "Science Class 1",
        "Science Class 2",
        "Science Class 3",
        "Science Class 4",
        "Science Class 5",
        "Science Class 6",
        "Science Class 7",
        "Science Class 8",
        "Science Class 9",
      ],
    },
    {
      title: "CYBER CRIME PROGRAM AWARENESS",
      description:
        "Students learn about cybercrime, online safety, and best practices to protect themselves and others from digital threats. Awareness sessions include demonstrations and discussions.",
      imgs: [
      'cyber.jpg', 
      'cyber2.jpg',
      'cyber3.jpg',
      
      ],
      imgLabels: ["Cyber Crime Awareness 1", "Cyber Crime Awareness 2"],
    },
    {
      title: "PARENT TEACHER MEETING",
      description:
        "Parent-teacher meetings help discuss students’ academic performance, behavior, and progress. It strengthens communication between parents and teachers.",
      imgs: [
      'ptm.jpg',
      'ptm2.jpg'
      
      ],
      imgLabels: ["PTM 1", "PTM 2"],
    },
    {
  title: "MISSION PARIVARTHANA",
  description:
    "Mission Parivarthana is an initiative to inspire students and the community to adopt positive changes and contribute to social welfare through various activities.",
  imgs: [
    "mission (1).jpg",
    "mission (2).jpg",
    "mission (3).jpg",
    "mission (4).jpg",
    "mission (5).jpg",
    "mission (6).jpg",
    "mission (7).jpg",
    "mission (8).jpg",
    "mission (9).jpg"
  ],
  imgLabels: [
    "Mission Parivarthana 1",
    "Mission Parivarthana 2",
    "Mission Parivarthana 3",
    "Mission Parivarthana 4",
    "Mission Parivarthana 5",
    "Mission Parivarthana 6",
    "Mission Parivarthana 7",
    "Mission Parivarthana 8",
    "Mission Parivarthana 9"
  ]
}

  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* Hero Header */}
      <div
        className="w-full h-[27rem] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(sem4_hero.jpg)",
        }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm px-10 py-6 rounded-xl shadow-2xl transform -rotate-2">
            <h1 className="text-white text-4xl font-black tracking-tight text-center">
              Welcome to Sem4 Events
            </h1>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-6xl mx-auto space-y-12 py-10 px-4">
        {sections.map((sec, idx) => (
          <SectionCard
            key={idx}
            title={sec.title}
            schoolName={sec.schoolName}
            description={sec.description || sec.desc || ""}
            imgs={sec.imgs}
            imgLabels={sec.imgLabels}
            videos={
              Array.isArray(sec.videos)
                ? sec.videos.filter(Boolean)
                : sec.videos
                ? [sec.videos]
                : []
            }
          />
        ))}
      </div>
    </div>
  );
}
