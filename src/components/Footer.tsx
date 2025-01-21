export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-300">
                  المميزات
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li>البريد الإلكتروني: info@example.com</li>
              <li>الهاتف: +123 456 789</li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex space-x-reverse space-x-4">
              {/* Add your social media icons here */}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
