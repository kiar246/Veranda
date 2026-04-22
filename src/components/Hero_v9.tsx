import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6frc5iaafgq/hero-compressor-industrial.png"
          alt="Industrial Scroll Compressor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 text-center">
        <div className="fade-in-up">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center space-x-4">
              <span className="h-px w-12 bg-gold"></span>
              <span className="text-gold text-xs letter-wide uppercase">Premium Scroll Compressor Agency</span>
              <span className="h-px w-12 bg-gold"></span>
            </div>
          </div>

          <h1 className="font-serif-cn text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
            <span className="block">精工铸造</span>
            <span className="block mt-4">
              <span className="text-gold italic">卓越</span>
              <span className="text-white">动力</span>
            </span>
          </h1>

          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            二十年专业涡旋压缩机代理经验<br />
            为全球客户提供世界顶级品牌与卓越工程解决方案
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#products"
              className="group flex items-center space-x-3 bg-gold hover:bg-gold/90 text-navy px-8 py-4 text-sm letter-medium transition-all duration-300"
            >
              <span>探索产品系列</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center space-x-3 border border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 text-sm letter-medium transition-all duration-300"
            >
              <span>联系我们</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12">
          {[
            { num: '20+', label: '行业经验' },
            { num: '500+', label: '合作客户' },
            { num: '50+', label: '代理品牌' },
            { num: '30+', label: '服务国家' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif-cn text-4xl md:text-5xl text-gold mb-2">{s.num}</div>
              <div className="text-white/60 text-xs letter-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-gold" size={28} />
      </div>
    </section>
  );
};

export default Hero;