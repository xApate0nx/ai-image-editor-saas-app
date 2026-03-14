import { env } from "~/env";

export default function HomePage() {
  return <div className= "text-yellow-300">{env.BETTER_AUTH_URL}</div>;
}
