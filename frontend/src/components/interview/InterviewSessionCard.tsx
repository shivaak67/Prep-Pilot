import { Link } from "react-router-dom";
import type { InterviewSessionSummary } from "../../types/interview";
import SessionProgress from "./SessionProgress";

type InterviewSessionCardProps = {
  session: InterviewSessionSummary;
  onDelete: (sessionId: number) => void;
  isDeleting: boolean;
  deletingSessionId: number | null;
};

export default function InterviewSessionCard({
  session,
  onDelete,
  isDeleting,
  deletingSessionId,
}: InterviewSessionCardProps) {
  const isThisSessionDeleting = isDeleting && deletingSessionId === session.id;

  function handleDelete() {
    const confirmed = window.confirm(
      "Delete this interview session? This cannot be undone.",
    );
    if (!confirmed) {
      return;
    }
    onDelete(session.id);
  }

  return (
    <li className="session-row">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-gray-900">
            {session.job_description_preview ||
              `Practice session #${session.id}`}
          </p>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600">
            {session.resume_filename} ·{" "}
            {(session.interview_type || "mixed").replaceAll("_", " ")}
          </p>
          <p className="mt-2 text-xs text-gray-500">
            {session.question_count} questions ·{" "}
            {new Date(session.created_at).toLocaleString()}
          </p>
          <div className="mt-3">
            <SessionProgress
              answerCount={session.answer_count}
              questionCount={session.question_count}
              practicedCount={session.practiced_count}
            />
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2">
          <Link
            to={`/dashboard/sessions/${session.id}`}
            className="session-open"
          >
            Open
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="session-delete disabled:opacity-50"
          >
            {isThisSessionDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </li>
  );
}
