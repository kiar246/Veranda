import { useState } from 'react';
import Layout from '@/components/Layout';
import { Heart, Settings2, Users, Mail, Phone, MapPin, ArrowRight, Briefcase } from 'lucide-react';

const philosophies = [
  { num: '01', icon: Heart, title: '以诚信服务为核心价值观', en: 'Integrity First', desc: '广州华安达实业始终以"诚信服务"为核心价值观，深耕制冷与暖通领域，服务客户遍及全国。已与数千家企业建立合作，覆盖制冷设备、冷链物流、能源环保及智能制造等多个行业，形成稳定且持续增长的客户网络。依托完善的供应链体系与专业服务能力，华安达能够实现快速响应与稳定交付，为客户提供可靠、高效的解决方案。' },
  { num: '02', icon: Settings2, title: '以科学管理为支撑', en: 'Scientific Management', desc: '华安达坚持以科学管理为基础，持续推进流程规范化与运营精细化建设，形成高效协同的内部管理体系。通过不断优化业务流程与资源配置，公司在保障服务质量的同时提升整体运作效率，为客户提供稳定、可持续的服务保障。' },
  { num: '03', icon: Users, title: '以高素质的人才为动力', en: 'Talent Driven', desc: '公司高度重视人才队伍建设，持续引进并培养具备专业能力与责任意识的高素质人才。依托经验丰富的团队与良好的成长机制，华安达不断提升服务水平与技术能力，为企业长期发展注入持续动力。' },
];

const About = () => {
  const [showCareer, setShowCareer] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-paper py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-neutral-900" />
          <div className="absolute top-0 -right-20 w-[500px] h-[500px] rounded-full border border-neutral-900" />
        </div>
        <div className="container-x relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-neutral-900"></div>
              <span className="text-xs tracking-[0.3em] text-neutral-600 uppercase">About Veranda</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-neutral-950 font-light leading-[1.1]">
              关于华安达
              <br />
              <span className="italic text-neutral-500">Since 1996</span>
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-neutral-600 font-serif-cn leading-relaxed">
              华安达实业成立于 1996 年，是一家优秀的民营企业，专注于压缩机产品销售及相关方案配套服务。公司深耕暖通及工业领域多年，业务覆盖全国，产品广泛应用于热泵、空调、冷冻等领域。
            </p>
          </div>
        </div>
      </section>

      {/* Company intro stats */}
      <section className="py-20 bg-white border-b border-neutral-200">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <div className="font-display text-5xl text-neutral-950 font-light">1996</div>
            <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Established</div>
          </div>
          <div>
            <div className="font-display text-5xl text-neutral-950 font-light">30<span className="text-2xl italic">+</span></div>
            <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Years</div>
          </div>
          <div>
            <div className="font-display text-5xl text-neutral-950 font-light">1000<span className="text-2xl italic">+</span></div>
            <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Partners</div>
          </div>
          <div>
            <div className="font-display text-5xl text-neutral-950 font-light">全国</div>
            <div className="text-xs tracking-widest text-neutral-500 uppercase mt-2">Nationwide Network</div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 bg-neutral-50">
        <div className="container-x">
          <div className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Our Philosophy</div>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-950 font-light">
              我们的理念
            </h2>
            <div className="divider-art max-w-xs mx-auto mt-6"></div>
          </div>

          <div className="space-y-12">
            {philosophies.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4">
                      <span className="art-number text-7xl">{p.num}</span>
                      <Icon className="w-8 h-8 text-neutral-700" strokeWidth={1} />
                    </div>
                  </div>
                  <div className="lg:col-span-9 lg:border-l lg:border-neutral-300 lg:pl-12">
                    <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-3">{p.en}</div>
                    <h3 className="font-display text-2xl md:text-3xl text-neutral-950 mb-5 font-light">{p.title}</h3>
                    <p className="text-base text-neutral-600 leading-relaxed font-serif-cn">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Latest News</div>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-950 font-light">
                新闻 <span className="italic">· News</span>
              </h2>
            </div>
          </div>

          <article className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] overflow-hidden image-zoom col-span-2 md:col-span-1">
                <img src="/assets/about/expo1.jpg" alt="2026中国制冷展" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/5] overflow-hidden image-zoom col-span-2 md:col-span-1">
                <img src="/assets/about/expo2.jpg" alt="2026中国制冷展" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">2026.04.08 — 04.10 · Beijing</div>
              <h3 className="font-display text-3xl md:text-4xl text-neutral-950 font-light leading-snug mb-6">
                华安达实业亮相 <span className="italic">2026 中国制冷展</span>
              </h3>
              <div className="space-y-4 text-sm text-neutral-600 leading-relaxed font-serif-cn">
                <p>2026 年 4 月 8 日至 10 日，中国制冷展在首都国际会展中心隆重举办。本届展会汇聚全球暖通空调与制冷行业众多知名企业与专业观众，是行业内极具影响力的重要盛会。</p>
                <p>广州华安达实业有限公司受邀参展，携多款压缩机产品及系统解决方案精彩亮相（展台号：<span className="font-medium text-neutral-900">A2H11</span>）。公司围绕热泵、空调及冷冻应用场景，重点展示了在暖通及工业领域的成熟应用经验与技术优势。</p>
                <p>展会期间，华安达实业通过现场产品展示、技术交流及案例分享，与来自全国乃至全球的行业客户及合作伙伴进行了深入沟通，进一步拓展了市场合作空间，提升了品牌影响力。</p>
                <p>作为一家成立于 1996 年的专业企业，华安达实业始终专注于压缩机产品销售及配套解决方案服务。未来，公司将继续以客户需求为导向，为行业提供更加高效、可靠的系统解决方案。</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Career */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-4">Join Us</div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
                开启职业 <span className="italic">新篇章</span>
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed font-serif-cn mb-8 max-w-xl">
                销售经理长期招人，其他岗位欢迎进一步咨询，我们欢迎每一位高素质人才的到来！
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  <span>veranda@veranda.cn</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-300">
                  <Phone className="w-4 h-4" strokeWidth={1.5} />
                  <span>+86 133 9247 3750</span>
                </div>
              </div>
              <button
                onClick={() => setShowCareer(!showCareer)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-neutral-950 text-sm tracking-widest uppercase hover:bg-neutral-200 transition"
              >
                {showCareer ? '收起详情' : '立即申请'}
                <ArrowRight className={`w-4 h-4 transition-transform ${showCareer ? 'rotate-90' : ''}`} />
              </button>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-neutral-800 p-8">
                <Briefcase className="w-10 h-10 mb-6 text-neutral-400" strokeWidth={1} />
                <div className="text-xs tracking-[0.3em] text-neutral-400 uppercase mb-2">Position</div>
                <div className="font-display text-3xl font-light mb-4">销售经理</div>
                <div className="text-xs text-neutral-400 tracking-widest uppercase">Sales Manager · HVACR</div>
              </div>
            </div>
          </div>

          {showCareer && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-800 pt-12 fade-in">
              <div>
                <h3 className="font-display text-2xl mb-6 font-light">岗位职责</h3>
                <ol className="space-y-3 text-sm text-neutral-300 font-serif-cn leading-relaxed">
                  <li>1. 负责公司全盘账务处理，独立完成账务核算、结账及财务报表编制</li>
                  <li>2. 统筹增值税、企业所得税等各类税务申报及税务筹划工作</li>
                  <li>3. 负责对接税务局、银行等外部机构，确保沟通顺畅及事务合规推进</li>
                  <li>4. 跟踪业务数据（销售、库存、回款等），进行财务分析并提供建议</li>
                  <li>5. 管理公司资金流，优化资金使用效率及风险控制</li>
                  <li>6. 配合审计工作，确保财务资料完整、规范</li>
                  <li>7. 完善及优化公司财务制度与流程</li>
                  <li>8. 工作时间：单双周-周六半天，午餐时间 1.5 小时</li>
                </ol>
              </div>
              <div>
                <h3 className="font-display text-2xl mb-6 font-light">任职要求</h3>
                <ol className="space-y-3 text-sm text-neutral-300 font-serif-cn leading-relaxed">
                  <li>1. 本科或以上且有至少 5 年全盘财务经验，有制造业/贸易背景优先</li>
                  <li>2. 熟练使用财务软件、Excel、金蝶云系统</li>
                  <li>3. 熟悉暖通制冷或工业应用市场，有一定客户资源者优先</li>
                  <li>4. 具备良好的沟通能力、能独立对接税务局、银行等外部机构</li>
                  <li>5. 目标导向强，具备较强的市场开拓能力和抗压能力</li>
                  <li>6. 能适应出差，具备团队合作精神</li>
                </ol>
                <div className="mt-8 p-6 bg-neutral-900 border border-neutral-800">
                  <div className="text-xs tracking-[0.25em] text-neutral-400 uppercase mb-2">Priority</div>
                  <p className="text-sm text-neutral-300 font-serif-cn">具备 HVACR（暖通空调与制冷）行业背景或相关资源者优先考虑。</p>
                </div>
                <p className="mt-6 text-sm text-neutral-400 font-serif-cn">
                  有意向者欢迎直接将您的简历发至邮箱：<a href="mailto:veranda@veranda.cn" className="text-white underline">veranda@veranda.cn</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-white">
        <div className="container-x">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-4">Contact Us</div>
            <h2 className="font-display text-4xl md:text-5xl text-neutral-950 font-light">联系我们</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-neutral-200 hover-lift text-center">
              <Mail className="w-8 h-8 mx-auto mb-6 text-neutral-700" strokeWidth={1} />
              <div className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-3">Email</div>
              <a href="mailto:veranda@veranda.cn" className="font-display text-xl text-neutral-950 hover:text-neutral-600 transition">veranda@veranda.cn</a>
            </div>
            <div className="p-10 border border-neutral-200 hover-lift text-center">
              <Phone className="w-8 h-8 mx-auto mb-6 text-neutral-700" strokeWidth={1} />
              <div className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-3">Phone</div>
              <a href="tel:+862087690208" className="font-display text-xl text-neutral-950 hover:text-neutral-600 transition">+86 20 8769 0208</a>
            </div>
            <div className="p-10 border border-neutral-200 hover-lift text-center">
              <MapPin className="w-8 h-8 mx-auto mb-6 text-neutral-700" strokeWidth={1} />
              <div className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-3">Address</div>
              <p className="text-sm text-neutral-700 font-serif-cn leading-relaxed">广州市天河区珠江新城<br />珠江西路 17 号<br />广晟国际大厦 24F</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;