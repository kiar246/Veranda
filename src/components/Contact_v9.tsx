import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', company: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contacts = [
    { icon: Phone, label: '电话咨询', value: '+86 400-888-8888', sub: '周一至周五 9:00-18:00' },
    { icon: Mail, label: '邮箱联系', value: 'info@scrolltech.com', sub: '24小时内回复' },
    { icon: MapPin, label: '公司地址', value: '上海市浦东新区张江高科技园区', sub: '祖冲之路1000号' },
  ];

  return (
    <section id="contact" className="py-32 gradient-navy relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-20">
          <span className="text-gold text-xs letter-wide uppercase">Contact Us</span>
          <h2 className="font-serif-cn text-5xl lg:text-6xl text-white mt-4 mb-6 gold-line gold-line-center inline-block">
            与我们<span className="text-gold italic"> 联系 </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-8 font-light">
            无论您需要产品咨询、技术支持还是商务合作，我们都将竭诚为您服务
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contacts.map((c, i) => (
              <div key={i} className="flex items-start space-x-5 group">
                <div className="flex-shrink-0 w-14 h-14 border border-gold/40 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                  <c.icon className="text-gold group-hover:text-navy transition-colors" size={22} strokeWidth={1.3} />
                </div>
                <div>
                  <div className="text-gold text-xs letter-wide uppercase mb-2">{c.label}</div>
                  <div className="text-white text-lg mb-1">{c.value}</div>
                  <div className="text-white/40 text-sm">{c.sub}</div>
                </div>
              </div>
            ))}

            <div className="pt-8 border-t border-white/10">
              <div className="text-gold text-xs letter-wide uppercase mb-4">Business Hours</div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>周一 - 周五</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>周六</span>
                  <span>09:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>技术支持</span>
                  <span className="text-gold">24/7 全天候</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-navy-light p-10 border border-white/5">
              <h3 className="font-serif-cn text-2xl text-white mb-8">留言咨询</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-white/60 text-xs letter-wide uppercase mb-2">姓名 *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs letter-wide uppercase mb-2">公司</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-white/60 text-xs letter-wide uppercase mb-2">邮箱 *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:border-gold outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/60 text-xs letter-wide uppercase mb-2">电话</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-white/60 text-xs letter-wide uppercase mb-2">咨询内容 *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/20 text-white py-2 focus:border-gold outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="group flex items-center space-x-3 bg-gold hover:bg-gold/90 disabled:bg-green-600 text-navy px-10 py-4 text-sm letter-medium transition-all"
              >
                <span>{submitted ? '已提交 感谢您的咨询' : '提交咨询'}</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;