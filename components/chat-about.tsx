import Image from "next/image";
import Link from "next/link";

const ChatAbout = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center space-y-5 px-5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="text-primary">Welcome</span> to Layzz 🎉
        </h1>
        <p className="max-w-lg font-medium">
          🚀 Stay connected with all your circles in one place - login to send
          message! 💬
        </p>
        <div className="flex justify-center">
          <Image
            src="/home-img.svg"
            alt="People chatting"
            width={300}
            height={300}
            priority
            className="object-contain"
          />
        </div>
        <p>
          Made with ❤️ by{" "}
          <a
            className="text-primary hover:text-popover-foreground font-bold"
            href="https://github.com/sohomofficial"
            target="_blank"
          >
            Sohom
          </a>
        </p>
        <p>
          <Link
            className="text-primary hover:text-popover-foreground font-semibold"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>{" "}
          🔒
        </p>
      </div>
    </div>
  );
};

export default ChatAbout;
