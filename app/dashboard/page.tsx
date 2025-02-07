"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/auth/login");
    return <p>Redirecting...</p>;
  }

  const userId = session.user?.id; // user.id should now be a string

  return (
    <div>
      <h1>Welcome, {session.user?.email}</h1>
      <p className="text-blue-400">Your user ID is: {userId}</p>
    </div>
  );
}
