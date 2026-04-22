const Partners = () => {
  const brands = [
    'COPELAND', 'DANFOSS', 'BITZER', 'PANASONIC',
    'HITACHI', 'DAIKIN', 'MITSUBISHI', 'SANDEN',
    'LG', 'SAMSUNG', 'TECUMSEH', 'EMBRACO'
  ];

  return (
    <section id="partners" className="py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-gold text-xs letter-wide uppercase">Our Partners</span>
          <h2 className="font-serif-cn text-5xl lg:text-6xl text-white mt-4 mb-6 gold-line gold-line-center inline-block">
            全球<span className="text-gold italic"> 顶级 </span>品牌
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-8 font-light">
            与世界一流涡旋压缩机制造商保持长期战略合作
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="bg-navy h-32 flex items-center justify-center group hover:bg-navy-light transition-all duration-500 cursor-pointer"
            >
              <span className="font-serif-cn text-xl tracking-[0.2em] text-white/40 group-hover:text-gold transition-colors duration-500">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="font-serif-cn text-5xl text-gold mb-2">20+</div>
            <div className="text-white/60 text-sm letter-wide uppercase">Years of Excellence</div>
            <p className="text-white/40 text-xs mt-2">二十载专业积淀</p>
          </div>
          <div>
            <div className="font-serif-cn text-5xl text-gold mb-2">ISO</div>
            <div className="text-white/60 text-sm letter-wide uppercase">Certified Quality</div>
            <p className="text-white/40 text-xs mt-2">国际标准品质认证</p>
          </div>
          <div>
            <div className="font-serif-cn text-5xl text-gold mb-2">24/7</div>
            <div className="text-white/60 text-sm letter-wide uppercase">Global Support</div>
            <p className="text-white/40 text-xs mt-2">全球全天候服务</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;