import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container-x py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/assets/logo.png" alt="华安达" className="h-16 w-auto object-contain" />
              <div>
                <div className="font-display text-3xl font-semibold text-neutral-900">华安达</div>
                <div className="text-[10px] tracking-[0.25em] text-neutral-500 uppercase">Guangzhou Veranda Corporation</div>
              </div>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-md font-serif-cn">
              广州市华安达实业有限公司，深耕暖通行业三十余年，是中国领先的商用及中央空调压缩机渠道供应商，谷轮涡旋压缩机中国大陆地区总代理。
            </p>
            <div className="mt-8 flex gap-4 text-xs tracking-widest text-neutral-500 uppercase">
              <span>诚信</span><span>·</span><span>专业</span><span>·</span><span>长期</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-6">导航</h4>
            <ul className="space-y-3 text-sm text-neutral-700 font-serif-cn">
              <li><Link to="/" className="hover:text-neutral-950 transition">首页</Link></li>
              <li><Link to="/products" className="hover:text-neutral-950 transition">产品系列</Link></li>
              <li><Link to="/services" className="hover:text-neutral-950 transition">服务</Link></li>
              <li><Link to="/about" className="hover:text-neutral-950 transition">关于我们</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] text-neutral-500 uppercase mb-6">联系</h4>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>veranda@veranda.cn</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>+86 20 8769 0208</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>+86 133 9247 3750</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span className="font-serif-cn text-xs leading-relaxed">广州市天河区珠江新城珠江西路17号广晟国际大厦24F</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>© 2026 广州市华安达实业有限公司 Veranda Industry Co., Ltd. All rights reserved.</span>
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 transition underline-offset-4 hover:underline"
            >
              粤ICP备2022122443号-1
            </a>
          </div>
          <span className="tracking-widest uppercase">Stability · Trust · Partnership</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;