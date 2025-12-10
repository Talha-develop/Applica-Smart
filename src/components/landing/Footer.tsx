import { motion } from "framer-motion";
import { APP_NAME } from "../../utils/constants";
import { fadeInUp, fadeIn } from "../../utils/animationVariants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimonials", href: "#testimonials" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Press Kit", href: "#press" },
    ],
    support: [
      { label: "Help Center", href: "#help" },
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Status", href: "#status" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "GDPR", href: "#gdpr" },
    ],
  };

  return (
    <footer
      className="backdrop-blur-md shadow-sm border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-text-body)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <h3
              className="text-xl sm:text-2xl font-bold mb-4"
              style={{ color: "var(--color-text-main)" }}
            >
              {APP_NAME}
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: "var(--color-text-body)" }}
            >
              Revolutionizing job applications with AI. Land your dream job
              faster and smarter.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-text-main)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-text-main)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "var(--color-accent-light)",
                  color: "var(--color-text-main)",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <h4
                className="font-semibold mb-4 capitalize"
                style={{ color: "var(--color-text-main)" }}
              >
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#780000" }}
                      className="transition-colors"
                      style={{ color: "var(--color-text-body)" }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="border-t border-[#669BBC]/20 pt-8 mb-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h4
              className="font-semibold mb-2"
              style={{ color: "var(--color-text-main)" }}
            >
              Stay Updated
            </h4>
            <p
              className="mb-4 text-sm"
              style={{ color: "var(--color-text-body)" }}
            >
              Get the latest tips and updates delivered to your inbox
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#669BBC]/10 border border-[#669BBC]/30 rounded-full text-[#780000] placeholder-[#FDF0D5]/40 focus:outline-none focus:border-[#780000] transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-[#780000] text-white rounded-full font-medium hover:bg-[#C1121F] transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="border-t border-[#669BBC]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm" style={{ color: "var(--color-text-body)" }}>
            © {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-[#FDF0D5]/60 hover:text-[#C1121F] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[#FDF0D5]/60 hover:text-[#C1121F] transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-[#FDF0D5]/60 hover:text-[#C1121F] transition-colors"
            >
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
