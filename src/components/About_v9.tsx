import { Award, Globe, Shield, Zap } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Award, title: '行业认证', desc: 'ISO9001 认证及多项行业专业资质' },
    { icon: Globe, title: '全球网络', desc: '覆盖30+国家和地区的服务体系' },
    { icon: Shield, title: '品质保障', desc: '原厂授权代理确保产品纯正' },
    { icon: Zap, title: '高效响应', desc: '7×24小时技术响应与备件供应' },
  ];

  return (
    <section id="about" className="py-32 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold z-0"></div>
            <div className="relative z-10 overflow-hidden">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6frhfqaafhq/about-factory-overview.png"
                alt="About Our Company"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold z-0"></div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4">
              <span className="text-gold text-xs letter-wide uppercase">About Us</span>
            </div>
            <h2 className="font-serif-cn text-5xl lg:text-6xl text-white mb-8 leading-tight gold-line">
              铸就<span className="text-gold italic"> 涡旋 </span>
              <br />行业新标杆
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 text-lg font-light">
              自2004年成立以来，思科智能一直专注于涡旋压缩机的全球代理与技术服务。我们与世界顶级品牌保持长期战略合作，
              致力于为暖通空调、商业制冷、工业制冷及特殊工艺应用领域提供卓越的产品与解决方案。
            </p>
            <p className="text-white/60 leading-relaxed mb-10 font-light">
              凭借深厚的行业经验、专业的技术团队与完善的服务网络，我们不仅是产品的代理商，
              更是客户值得信赖的长期合作伙伴。
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <f.icon className="text-gold group-hover:text-navy transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-base">{f.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;