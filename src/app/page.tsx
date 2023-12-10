import Sidebar from "@/components/Sidebar/Sidebar";
import TopicCreateForm from "@/components/topics/TopicCreateForm";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <h1 className="text-xl">Top posts</h1>
      </div>
      <div>
        <TopicCreateForm />
      </div>
    </div>
  );
}
