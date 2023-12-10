import Feed from "./Feed";
import Popular from "./Popular";

export default function Sidebar() {
  return (
    <div className="grid divide-y">
      <Feed />
      <Popular />
    </div>
  );
}
