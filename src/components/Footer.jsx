export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-display text-xl sm:text-2xl tracking-wider text-[#d4af37] mb-4 sm:mb-6 font-light">
          Frank Skully
        </div>
        <p className="font-body text-xs sm:text-sm text-neutral-500 mb-6 sm:mb-8">
          Award-winning creative professional specializing in authentic criminal
          justice narratives
        </p>
        <div className="border-t border-neutral-900 pt-6 sm:pt-8">
          <p className="font-body text-xs text-neutral-600">
            © {new Date().getFullYear()} Frank Skully. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
