import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowUpRight, Award, Shield, Zap, Heart, Clock, Users } from 'lucide-react';

const applications = [
  { img: '/assets/home/图1.png', title: '空调系统', en: 'HVAC', desc: '应用于商用及家用空调系统，提供高效稳定的制冷与舒适环境控制。' },
  { img: '/assets/home/图2.png', title: '热泵系统', en: 'Heat Pump', desc: '广泛应用于供暖、热水及空气源热泵系统，实现高效节能的冷热转换。' },
  { img: '/assets/home/图3.png', title: '制冷系统', en: 'Refrigeration', desc: '覆盖冷库、冷链物流及食品医药储存，确保温控环境稳定可靠。' },
  { img: '/assets/home/图4.png', title: '工业与商用设备', en: 'Industrial', desc: '应用于工艺冷却及商用制冷设备，保障设备高效运行与持续稳定。' },
];

const advantages = [
  { icon: Zap, num: '01', title: '一站式整体解决方案', desc: '从选型咨询、产品供应到技术支持与售后服务，我们提供全流程一体化服务，帮助客户高效完成项目落地。' },
  { icon: Clock, num: '02', title: '三十余年行业经验', desc: '深耕行业三十余年，积累了丰富的市场经验与技术沉淀，能够为客户提供更加成熟可靠的解决方案。' },
  { icon: Shield, num: '03', title: '稳定供应体系', desc: '建立成熟的供应链体系，确保产品来源稳定、交付及时，满足客户长期与批量采购需求。' },
  { icon: Award, num: '04', title: '品质保障', desc: '严格把控产品质量，所有产品均符合行业标准，确保性能可靠、运行稳定。' },
  { icon: Users, num: '05', title: '高效响应服务', desc: '快速响应客户需求，提供及时报价与技术反馈，缩短沟通周期，提高合作效率。' },
  { icon: Heart, num: '06', title: '诚信合作理念', desc: '坚持以客户为中心，秉承诚信、务实的合作态度，致力于建立长期稳定的合作关系。' },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-paper overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-20 -left-20 w-[600px] h-[600px] rounded-full border border-neutral-900" />
          <div className="absolute top-40 -left-10 w-[400px] h-[400px] rounded-full border border-neutral-900" />
          <div className="absolute bottom-0 -right-40 w-[800px] h-[800px] rounded-full border border-neutral-900" />
        </div>

        <div className="container-x relative z-10 py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 slide-up">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-neutral-900"></div>
              <span className="font-display italic text-sm tracking-[0.35em] text-neutral-700 uppercase">Since 1996</span>
              <div className="w-12 h-px bg-neutral-900"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-neutral-950 mb-8 font-light">
              稳定之选
              <br />
              <span className="italic font-normal">源于专业</span>
            </h1>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-700 mb-10 font-light">
              长期合作 <span className="italic">· 始于诚信</span>
            </h2>

            <p className="text-base text-neutral-600 max-w-xl leading-relaxed font-serif-cn mb-12">
              深耕暖通行业三十余年，中国领先的商用及中央空调压缩机渠道供应商 ——
              谷轮涡旋压缩机中国大陆地区总代理。
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary group">
                探索产品系列
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link to="/about" className="btn-outline">了解华安达</Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative fade-in">
            <div className="relative aspect-[4/5] overflow-hidden bg-white">
              <img src="https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-20/m63egeqaafiq/hero-scroll-compressor.png" alt="Large-displacement Scroll Compressor" className="w-full h-full object-contain p-6" />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-[10px] tracking-[0.3em] uppercase mb-1 opacity-80">Authorized Distributor</div>
                <div className="font-display text-2xl">Copeland Scroll · 谷轮涡旋</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-neutral-900 opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-neutral-900 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-28 bg-white">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">About Veranda</div>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-950 leading-tight font-light">
              <span className="italic">Thirty Years</span>
              <br />of Industry Dedication
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-neutral-700 leading-relaxed font-serif-cn mb-6">
              广州市华安达实业有限公司成立于 <span className="font-display italic text-2xl">1996</span> 年，深耕暖通行业三十余年，是中国领先的商用及中央空调压缩机渠道供应商。
            </p>
            <p className="text-base text-neutral-600 leading-relaxed font-serif-cn mb-6">
              公司为谷轮涡旋压缩机及相关产品中国大陆地区总代理，拥有完善的供应链体系与技术服务能力，销售网络覆盖全国，并与超过 1000 家中央空调制造企业建立了长期合作关系。
            </p>
            <p className="text-base text-neutral-600 leading-relaxed font-serif-cn">
              华安达始终坚持以诚信为本、以专业为基，持续为客户提供高效可靠的产品与服务。
            </p>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-neutral-200">
              <div>
                <div className="font-display text-4xl md:text-5xl text-neutral-950 font-light">30<span className="text-xl align-top italic">+</span></div>
                <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Years of Experience</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl text-neutral-950 font-light">1000<span className="text-xl align-top italic">+</span></div>
                <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Partner Enterprises</div>
              </div>
              <div>
                <div className="font-display text-4xl md:text-5xl text-neutral-950 font-light">∞</div>
                <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Trusted Partnership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-28 bg-neutral-50">
        <div className="container-x">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Applications</div>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-950 font-light">
              <span className="italic">应用领域</span>
            </h2>
            <div className="divider-art max-w-xs mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applications.map((app, i) => (
              <div key={i} className="group bg-white hover-lift border border-neutral-200">
                <div className="aspect-[16/10] overflow-hidden image-zoom">
                  <img src={app.img} alt={app.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase mb-2">{app.en}</div>
                      <h3 className="font-display text-2xl text-neutral-950">{app.title}</h3>
                    </div>
                    <span className="art-number text-3xl">0{i + 1}</span>
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed font-serif-cn">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-28 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Our Strengths</div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-950 font-light leading-tight">
                <span className="italic">公司优势</span>
                <br />Six Pillars of Excellence
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-base text-neutral-600 leading-relaxed font-serif-cn">
                从专业选型到交付服务，华安达以一站式解决方案与三十余年沉淀，为每一位合作伙伴提供稳健、可信赖的长期支持。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div key={i} className="group bg-white p-10 hover:bg-neutral-50 transition-colors duration-500">
                  <div className="flex justify-between items-start mb-8">
                    <Icon className="w-8 h-8 text-neutral-900" strokeWidth={1.2} />
                    <span className="art-number text-4xl">{adv.num}</span>
                  </div>
                  <h3 className="font-display text-2xl text-neutral-950 mb-4">{adv.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-serif-cn">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-neutral-950 text-white">
        <div className="container-x text-center">
          <div className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-6">Let's Build Together</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
            开启您的 <span className="italic">稳定之选</span>
          </h2>
          <p className="text-base text-neutral-300 max-w-2xl mx-auto font-serif-cn mb-12 leading-relaxed">
            无论是选型咨询、系统方案还是长期供货合作，华安达都将以专业与诚信为您提供最可靠的答案。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="inline-flex items-center px-10 py-4 bg-white text-neutral-950 text-sm tracking-widest uppercase hover:bg-neutral-200 transition">
              查看服务
            </Link>
            <Link to="/about" className="inline-flex items-center px-10 py-4 border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-neutral-950 transition">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;