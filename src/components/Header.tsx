import Image from "next/image";

export default function Header(){
    return(
        <>
            <div className="flex justify-between bg-gray-1000 px-4">
                <Image alt="Talk to Me!" src="/logo.svg" width={30} height={30}/>
                <Image alt="Hero Code" src="/hero.svg" width={30} height={30}/>   
            </div>
        </>  
    );
}