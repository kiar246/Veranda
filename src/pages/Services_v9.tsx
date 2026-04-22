import Layout from '@/components/Layout';
import { Lightbulb, Headphones, Package, Settings, Clock, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Lightbulb,
    img: '/assets/services/配图1.png',
    title: '选型与技术咨询',
    en: 'Consulting & Selection',
    desc: '根据客户实际工况与应用需求，提供专业的压缩机选型建议及系统方案支持。帮助客户提升系统匹配度与整体运行效率。',
    points: ['专业工况分析', '精准选型推荐', '系统方案设计', '能效优化建议'],
  },
  {
    num: '02',
    icon: Headphones,
    img: '/assets/services/配图2.png',
    title: '售后保障',
    en: '24-Hour Support',
    desc: '建立快速响应机制，24小时内提供专业技术支持与问题反馈。持续跟进客户使用情况，确保设备长期可靠运行。',
    points: ['24小时快速响应', '专业技术支持', '问题追踪回访', '长期使用保障'],
    highlight: '24H',
  },
  {
    num: '03',
    icon: Package,
    img: '/assets/services/配图3.png',
    title: '整体方案的一站式支持',
    en: 'Integrated One-Stop',
    desc: '面向客户需求提供从选型、供货到交付落地的整体方案支持。配合项目进度进行技术对接与实施协同，确保方案高效、稳定、完整落地。',
    points: ['整体方案设计', '稳定供应体系', '项目协同对接', '一站式技术实施'],
  },
  {
    num: '04',
    icon: Settings,
    img: '/assets/services/配图4.png',
    title: '调试与技术服务',
    en: 'Commissioning & Tech',
    desc: '为客户提供设备调试指导及系统运行优化支持。协助解决安装与使用过程中的技术问题，保障系统稳定运行。',
    points: ['现场调试指导', '系统运行优化', '安装技术支持', '故障诊断排查'],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-paper py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-neutral-900" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-neutral-900" />
        </div>
        <div className="container-x relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-6xl text-neutral-950 font-light">
            服务 <span className="italic text-neutral-500">· Service</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-base text-neutral-600 font-serif-cn leading-relaxed">
            从项目咨询到落地服务，华安达以专业能力与响应效率，构建起覆盖全生命周期的服务体系。
          </p>
        </div>
      </section>

      {/* 4-grid services */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-neutral-200">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="group relative border-r border-b border-neutral-200 p-10 md:p-14 hover:bg-neutral-50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden image-zoom bg-neutral-100 mb-8">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                    {s.highlight && (
                      <div className="absolute top-4 right-4 bg-white px-3 py-1.5 font-display text-xl font-light text-neutral-950 shadow-sm">
                        {s.highlight}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-start gap-4">
                      <span className="art-number text-5xl leading-none">{s.num}</span>
                      <div>
                        <div className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase mb-2">{s.en}</div>
                        <h3 className="font-display text-2xl md:text-[28px] text-neutral-950 font-light leading-tight">{s.title}</h3>
                      </div>
                    </div>
                    <Icon className="w-6 h-6 text-neutral-400 group-hover:text-neutral-900 transition-colors flex-shrink-0 mt-2" strokeWidth={1.2} />
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed font-serif-cn mb-6">{s.desc}</p>

                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-5 border-t border-neutral-200">
                    {s.points.map((p, pi) => (
                      <div key={pi} className="flex items-center gap-2 py-1">
                        <span className="w-1 h-1 bg-neutral-400 rounded-full flex-shrink-0"></span>
                        <span className="text-xs font-serif-cn text-neutral-700">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container-x">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light">服务承诺</h2>
            <div className="mt-4 text-xs tracking-[0.3em] text-neutral-400 uppercase">Our Commitment</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 border border-neutral-800 hover:border-neutral-500 transition">
              <Clock className="w-10 h-10 mx-auto mb-6 text-neutral-300" strokeWidth={1} />
              <div className="font-display text-3xl mb-3">24H</div>
              <div className="text-xs tracking-[0.25em] text-neutral-400 uppercase mb-4">Rapid Response</div>
              <p className="text-sm text-neutral-300 font-serif-cn">快速响应机制，24小时内反馈</p>
            </div>
            <div className="text-center p-10 border border-neutral-800 hover:border-neutral-500 transition">
              <Shield className="w-10 h-10 mx-auto mb-6 text-neutral-300" strokeWidth={1} />
              <div className="font-display text-3xl mb-3">100%</div>
              <div className="text-xs tracking-[0.25em] text-neutral-400 uppercase mb-4">Quality Assured</div>
              <p className="text-sm text-neutral-300 font-serif-cn">严格品控，所有产品符合行业标准</p>
            </div>
            <div className="text-center p-10 border border-neutral-800 hover:border-neutral-500 transition">
              <Headphones className="w-10 h-10 mx-auto mb-6 text-neutral-300" strokeWidth={1} />
              <div className="font-display text-3xl mb-3">1:1</div>
              <div className="text-xs tracking-[0.25em] text-neutral-400 uppercase mb-4">Dedicated Service</div>
              <p className="text-sm text-neutral-300 font-serif-cn">专属技术顾问一对一对接</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-x text-center">
          <h3 className="font-display text-3xl text-neutral-950 font-light mb-8">需要专业服务支持？</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+862087690208" className="btn-primary">+86 20 8769 0208 <ArrowUpRight className="ml-2 w-4 h-4" /></a>
            <a href="mailto:veranda@veranda.cn" className="btn-outline">veranda@veranda.cn</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;