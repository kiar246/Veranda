import { ArrowUpRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6fq6uaaafha/product-commercial.png',
      category: 'COMMERCIAL',
      title: '商用涡旋压缩机',
      desc: '适用于中央空调、热泵系统，功率范围 3-25HP',
      specs: ['高能效比', '低噪音运行', '长寿命设计'],
    },
    {
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6fq65aaafhq/product-industrial.png',
      category: 'INDUSTRIAL',
      title: '工业涡旋压缩机',
      desc: '大型工业制冷与工艺应用，功率范围 25-60HP',
      specs: ['高可靠性', '极端工况适应', '并联系统支持'],
    },
    {
      image: 'https://mgx-backend-cdn.metadl.com/generate/images/1135066/2026-04-19/m6fq6giaafga/product-refrigeration.png',
      category: 'REFRIGERATION',
      title: '制冷涡旋压缩机',
      desc: '商业冷冻冷藏专用，支持 R404A/R448A/R452A',
      specs: ['低温高效', '环保冷媒', '紧凑设计'],
    },
  ];

  return (
    <section id="products" className="py-32 gradient-navy relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-gold text-xs letter-wide uppercase">Our Products</span>
          <h2 className="font-serif-cn text-5xl lg:text-6xl text-white mt-4 mb-6 gold-line gold-line-center inline-block">
            精选<span className="text-gold italic"> 产品 </span>系列
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            覆盖全功率段与全应用场景，为您提供多样化的高品质涡旋压缩机选择
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="group relative bg-navy-light border border-white/5 hover:border-gold/50 overflow-hidden hover-lift transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gold text-xs letter-wide">{p.category}</span>
                  <ArrowUpRight className="text-white/30 group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" size={20} />
                </div>
                <h3 className="font-serif-cn text-2xl text-white mb-3 group-hover:text-gold transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">{p.desc}</p>
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {p.specs.map((s, j) => (
                    <li key={j} className="flex items-center text-white/60 text-xs">
                      <span className="w-1 h-1 bg-gold mr-3"></span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center space-x-3 border border-gold text-gold px-10 py-4 text-sm letter-medium hover:bg-gold hover:text-navy transition-all"
          >
            <span>查看完整产品目录</span>
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;