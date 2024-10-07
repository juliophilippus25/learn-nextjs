import Link from "next/link";
import Image from "next/image";

interface Props {
    name: string;
    avatarUrl: string;
}

const ListItemSearch = ({ name, avatarUrl }: Props) => {
    return <div className="inline-flex space-x-3 w-full py-3">
        <Image src={avatarUrl} alt={name} width={50} height={50} className="rounded-full border-2 border-orange-400"></Image>
        <div>
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm text-zinc-500 hover:text-orange-400"><Link href={`/users/${name}`}>Show detail</Link></p>
        </div>
    </div>
};

export default ListItemSearch