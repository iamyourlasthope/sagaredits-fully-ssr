import CampaignForm from "../components/forms/CampaignForm";

export const metadata = {
  title: "Start Your Campaign – Sagar Edits",
  description: "Launch your campaign with Sagar Edits, Meme Marketer & Digital Creator. Fill out the form to get started.",
};

export default function CampaignPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0a232e] to-[#08222b]">
      {/* Blurred gradient overlay */}
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-blue-900 opacity-80 backdrop-blur-xl" aria-hidden="true" />
      {/* Page content here */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-24 px-4 flex-grow">
        <div className="relative w-full max-w-3xl mx-auto">
          <CampaignForm />
        </div>
      </div>
    </div>
  );
} 