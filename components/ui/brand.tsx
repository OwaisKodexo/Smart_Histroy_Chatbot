import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { ChatbotUISVG } from "../icons/chatbotui-svg"

interface BrandProps {
  theme?: "dark" | "light"
}

export const Brand: FC<BrandProps> = ({ theme = "dark" }) => {
  return (
    <Link
      className="flex cursor-pointer flex-col items-center hover:opacity-50"
      href="https://smartmedhx.ai/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="mb-2">
        <img
          src={`${theme === "dark" ? "/images/logo.png" : "/images/lightlogo.png"} `}
          alt="logo"
          width={135}
          height={135}
        />
        {/* <ChatbotUISVG theme={theme === "dark" ? "dark" : "light"} scale={0.3} /> */}
      </div>

      <div className="text-3xl font-bold tracking-wide">
        Smart Medical History{" "}
      </div>
    </Link>
  )
}
