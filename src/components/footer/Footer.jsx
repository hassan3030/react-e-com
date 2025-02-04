import React from "react";
import "./footer.css";
import { MdEmail } from "react-icons/md";
import { LuCopyleft } from "react-icons/lu";
 const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-first">
        <h2>متواجدین دائما لمساعدتك</h2>
        <p>
          {" "}
          تواصل معانا عبر الإيميل <br />
          <MdEmail id="email-icon" /> info@yourdomain.com{" "}
        </p>
      </div>
      <div className="footer-middle">
        <div className="footer-cat">
          <ul>
          <li>الإلكترونيات</li>
            <li>الکامیرات و تسجیل فیدیو</li>
            <li>الأجهزه المنزلیه</li>
            <li>الهواتف</li>
            <li>سماعات الرأس</li>
            <li>التلفیزیونات</li>
            <li>اجهزه التابلیت</li>
          </ul>
        </div>
        <div className="footer-cat">
          <ul>
           <li>الأزیاء</li>
            <li>أزیاء رجالیه</li>
            <li>أزیاء نسائیه</li>
            <li>أزیاء الأولاد</li>
            <li>نظارات</li>
            <li>المجوهرات</li>
            <li>الساعات</li>
          </ul>
        </div>

        <div className="footer-cat">
          <ul>
          <li>الجمال</li>
            <li>العطور</li>
            <li>المکیاج</li>
            <li>العنایه بالشعر</li>
            <li>العنایه بالبشره</li>
            <li>الجسم و الاستحمام</li>
            <li>منتجات الرعایه الصحیه</li>
          </ul>
        </div>

        <div className="footer-cat">
          <ul>
          <li>المطبخ و الأجهزه المنزلیه</li>
            <li>دیکورات منازل</li>
            <li>الأجهزه المنزلیه</li>
            <li>الأثاث</li>
            <li>المطبخ و أدوات الطعام</li>
            <li>مستلزمات الحمام</li>
            <li>اجهزه صوت و فیدیو</li>
          </ul>
        </div>
      </div>
      <div className="footer-last">
        <span>
          {" "}
          <LuCopyleft id="last-icon" /> 2024 کل الحقوق محفوظه{" "}
        </span>
      </div>
    </div>
  );
};
export default Footer;