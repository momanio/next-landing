import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              الشعار
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline space-x-reverse space-x-4">
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                الرئيسية
              </Link>
              <Link
                href="#features"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                المميزات
              </Link>
              <Link
                href="#about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                من نحن
              </Link>
              <Link
                href="#contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
