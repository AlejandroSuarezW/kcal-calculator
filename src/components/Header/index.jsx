import HeaderBtn from "./HeaderBtn";

export default function Header() { 
    return (
        <header className="p-[20px] color-light flex justify-between absolute top-0 right-[50%] w-full translate-x-[50%]">
            <HeaderBtn anchor link="https://www.instagram.com/alejandroo__suarezz/" />
            <HeaderBtn />
        </header>
    )
}