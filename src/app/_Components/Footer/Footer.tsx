export default function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto max-w-screen-xl py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; 2025. Omar Khaled. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
}
