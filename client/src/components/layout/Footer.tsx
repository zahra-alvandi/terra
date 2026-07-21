import {
  Instagram,
  Send,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-stone-200 bg-stone-50">
      <Container>
        <div className="py-16">
          {/* Top */}

          <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.3fr]">
            {/* Brand */}

            <div>
              <h2 className="text-4xl font-bold tracking-wider text-primary">
                Terra
              </h2>

              <p className="mt-6 max-w-md leading-8 text-text-secondary">
                مجموعه‌ای از محصولات سرامیکی دست‌ساز با طراحی مینیمال، کیفیت
                ماندگار و الهام گرفته از طبیعت.
              </p>

              <div className="mt-8 flex gap-3">
                <a
                  href="#"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    transition
                    hover:border-primary
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="#"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-border
                    transition
                    hover:border-primary
                    hover:bg-primary
                    hover:text-white
                  "
                >
                  <Send size={18} />
                </a>
              </div>
            </div>

            {/* Shop */}

            <div>
              <h3 className="text-lg font-semibold">فروشگاه</h3>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="/shop"
                    className="group flex items-center gap-2 text-text-secondary transition hover:text-primary"
                  >
                    محصولات
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>

                <li>
                  <Link
                    to="/track-order"
                    className="group flex items-center gap-2 text-text-secondary transition hover:text-primary"
                  >
                    پیگیری سفارش
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}

            <div>
              <h3 className="text-lg font-semibold">Terra</h3>

              <ul className="mt-6 space-y-4">
                {/* <li>
                  <Link
                    to="/about"
                    className="group flex items-center gap-2 text-text-secondary transition hover:text-primary"
                  >
                    درباره ما
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li> */}

                <li>
                  <Link
                    to="/contact"
                    className="group flex items-center gap-2 text-text-secondary transition hover:text-primary"
                  >
                    تماس با ما
                    <ArrowUpRight
                      size={15}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-lg font-semibold">ارتباط با ما</h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-primary" />

                  <span className="text-text-secondary">021-12345678</span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-1 text-primary" />

                  <span className="text-text-secondary">info@terra.com</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-primary" />

                  <span className="leading-7 text-text-secondary">
                    تهران، ایران
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}

          <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-border pt-8 text-sm text-text-secondary md:flex-row">
            <p>© {new Date().getFullYear()} Terra. تمامی حقوق محفوظ است.</p>

            <p>Handmade with ❤️ by zahra</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
