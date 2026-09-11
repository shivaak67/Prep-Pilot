import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import InterviewGenerator from "../components/interview/InterviewGenerator";
import InterviewSessionList from "../components/interview/InterviewSessionList";
import JobDescriptionForm from "../components/job-description/JobDescriptionForm";
import JobDescriptionList from "../components/job-description/JobDescriptionList";
import ResumeList from "../components/resume/ResumeList";
import ResumeUpload from "../components/resume/ResumeUpload";
import { fetchInterviewSessions } from "../api/interviews";
import WorkspaceLayout from "../components/WorkspaceLayout";

export default function DashboardPage() {
  const sessions = useQuery({
    queryKey: ["interview-sessions"],
    queryFn: fetchInterviewSessions,
  });
  const latest = sessions.data?.[0];
  const practiced =
    sessions.data?.reduce(
      (total, session) => total + (session.practiced_count || 0),
      0,
    ) || 0;
  const attempts =
    sessions.data?.reduce(
      (total, session) => total + (session.attempt_count || 0),
      0,
    ) || 0;
  const recommendation = sessions.data?.find(
    (session) => session.next_step,
  )?.next_step;
  return (
    <WorkspaceLayout title="Overview">
      <main className="dashboard-main" id="practice">
        <div className="page-heading">
          <div>
            <p className="eyebrow">YOUR PRACTICE ROOM</p>
            <h1>Your interview practice</h1>
            <p>Pick up a session or prepare for a new role.</p>
          </div>
          <a href="#new-practice" className="button-primary">
            New session ↗
          </a>
        </div>
        <div className="stats-strip">
          {[
            { label: "Practice sessions", value: sessions.data?.length || 0 },
            { label: "Questions practiced", value: practiced },
            { label: "Answer attempts", value: attempts },
          ].map((stat) => (
            <div className="stat-item" key={stat.label}>
              <p className="text-2xl font-bold tracking-tight">
                {sessions.isLoading ? "—" : sessions.isError ? "—" : stat.value}
              </p>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="dashboard-grid">
          <div className="space-y-6">
            <section className="continue-panel">
              <p className="eyebrow">
                {latest ? "Pick up where you left off" : "Your next step"}
              </p>
              <h2 className="continue-title">
                {latest
                  ? latest.job_description_preview
                  : "Build your first practice session"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {latest
                  ? `${latest.practiced_count || 0} of ${latest.question_count} questions practiced. Your saved answers and feedback are ready when you are.`
                  : "Bring a resume and a role you are excited about. We will help you turn your experience into a focused practice session."}
              </p>
              {latest ? (
                <Link
                  className="button-primary mt-6"
                  to={`/dashboard/sessions/${latest.id}`}
                >
                  Continue practice →
                </Link>
              ) : (
                <a className="button-primary mt-6" href="#materials">
                  Add practice materials →
                </a>
              )}
            </section>
            <section className="focus-note">
              <h2 className="text-sm font-semibold text-indigo-950">
                Focus for your next attempt
              </h2>
              <p className="mt-2 text-sm leading-6 text-indigo-900">
                {recommendation ||
                  "Choose one question. Explain your approach, name a tradeoff, and give a concrete example before opening the guidance."}
              </p>
            </section>
          </div>
          <InterviewGenerator />
        </div>
        <div className="mt-10" id="sessions">
          <InterviewSessionList />
        </div>
        <section
          id="materials"
          className="mt-14 scroll-mt-6 border-t border-gray-200 pt-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-700">
            RESUMES & TARGET ROLES
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Your materials
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Keep your resume current and give each target role a recognizable
            name.
          </p>
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <div>
              <ResumeUpload />
              <ResumeList />
            </div>
            <div>
              <JobDescriptionForm />
              <JobDescriptionList />
            </div>
          </div>
        </section>
        <footer className="mt-10 border-t border-gray-200 pt-6 text-xs text-gray-500">
          Prep Pilot · Built for thoughtful practice.{" "}
          <Link to="/privacy" className="ml-3 underline">
            Your data
          </Link>
        </footer>
      </main>
    </WorkspaceLayout>
  );
}
