import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { FileText, ChevronDown, ChevronUp, X, ZoomIn } from 'lucide-react';

interface ProductModel {
  name: string;
  img: string;
  models: string[];
}

interface ProductCategory {
  en: string;
  cn: string;
  num: string;
  desc: string;
  pdf?: string;
  series: ProductModel[];
}

const categories: ProductCategory[] = [
  {
    en: 'Commercial Scroll',
    cn: '商用涡旋压缩机',
    num: '01',
    desc: '商用涡旋压缩机专为高负荷工况设计，具备高能效、低噪音及长时间稳定运行能力。采用先进涡旋结构，减少机械磨损，降低维护成本。广泛应用于中央空调系统、冷水机组及冷冻冷藏设备。',
    pdf: '/assets/pdfs/空调手册.pdf',
    series: [
      { name: 'ZR 系列（R22 商用空调涡旋）', img: '/assets/products/zr.jpg', models: ['ZR47KC-TFD-522', 'ZR57KC-TFD-522', 'ZR61KC-TFD-522', 'ZR68KC-TFD-522', 'ZR72KC-TFD-522', 'ZR81KC-TFD-522', 'ZR94KC-TFD-522', 'ZR108KC-TFD-522', 'ZR125KC-TFD-522', 'ZR144KC-TFD-522', 'ZR160KC-TFD-522', 'ZR190KC-TFD-522', 'ZR250KC-TWD-522', 'ZR310KC-TWD-522', 'ZR380KC-TWD-522'] },
      { name: 'ZR-KCE 系列（R22 高效商用涡旋）', img: '/assets/products/zr-kce.jpg', models: ['ZR47KCE-TFD-522', 'ZR57KCE-TFD-522', 'ZR61KCE-TFD-522', 'ZR72KCE-TFD-522', 'ZR81KCE-TFD-522', 'ZR94KCE-TFD-522', 'ZR108KCE-TFD-522', 'ZR125KCE-TFD-522', 'ZR144KCE-TFD-522', 'ZR160KCE-TFD-522', 'ZR190KCE-TFD-522', 'ZR250KCE-TWD-522', 'ZR310KCE-TWD-522', 'ZR380KCE-TWD-522'] },
      { name: 'ZR-K3 系列（小匹数商用/轻商用）', img: '/assets/products/zr-k3.jpg', models: ['ZR24K3-TFD-522', 'ZR24K3-PFJ-522', 'ZR28K3-TFD-522', 'ZR34K3-TFD-522', 'ZR34K3-PFJ-522', 'ZR36K3-TFD-522', 'ZR36K3-PFJ-522', 'ZR42K3-PFJ-522', 'ZR47K3-PFJ-522'] },
      { name: 'ZP 系列（R410A 商用空调涡旋）', img: '/assets/products/zp.jpg', models: ['ZP31KSE-TFD-522', 'ZP42KSE-PFZ-522', 'ZP51KSE-PFZ-522', 'ZP57K3E-TFD-522', 'ZP61KCE-TFD-522', 'ZP72KCE-TFD-522', 'ZP83KCE-TFD-522', 'ZP91KCE-TFD-522', 'ZP104KCE-TFD-522', 'ZP120KCE-TFD-522', 'ZP137KCE-TFD-522', 'ZP144KCE-TFD-522', 'ZP182KCE-TFD-522', 'ZP385KCE-TWD-522', 'ZP485KCE-TWD-522'] },
      { name: '数码涡旋', img: '/assets/products/digital-scroll.jpg', models: ['ZPD61KCE-PFZ-532', 'ZPD83KCE-TFD-433'] },
      { name: '喷气增焓涡旋', img: '/assets/products/evi-scroll.jpg', models: ['ZRHV94KTE-TF7-502', 'ZRH116KTE-TF7-502', 'ZFI36KQE-TFD-5L2', 'ZFI50KQE-TFD-564', 'ZFI81KQE-TFD-564'] },
    ],
  },
  {
    en: 'Refrigeration Scroll',
    cn: '冷冻冷藏涡旋压缩机',
    num: '02',
    desc: '专为冷冻冷藏环境打造，具备出色的低温适应能力与运行可靠性。保障系统长期稳定运行，满足食品与医药等严苛冷链需求。',
    pdf: '/assets/pdfs/谷轮涡旋ZB系列冷冻压缩机.pdf',
    series: [
      { name: 'ZB 系列（中温冷冻）', img: '/assets/products/zb.jpg', models: ['ZB15KQE-TFD-558', 'ZB19KQE-TFD-558', 'ZB21KQE-TFD-558', 'ZB26KQE-TFD-558', 'ZB29KQE-TFD-558', 'ZB38KQE-TFD-558', 'ZB45KQE-TFD-558', 'ZB48KQE-TFD-558', 'ZB58KQE-TFD-550', 'ZB66KQE-TFD-550', 'ZB76KQE-TFD-550', 'ZB88KQ-TFD-550', 'ZB95KQE-TFD-551', 'ZB114KQ-TFD-551'] },
      { name: 'ZF 系列（低温冷冻）', img: '/assets/products/zf.jpg', models: ['ZF13KQE-TFD-5L1', 'ZF15KQE-TFD-5L0', 'ZF18KQE-TFD-5L0'] },
    ],
  },
  {
    en: 'Transport Scroll',
    cn: '运输用涡旋压缩机',
    num: '03',
    desc: '针对运输工况设计，兼顾高效制冷与抗震耐用性能。为车辆与移动设备提供持续稳定的温控保障。',
    series: [
      { name: 'VR 系列', img: '/assets/products/vr.jpg', models: ['VR30KM-PFS-582', 'VR34KF-TFP-582', 'VR48KS-TFP-542', 'VR52KS-TFP-542', 'VR54KS-TFP-542', 'VR57KS-TFP-54E', 'VR61KF-TFP-542', 'VR94KS-TFP-522', 'VR108KS-TFP-522', 'VR125KS-TFP-522', 'VR144KS-TFP-522', 'VR160KS-TFP-522', 'VR190KS-TFP-522'] },
      { name: 'VP / VPI 系列（变频）', img: '/assets/products/vp-vpi.jpg', models: ['VP28KME-PFS-582', 'VP51KUE-TFP-54E', 'VP54KUE-TFP-54E', 'VP61KUE-TFP-54E', 'VP90KSE-TFP-522', 'VP103KSE-TFP-522', 'VP120KSE-TFP-522', 'VP137KSE-TFP-522', 'VP144KSE-TFP-522', 'VP182KSE-TFP-522', 'VP232KSE-TEP-522', 'VPI122KSE-TFP-522', 'VPI144KSE-TFP-522', 'VPI232KSE-TEP-522', 'VPI292KSE-TEP-522'] },
    ],
  },
  {
    en: 'Heat Pump & Water',
    cn: '热泵与水系统涡旋',
    num: '04',
    desc: '适用于热泵及水系统应用，实现高效制热与节能运行。在多种气候条件下保持优异性能，提升系统整体能效表现。',
    pdf: '/assets/pdfs/产品手册ZW.pdf',
    series: [
      { name: 'ZW 系列', img: '/assets/products/heatpump.jpg', models: ['ZW28KWP-PFZ-58E', 'ZW30KAE-PFS-582', 'ZW31KWP-PFZ-522', 'ZW34KA-TFP-582', 'ZW42KWP-PFZ-522', 'ZW52KA-PFS-522', 'ZW61KA-TFP-522', 'ZW72KA-TFP-52E', 'ZW79KA-TFP-522', 'ZW108KA-TFP-522', 'ZW125KA-TFP-522', 'ZW150KA-TFP-522', 'ZW166HAP-TFP-522', 'ZW258HSP-TFP-522', 'ZW420HAP-TFP-522', 'ZW465HAP-TFP-522', 'ZW520HSP-TEP-522'] },
    ],
  },
  {
    en: 'Reciprocating',
    cn: '往复式密封压缩机',
    num: '05',
    desc: '采用成熟可靠的往复式结构设计，运行稳定、适应性强。广泛应用于多种制冷场景，兼顾经济性与耐用性。',
    series: [
      { name: '往复式压缩机', img: '/assets/products/reciprocating.jpg', models: ['SRC-S-755', 'SRC-S-113W', 'SRC-S-503W', 'SRC-S-755W', 'SRC-S-785W', 'SRC-S-885W', 'SRC-S-985W', '134-S-110W', '134-S-140W', '134-S-180W', '134-S-240W', '134-S-270'] },
    ],
  },
  {
    en: 'Fluid Control',
    cn: '流体控制产品',
    num: '06',
    desc: '涵盖多类型流体控制产品，助力系统精准调节与高效运行。为工业及商用系统提供稳定可靠的控制解决方案。',
    pdf: '/assets/pdfs/谷轮流体控制产品手册_综合.pdf',
    series: [
      { name: '电子/热力膨胀阀（EEV/TXV）', img: '/assets/products/fluid-eev.jpg', models: ['EXV-M60', 'EXV-M30', 'EX5-U21', 'EX5-U31', 'EX6-I21', 'EX7-I21', 'EX8-M21', 'EXM-B0D', 'EXD-M03', 'EXD-SH1', 'EXD-SH2'] },
      { name: '电磁阀与线圈', img: '/assets/products/fluid-solenoid.jpg', models: ['EV4-4023M0G-1BH', 'EV4-4023M0G-1BV', 'Gas Valve 24V DC'] },
      { name: '干燥过滤器（EK / BFK）', img: '/assets/products/fluid-filter.jpg', models: ['EK033S', 'EK053', 'EK083S', 'EK163S', 'EK305S', 'EK415S', 'BFK053SSTD', 'BFK083SSTD', 'BFK164SSTD', 'BFK305SSTD', 'UH-48', 'UR-48'] },
      { name: '压力控制 / 传感器', img: '/assets/products/fluid-pressure.jpg', models: ['PS1A5A', 'PS2A7A', 'PS2-L7A', 'PT4-30M', 'PT5-07M', 'PT5-18M', 'PT5-50M', 'PT5N-18M', 'PT4-M60'] },
      { name: '温度传感器', img: '/assets/products/fluid-temp.jpg', models: ['TEMP SENSOR PT1000'] },
      { name: '控制系统 Dixell', img: '/assets/products/fluid-control.jpg', models: ['DIXELL PRESSURE SENSOR PP11', 'DIXELL SH CONTROLLER XEV22D06'] },
      { name: '控制器 / 控制模块', img: '/assets/products/fluid-module.jpg', models: ['OM3-N60', 'OM3-P60', 'OM3-120', 'OM0-CCD', 'OMB-ACG', 'ESC-24V AC', 'ECN-N30', 'FSO-N30'] },
      { name: '截止阀件', img: '/assets/products/fluid-valve.jpg', models: ['303150', '303151', '303156'] },
      { name: '机械阀件 TRAE 系列', img: '/assets/products/fluid-trae.jpg', models: ['TRAE+14MC', 'TRAE+20HC', 'TRAE+20SC', 'TRAE+30HC', 'TRAE+40HC', 'TRAE10HCA', 'TRAE12HCA', 'TRAE50HC', 'TRAE60HC'] },
      { name: '机械阀件 TRAES 系列', img: '/assets/products/fluid-traes.jpg', models: ['TRAES10HC', 'TRAES10SC', 'TRAES12HC', 'TRAES15HC', 'TRAES7SC', 'TRAES8HC', 'TRAES9MC'] },
      { name: '机械阀件 THR 系列', img: '/assets/products/fluid-thr.jpg', models: ['THR100HCSAE', 'THR100HCST', 'THR75HCST'] },
      { name: '机械阀件 TFES 系列', img: '/assets/products/fluid-tfes.jpg', models: ['TFES16ZAA', 'TFES20HCA', 'TFES20ZAA'] },
    ],
  },
];

interface LightboxImage {
  src: string;
  alt: string;
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedSeries, setExpandedSeries] = useState<Record<string, boolean>>({});
  const [lightbox, setLightbox] = useState<LightboxImage | null>(null);

  const toggleSeries = (key: string) => {
    setExpandedSeries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    if (lightbox) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const currentCat = categories[activeCategory];

  return (
    <Layout>
      {/* Header */}
      <section className="relative bg-paper py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-neutral-900" />
          <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full border border-neutral-900" />
        </div>
        <div className="container-x relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-neutral-900"></div>
            <span className="text-xs tracking-[0.3em] text-neutral-600 uppercase">Product Collection</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-neutral-950 font-light leading-tight">
            产品系列 <span className="italic text-neutral-500">Series</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-neutral-600 font-serif-cn leading-relaxed">
            作为谷轮涡旋压缩机中国大陆地区总代理，华安达为客户提供覆盖空调、冷冻、运输、热泵及流体控制的完整产品矩阵。
          </p>
          <div className="mt-10 flex items-center gap-6">
            <img src="/assets/products/copeland-logo.png" alt="Copeland" className="h-10 opacity-80" />
            <div className="text-xs tracking-widest text-neutral-500 uppercase">Authorized Distributor</div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-20 bg-white/95 backdrop-blur-md border-b border-neutral-200 z-40">
        <div className="container-x">
          <div className="flex gap-8 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => { setActiveCategory(i); setExpandedSeries({}); }}
                className={`relative flex-shrink-0 text-sm tracking-wider transition-colors pb-2 ${
                  activeCategory === i ? 'text-neutral-950 font-medium' : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <span className="art-number text-xs mr-2">{cat.num}</span>
                <span className="font-serif-cn">{cat.cn}</span>
                {activeCategory === i && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-950"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Content */}
      <section className="py-20 bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-start gap-4 mb-6">
                <span className="art-number text-6xl">{currentCat.num}</span>
                <div>
                  <div className="text-xs tracking-[0.3em] text-neutral-500 uppercase mb-2">{currentCat.en}</div>
                  <h2 className="font-display text-3xl md:text-4xl text-neutral-950 font-light">{currentCat.cn}</h2>
                </div>
              </div>
              {currentCat.pdf && (
                <a
                  href={currentCat.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral-700 border border-neutral-300 px-5 py-2.5 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all"
                >
                  <FileText className="w-4 h-4" strokeWidth={1.5} />
                  <span className="font-serif-cn">下载产品手册</span>
                </a>
              )}
            </div>
            <div className="lg:col-span-7">
              <p className="text-base text-neutral-600 leading-relaxed font-serif-cn">{currentCat.desc}</p>
            </div>
          </div>

          {/* Series grid */}
          <div className="space-y-6">
            {currentCat.series.map((series, idx) => {
              const key = `${activeCategory}-${idx}`;
              const expanded = expandedSeries[key];
              const visibleModels = expanded ? series.models : series.models.slice(0, 8);
              return (
                <div key={key} className="border border-neutral-200 hover-lift bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: series.img, alt: series.name })}
                      className="relative group aspect-[4/3] md:aspect-auto md:min-h-[260px] overflow-hidden bg-neutral-50 border-b md:border-b-0 md:border-r border-neutral-200 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-neutral-900"
                      aria-label={`查看 ${series.name} 大图`}
                    >
                      <img
                        src={series.img}
                        alt={series.name}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/95 text-neutral-900 text-xs tracking-widest uppercase shadow-lg">
                          <ZoomIn className="w-3.5 h-3.5" strokeWidth={1.5} />
                          <span>查看大图</span>
                        </div>
                      </div>
                    </button>
                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-6">
                        <h3 className="font-display text-xl md:text-2xl text-neutral-950 leading-snug break-words flex-1 min-w-0">{series.name}</h3>
                        <span className="text-xs text-neutral-500 tracking-wider whitespace-nowrap flex-shrink-0 self-start">{series.models.length} Models</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
                        {visibleModels.map((m, mi) => (
                          <div key={mi} className="text-xs text-neutral-700 py-1.5 px-2 bg-neutral-50 border border-neutral-100 hover:bg-neutral-100 transition truncate" title={m}>
                            {m}
                          </div>
                        ))}
                      </div>
                      {series.models.length > 8 && (
                        <button
                          onClick={() => toggleSeries(key)}
                          className="mt-auto self-start inline-flex items-center gap-1 text-xs tracking-widest text-neutral-600 hover:text-neutral-950 uppercase"
                        >
                          {expanded ? (<>收起 <ChevronUp className="w-3 h-3" /></>) : (<>查看全部 {series.models.length} 型号 <ChevronDown className="w-3 h-3" /></>)}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="container-x text-center">
          <h3 className="font-display text-3xl text-neutral-950 font-light mb-4">需要专业的选型建议？</h3>
          <p className="text-neutral-600 font-serif-cn mb-8">华安达技术团队为您提供一对一选型咨询与系统方案支持。</p>
          <a href="mailto:veranda@veranda.cn" className="btn-primary">立即咨询 veranda@veranda.cn</a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="产品图片大图预览"
        >
          {/* Top bar: title + close */}
          <div
            className="flex-shrink-0 flex items-start justify-between gap-4 px-4 md:px-8 py-4 md:py-5 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white min-w-0 flex-1">
              <div className="font-display text-base md:text-xl leading-snug break-words">{lightbox.alt}</div>
              <div className="text-[10px] md:text-xs tracking-[0.25em] text-white/50 uppercase mt-1">Click outside or press ESC to close</div>
            </div>
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              aria-label="关闭"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          {/* Image area - fills remaining space, no padding */}
          <div
            className="flex-1 min-h-0 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Products;