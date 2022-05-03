import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center  pt-40">
      <Image
        src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        width={200}
        height={200}
        objectFit="contain"
      />

      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button className="bg-blue-400"></button>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className=" ml-auto bg-red-600 text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-red-700"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
