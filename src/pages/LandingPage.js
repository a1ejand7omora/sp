import { MGrid } from "../components/MGrid";
import { Search } from "../components/Search";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");
  return (
    <div>
      <Search />
      <MGrid key ={search} search={search} />
    </div>
  );
}
