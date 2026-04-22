const Applications = () => {
  const apps = [
    {
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6frdwaaafiq/application-hvac.png',
      title: '暖通空调',
      subtitle: 'HVAC Systems',
      desc: '商业楼宇、数据中心、医院学校中央空调系统解决方案',
    },
    {
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6frhgaaafia/application-refrigeration.png',
      title: '商业制冷',
      subtitle: 'Refrigeration',
      desc: '超市冷链、冷藏仓储、食品加工、餐饮连锁制冷设备',
    },
    {
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6frfraaafgq/application-industrial.png',
      title: '工业应用',
      subtitle: 'Industrial',
      desc: '化工、制药、电子制造、特殊工艺的工业制冷与压缩',
    },
  ];

  return (
    <section id="applications" className="py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-gold text-xs letter-wide uppercase">Applications</span>
          <h2 className="font-serif-cn text-5xl lg:text-6xl text-white mt-4 mb-6 gold-line gold-line-center inline-block">
            广泛<span className="text-gold italic"> 应用 </span>领域
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {apps.map((a, i) => (
            <div
              key={i}
              className="group relative overflow-hidden h-[480px] cursor-pointer"
            >
              <img
                src={a.image}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-xs letter-wide uppercase">{a.subtitle}</span>
                  <h3 className="font-serif-cn text-3xl text-white mt-3 mb-4">{a.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {a.desc}
                  </p>
                  <div className="mt-4 h-px w-0 group-hover:w-20 bg-gold transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;