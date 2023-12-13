import Sidebar from "@/components/Sidebar/Sidebar";
import TopicCreateForm from "@/components/topics/TopicCreateForm";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="grid grid-cols-5 gap-4 mt-6">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3">
        <h1 className="text-xl">Top posts</h1>
      </div>
      {session?.user ? (
        <div>
          <TopicCreateForm />
        </div>
      ) : null}
    </div>
  );
}
