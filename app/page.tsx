'use client'
import WebApp from "@twa-dev/sdk";
import {useEffect,useState} from "react"

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) {
      setUserData(WebApp.initDataUnsafe.user as UserData)
    }
  }, [])


  return (
    <main className="p-4">
      {
        userData ?
          (
            <>
              <h1>User Data</h1>
              <ul>
                <li>id:{userData.id }</li>
                <li>first_name:{userData.first_name }</li>
                <li>last_name:{userData.last_name }</li>
                <li>username:{userData.username }</li>
                <li>language_code:{userData.language_code }</li>
                <li>is_premium:{userData.is_premium }</li>
              </ul>

            </>

          ) :
          (
            <div>Loading...</div>

          )
      }
    </main>
  );
}
