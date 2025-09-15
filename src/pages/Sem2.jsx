import React from "react";

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

export default function Sem2() {
  const sections = [
    {
      title: "ART IN EDUCATION {VISUAL ARTS} ACTIVITY : DRAWING",
      imgs: [
        'drawing_1.jpg',
        'drawing_2.jpg',
        

      ],
      imgLabels: ["Drawing 1", "Drawing 2", "Drawing 3"],
    },
    {
      title:
        "ART IN EDUCATION {VISUAL ARTS} ACTIVITY : PAPER CUTTING AND PAPER FOLDING",
      imgs: [
        'papercut_1.jpg',
        'papercut_2.jpg',
 
      
      
      ],
      imgLabels: ["Paper Cutting 1", "Paper Folding 1", "Paper Craft 1"],
    },
    {
      title: "ART IN EDUCATION {VISUAL ARTS} ACTIVITY : CLAY MODELLING",
      imgs: ["claymodelling.jpg"],
      imgLabels: ["Clay Modelling 1"],
    },
    {
      title: "ART IN EDUCATION {VISUAL ARTS} ACTIVITY : MEHANDI DESIGNING",
      imgs: [
        'mehnd_1.jpg',
        'mehnd_2.jpg'
    
      ],
      imgLabels: ["Mehandi Design 2"],
    },
    {
      title: "ART IN EDUCATION {PERFORMING ARTS} ACTIVITY : SINGING 🎤🎶🎻",
      imgs: [
        'sing.jpg',  
        'sing2.jpg'  

      ],
      imgLabels: ["Singing Activity"],
    },
    {
      title: "ART IN EDUCATION {PERFORMING ARTS} ACTIVITY : DANCING 💃🕺",
      imgs: [
           'dance.jpg',
           'dance1.jpg',
           'dance2.jpg',

      ],
      imgLabels: ["Dancing 1", "Dancing 2"],
    },
    // NEW SECTIONS START
    {
      title: "ART IN EDUCATION {PERFORMING ARTS} ACTIVITY : DRAMA 🎭",
      imgs: [
      'drama.jpg',
      'drama2.jpg'
      
      ],
      imgLabels: ["Drama Activity"],
    },
    {
      title: "🇮🇳 INDEPENDENCE DAY CELEBRATIONS IN KOHNA - PALAMOOR SCHOOL 🇮🇳",
      description:
        "Independence Day, celebrated annually on August 15th, marks India's freedom from British rule in 1947. It's a day to honour the sacrifices of freedom fighters and the hard-fought struggle for independence, led by figures like Mahatma Gandhi and Jawaharlal Nehru. Celebrations include flag-hoisting ceremonies, parades, and cultural events, and the Prime Minister delivers a speech from the Red Fort in Delhi.",
      imgs: [
        "/ind1.jpg",
        "/ind2.jpg",
        "/ind3.jpg",
        "/ind4.jpg",
        "/ind5.jpg",
        "/ind6.jpg",
        "/ind7.jpg",
        "/ind8.jpg",
        "/ind9.jpg",
        "/ind10.jpg",
      ],
      imgLabels: ["Celebration 1", "Celebration 2", "Celebration 3"],
    },
    {
      title: "TEACHER'S DAY CELEBRATIONS",
      description:
        "Teachers Day in India, celebrated on September 5th, honors the contributions of teachers. It coincides with the birth anniversary of Dr. Sarvepalli Radhakrishnan, a renowned philosopher and the second President of India. Students express gratitude to their teachers through various activities and events.",
      imgs: [
      'teachersday.jpg',
      'teachersday2.jpg',
      'teachersday3.jpg',
      'teachersday4.jpg',
      'teachersday5.jpg'
      
      ],
      imgLabels: [
        "Teachers Day 1",
        "Teachers Day 2",
        "Teachers Day 3",
        "Teachers Day 4",
        "Teachers Day 5",
      ],
    },
    {
      title: "FOOD MELA",
      description:
        "A Food Mela, or food festival, is a public event that celebrates food, often with a focus on a particular cuisine or theme. These events bring together various food vendors, chefs, and culinary enthusiasts to showcase their dishes and talents. Food Melas offer opportunities to sample diverse foods, learn about different cultures, and sometimes even raise money for a cause.",
      imgs: [
      'foodmela.jpg', 
      'foodmela2.jpg', 
      'foodmela3.jpg' 
      
      ],
      imgLabels: ["Food Mela 1", "Food Mela 2"],
    },

    // NEW SECTIONS END
  ];

  return (
   <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Image */}
      <div
        className="w-full h-[27rem] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(sem2_hero.jpg)",
        }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm px-10 py-6 rounded-xl shadow-2xl transform -rotate-2">
            <h1 className="text-white text-4xl font-black tracking-tight text-center">
              Welcome to Sem2 Events
            </h1>
          </div>
        </div>
      </div>

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
