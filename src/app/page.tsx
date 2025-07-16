"use client";
import { useEffect, useState } from "react"; 

interface User {
  id: number;
  name: string | null;
  email: string | null;
  adress: string | null;
  createdAt: string | null;
  updateAt: string | null;
}

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
async function fetchUsers(){

  try{
      const response = await fetch("/api/users");
      //const response = await fetch("google.com/api/users");
      if(!response.ok){
        throw new Error("Failed to fetch users");
      }
      const data: User[] = await response.json() as User[];
      setUsers(data);
  }catch (error){
    console.error("Error fetch users", error);
  }
}
void fetchUsers();
})

  return (
    <main className="bg-white">
      <code>{JSON.stringify(users, null, 2)}</code>
    </main>
    
  );
}
