import { UserButton } from "@clerk/nextjs";


export default function DashboardPage() {
  return (
    <>
    <h1>WonderAI</h1>
    <h2> Dashboard Page || Protected </h2>
      <UserButton afterSignOutUrl="/"/>
    </>
  );
}

