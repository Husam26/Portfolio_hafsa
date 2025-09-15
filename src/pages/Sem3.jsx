import React from 'react';

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

export default function Sem3() {
  const sections = [
  {
    title: "FRESHER'S DAY CELEBRATIONS",
    description: "Freshers' Day is a welcome party for new students, typically organized by seniors in educational institutions. It's a chance for juniors to interact with seniors and faculty, fostering a sense of belonging and easing their transition into a new environment. The event often includes performances, games, and other activities to create a fun and engaging atmosphere.",
    imgs: [
    'freshersparty_1.jpg', 
    'freshersparty_2.jpg', 
    'freshersparty_3.jpg', 
    'freshersparty_4.jpg', 
    
    ],
    imgLabels: ['Freshers Party 1', 'Freshers Party 2', 'Freshers Party 3'],
    videos: 'https://www.youtube.com/embed/48fIC1JLtF4'
  },
  {
    title: "TRIP TO WONDERLA",
    description: "Our college trip to Wonderla was an unforgettable experience filled with excitement and fun. From the moment we boarded the bus, the energy was high with music, laughter, and anticipation. Once we reached Wonderla, we were thrilled by the wide range of rides and water attractions. Everyone enjoyed the roller coasters, water slides, and wave pool the most. It was a perfect blend of thrill and bonding time with friends and classmates. The day ended with tired feet but happy hearts, and we returned with memories that we'll cherish for a lifetime.",
    imgs: [
    'wonderla.jpg', 
    'wonderla2.jpg',
    'wonderla3.jpg',
    'wonderla4.jpg',
    
    ],
    imgLabels: ['Wonderla 1', 'Wonderla 2', 'Wonderla 3', 'Wonderla 4'],
    videos: 'https://www.youtube.com/embed/Gv_-qFroIjk'
  },
  {
    title: "SANKRANTI CELEBRATIONS",
    description: "Sankranti, also known as Makara Sankranti, is a Hindu festival primarily celebrated in India, marking the transition of the sun into the zodiac sign Capricorn (Makara). This festival signifies the end of winter and the beginning of longer, warmer days, and is associated with the harvest season. Celebrations include flying kites, exchanging sweets (especially sesame and jaggery), and decorating homes with rangoli. Different regions have unique traditions, but the core theme revolves around gratitude for the harvest and new beginnings.",
    imgs: [
    'sankranti.jpg',  
    'sankranti2.jpg',  
    'sankranti3.jpg',  
    'sankranti4.jpg',  
    'sankranti5.jpg',  
    'sankranti6.jpg',  

    
    ],
    videos: [
      "https://www.youtube.com/embed/9gsWGX44Gzg"
    ]
  },
  {
  title: "REPUBLIC DAY CELEBRATIONS - SPORTS",
  description: "Our Republic Day celebrations included a series of sports events and competitions to promote teamwork, fitness, and friendly rivalry among students. Activities ranged from relay races and football matches to traditional games. The atmosphere was full of energy and enthusiasm as students cheered each other on, fostering a sense of unity and national pride.",
  imgs: [
    "sports (1).jpg",
    "sports (2).jpg",
    "sports (3).jpg",
    "sports (4).jpg",
    "sports (5).jpg",
    "sports (6).jpg",
    "sports (7).jpg",
    "sports (8).jpg",
    "sports (9).jpg",
    "sports (10).jpg",
    "sports (11).jpg",
    "sports (12).jpg"
  ],
  
  videos: "https://www.youtube.com/embed/QhD9Mr39fWs"
}
,
  {
    title: "SEMINAR",
    description: "The seminar conducted at our college provided students with valuable insights into industry trends, career guidance, and emerging technologies. Experts shared their knowledge, followed by Q&A sessions, interactive workshops, and networking opportunities. The event helped students broaden their perspective and enhanced their understanding of real-world applications of classroom learning.",
    imgs: [
    'seminar.jpg' ,
    'seminar2.jpg' ,
    'seminar3.jpg' 
    
    ],
    imgLabels: ["Seminar Session 1", "Seminar Session 2"],
    videos: "https://www.youtube.com/embed/9_8evCr9zqU"
  }
];


  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">

      {/* Hero Header */}
       <div
        className="w-full h-[27rem] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(sem3_hero.jpg)",
        }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-sm px-10 py-6 rounded-xl shadow-2xl transform -rotate-2">
            <h1 className="text-white text-4xl font-black tracking-tight text-center">
              Welcome to Sem3 Events
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
