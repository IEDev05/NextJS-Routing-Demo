'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const router = useRouter();

  // Function for navigation
  const navigation = (name) => {
    router.push(name);
  };

  return (
    <div>
      <main className="container text-center mt-4">
        <User name="DemoName">Event Function and State</User>
        <br />
        <button className="btn btn-primary me-2" onClick={() => router.push("/login")}>
          Login Using Button
        </button>
        <button className="btn btn-success me-2" onClick={() => navigation("/login")}>
          Login Using Navigation
        </button>
        <button className="btn btn-warning" onClick={() => alert("It's Kartik")}>
          Click me
        </button>
      </main>
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>It's a User {props.name}</h2>
    </div>
  );
};
