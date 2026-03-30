import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ProfileClient } from "@/app/profile/profile-client";

export default function ProfilePage() {
  return (
    <div className="py-8 sm:py-10">
      <Container>
        <SectionHeading
          title="Profile"
          subtitle="Your info, preferences, and summary"
        />
        <div className="mt-6">
          <ProfileClient />
        </div>
      </Container>
    </div>
  );
}
