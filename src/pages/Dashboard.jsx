import QueueOption from "../features/queue/QueueOption";
import StackOption from "../features/stack/StackOption";

export default function Dashboard() {
  return (
    <div className="px-20 py-20 flex flex-col gap-8">
      <StackOption />
      <QueueOption />
    </div>
  );
}
