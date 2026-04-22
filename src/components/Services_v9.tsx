import { Wrench, Headphones, Package, FileText, GraduationCap, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: FileText, title: '技术咨询', desc: '专业工程师提供选型与方案设计咨询' },
    { icon: Truck, title: '产品供应', desc: '原厂正品，充足库存，快速交付' },
    { icon: Wrench, title: '安装调试', desc: '专业团队提供安装调试指导服务' },
    { icon: Headphones, title: '售后维保', desc: '7×24小时技术响应，贴心维护服务' },
    { icon: Package, title: '备件供应', desc: '全系列原厂备件，保障长期运行' },
    { icon: GraduationCap, title: '技术培训', desc: '定期为客户工程师提供专业培训' },
  ];

  return (
    <section id="services" className="py-32 gradient-navy relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-gold text-xs letter-wide uppercase">Our Services</span>
          <h2 className="font-serif-cn text-5xl lg:text-6xl text-white mt-4 mb-6 gold-line gold-line-center inline-block">
            全方位<span className="text-gold italic"> 服务 </span>支持
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-navy p-10 hover:bg-navy-light transition-all duration-500 group cursor-pointer relative"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-gold group-hover:w-full transition-all duration-500"></div>
              <s.icon className="text-gold mb-6" size={36} strokeWidth={1.2} />
              <h3 className="font-serif-cn text-2xl text-white mb-3 group-hover:text-gold transition-colors">
                {s.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">{s.desc}</p>
              <div className="mt-6 text-gold text-xs letter-wide opacity-0 group-hover:opacity-100 transition-opacity">
                了解更多 →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;