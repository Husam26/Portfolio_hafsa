import React from "react";
import Masonry from "react-masonry-css";

function SectionCard({
  title,
  schoolName = "",
  desc,
  imgs = [],
  imgLabels = [],
  videos = [],
}) {
  let gridColsClass = "grid-cols-1";
  if (imgs.length === 2) gridColsClass = "sm:grid-cols-2";
  else if (imgs.length >= 3) gridColsClass = "sm:grid-cols-2 md:grid-cols-3";

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
        {schoolName && (
          <p className="text-indigo-600 font-semibold">{schoolName}</p>
        )}
        <p className="text-gray-700 leading-relaxed">{desc}</p>

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

export default function Sem1() {
  const sections = [
    {
      title: "Mathematics Day",
      desc: "Reflection about Mathematics Day experience...",
      imgs: [
        "maths_day.jpg",
      ],
    },
    {
      title: "Christmas Celebration",
      desc: "Reflection about Christmas Celebration...",
      imgs: [
        'Christmas (1).jpg',
        'Christmas (2).jpg',
      ],
    },
    {
      title: "Sports for Republic Day",
      desc: "Reflection about Sports for Republic Day...",
      imgs: [
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
      ],
    },
    {
      title: "🇮🇳 Republic Day Celebrations 🇮🇳",
      desc: "Republic day, celebrated on January 26th, commemorates the adoption of the Indian Constitution and the nation's transition to a republic. It's a day to honour the values of freedom, unity, and diversity, while also remembering the sacrifices made for India's independence.",
      imgs: [
        'republicday_1.jpg',
        'ind2.jpg',
        'hero-image.jpg'
      ],
    },
    {
      title: "Fresher's Party 🥳🎉🎊",
      desc: '"Our new journey to learn something more exciting"',
      imgs: [
        'freshersparty_1.jpg',
        'freshersparty_2.jpg',
        'freshersparty_3.jpg',
      ],
    },
    {
      title: "🩺 NATIONAL SCIENCE DAY EVENT 🧬🌡️",
      desc: "National Science Day is celebrated annually in India on February 28th to commemorate the discovery of the Raman Effect by Indian physicist Sir C.V.Raman in 1928. This discovery earned him the Nobel Prize in physics in 1930. The day is dedicated to promoting scientific awareness, encouraging innovation, and recognizing the contributions of Indian scientists.",
      imgs: [
        'scienceday_2.jpg',
        'scienceday_4.jpg',
        'scienceday_3.jpg',
        'scienceday_1.jpg',
        'scienceday_5.jpg',
      ],
    },
    {
      title: "🏫 School Observation 📝",
      schoolName: "ZPHS Kaverrammpeta, Mahabubnagar",
      desc: "During the school observation, we evaluated the teaching methods, classroom environment, and student engagement. This activity helped us understand effective pedagogical strategies and school operations.",
      imgs: [
        "co1.jpg",
        "co2.jpg",
        "co3.jpg",
        "co4.jpg",
        "co5.jpg",
        "co6.jpg",
        "co7.jpg",
        "co8.jpg",
        "co9.jpg",
      ],
      imgLabels: [
        "Classrooms",
        "Classrooms",
        "Classrooms",
        "Playground",
        "Afternoon Meals",
        "Prayer",
        "Entrance Experiments",
        "", // co8 no label
        "", // co9 no label
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header Image */}
      <div
        className="w-full h-[27rem] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(sem1_hero.jpg)",
        }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm px-10 py-6 rounded-xl shadow-2xl transform -rotate-2">
            <h1 className="text-white text-4xl font-black tracking-tight text-center">
              Welcome to Sem1 Events
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto space-y-16 py-12 px-6">
        {sections.map((sec, idx) => (
          <SectionCard
            key={idx}
            title={sec.title}
            schoolName={sec.schoolName}
            desc={sec.desc}
            imgs={sec.imgs}
            imgLabels={sec.imgLabels}
            videos={sec.videos}
          />
        ))}
      </div>
    </div>
  );
}
