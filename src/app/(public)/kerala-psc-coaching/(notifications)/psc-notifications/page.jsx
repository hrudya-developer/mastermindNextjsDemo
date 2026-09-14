import PscNotificationsHero from "./components/PscNotificationsHero";
import PscNotificationsList from "./components/PscNotificationsList";


export const metadata = {
  title: "Kerala PSC Notifications 2026 | Latest PSC Job Notifications",
  description:
    "Check the latest Kerala PSC notifications, gazette dates, application deadlines and official notification PDFs for upcoming Kerala PSC exams.",
};

export default function PscNotificationsPage() {
  return (
    <main className="min-h-screen bg-[#f5f9ff]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1450px]
          px-4
          py-6
          sm:px-6
          lg:px-8
          lg:py-8
        "
      >
        <PscNotificationsHero />

        <PscNotificationsList cid={1} />
      </div>
    </main>
  );
}