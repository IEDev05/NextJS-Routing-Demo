"use client";

import { useParams } from "next/navigation";
import React from "react";

// Map student IDs to names
const studentData = {
  1: "Kiran",
  2: "Him",
  3: "Kartik",
  4: "Kaushik",
  5: "Nono",
};

export default function Student() {
  const params = useParams();
  const studentId = params.student; 
  const studentName = studentData[studentId] || "Unknown"; 

  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name: {studentName}</h3>
    </div>
  );
}
