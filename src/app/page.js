'use client'
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  //make a function for navigation 
  const navigation = (name)=>{
    router.push(name);
  }
  return (
    <div >
      <main >
        <User name = "HIms">event function and State</User>
        <br></br>
        <Link href="/login">Go to login page</Link>
        <br></br>
        <Link href="/about">Go to About page</Link>
        <br></br>
        <button onClick={()=>router.push("/login")}>Login Using Button</button>
        <br></br>
        <button onClick={()=>navigation("/login")}>Login Using Navigation</button>
        <br></br>
        <button onClick={()=>alert("its kartik")}>Click me</button>

      </main>
     
    </div>
  );
}
const User=(props)=>{ 
  return (
    <div>
      <h2>its a User {props.name}</h2>
    </div>
  )
}