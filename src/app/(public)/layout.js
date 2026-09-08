import StickyHorizontalNav from "@/components/hero/desktop-hero/StickyHorizontalNav";


export default function PublicLayout({
  children,
}) {
  return (
    <div
      className="
        min-h-screen
        bg-[#f4f9ff]
      "
    >
      <StickyHorizontalNav />

      {children}
    </div>
  );
}