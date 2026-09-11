interface StudentInfoProps {
  name: string;
  program: string;
}

export default function StudentInfo({
  name,
  program,
}: StudentInfoProps) {
  return (
    <div className="mt-6 rounded-lg border p-6 shadow-sm">
      <h2 className="text-2xl font-bold">Student Information</h2>

      <p className="mt-3">
        <strong>Name:</strong> {name}
      </p>

      <p className="mt-2">
        <strong>Program:</strong> {program}
      </p>
    </div>
  );
}